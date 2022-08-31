---
id: 1651
title: 'Búsqueda de caminos: Floyd vs A*'
date: 2011-06-22T13:46:59+00:00
author: David Saltares
layout: post
guid: http://siondream.com/blog/?p=1651
url: /games/busqueda-de-caminos-floyd-vs-a/
views:
  - 1217
dsq_thread_id:
  - 1852022056
categories:
  - Games development
tags:
  - 'A*'
  - búsqueda de caminos
  - Floyd
  - grafos
  - IA
  - navigation mesh
  - programación
  - Sion Tower
  - videojuegos
---

![avsfloyd.png](/img/wp/avsfloyd.png)

Las últimas semanas he estado trabajando en la **IA de Sion Tower** y por el momento el resultado es satisfactorio. Antes utilizaba el algoritmo **A** para la búsqueda de caminos de los enemigos, pero me di cuenta de que el rendimiento podía ser mucho mejor si precomputaba las búsquedas con una alternativa como **Floyd**. En este artículo hablo de las dos aproximaciones y comparo los resultados obtenidos.

<span style="color: #ff0000;">**Aclaración**</span>: en el texto no voy a entrar en detalles sobre los algoritmos [A*](http://en.wikipedia.org/wiki/A*_search_algorithm) ni [Floyd](http://en.wikipedia.org/wiki/Floyd%E2%80%93Warshall_algorithm). Si no los conoces deberías consultar los sendos artículos de Wikipedia o tu libro de algoritmia preferido.

### Aproximación 1: algoritmo A*

Como ya he dicho alguna vez, utilizo una malla de navegación diseñada con Blender para definir el área transitable por los enemigos. **Cada vez que algún monstruo desea saber el camino** hacia el personaje se realizaban los siguientes pasos:

1.  Ejecutar A* desde la celda del enemigo hasta la del personaje.
2.  Recuperar camino devuelto por A*.
3.  Simplificar el camino eliminando celdas intermedias para evitar zig-zag.
4.  Suavizado del camino mediante spline cúbico.

Los pasos 1 y 3 resultaban especialmente costosos en términos de tiempo mientras que los pasos 2 y 4 eran muy rápidos. Traté de minimizar la necesidad de recalcular rutas hacia el protagonista pero cuando el jugador se desplaza demasiado, resulta inevitable.

### Aproximación 2: algoritmo de Floyd

Al ejecutar A* cada vez que un enemigo deseaba rehacer su ruta estábamos incurriendo en muchos cálculos redundantes. **¿Por qué no precomputar los caminos mínimos?** Eso es precisamente lo que hace el algoritmo de Floyd, calcula los costes y el camino para viajar entre todos los pares de nodos x e y de un grafo. El resultado lo almacena en una matriz de costes mínimos (que no nos interesa) y otra de caminos (con la que nos quedaremos).

Al tener una matriz con los caminos ya calculados, **recuperar una ruta es mucho más eficiente** en tiempo. Incluso podemos eliminar la simplificación de caminos en cada consulta si también precalculamos todas las simplificaciones posibles. No obstante, se requieren una serie de **pasos iniciales**:

1.  Construcción de la matriz de costes iniciales a partir de la malla.
2.  Ejecución del algoritmo de Floyd.
3.  Simplificar todos los caminos actualizando la matriz de caminos mínimos.

Cuando un enemigo quiera conocer una ruta, simplemente realizamos los siguientes pasos cuyo tiempo es mínimo:

1.  Recuperar el camino.
2.  Suavizar el camino mediante un spline cúbico.

### Comparativa: A* vs Floyd

Todas las mediciones de tiempo que se muestran a continuación se han realizado sobre el mismo equipo, bajo la misma carga de trabajo y con la misma malla de navegación de 113 celdas.

**Coste inicial**: Utilizar Floyd conlleva una serie de cálculos iniciales que A* no son necesarios. No obstante, podemos ver que son bastante reducidos ya que suponen 2.18ms una sola vez al cargar cada nivel.

**Consumo de memoria**: podría preocuparnos el coste de almacenar la matriz de caminos mínimos. Para 113 celdas tenemos una matriz de 113 * 113 = 12769 enteros para indexar las celdas que componen los caminos. Esto equivale a 50KB, una cantidad reducida comparada con el tamaño de un modelo 3D animado. Es cierto que la aproximación de Floyd no es tan escalable como A* por el coste en memoria. Mi escenario de 113 celdas es pequeño, si aumentamos a 1000 celdas, la matriz ocuparía 4MB. Es O(n2) con respecto al número de celdas.

**Tiempo para construir un camino**: aquí es donde Floyd le saca una gran ventaja a A*. Recuperar un camino utilizando A* requiere en término medio 0.5ms mientras que utilizando Floyd necesitamos 0.02ms. La diferencia es muy significativa. Imaginad que tenemos 5 enemigos en pantalla que piden un camino en el mismo frame. Con A* el coste ascendería a 5 * 0.5ms = 2.5ms mientras que con Floyd invertimos 5 * 0.02ms = 0.1ms. En un juego mono-hilo que va a 60 FPS sólo disponemos de 16.6ms para realizar todos los cálculos (IA, colisiones, renderizado).

¡2.4 ms de diferencia por frame es una excelente optimización!

### Conclusión express

Precomputar caminos es mucho menos escalable que hacer los cálculos de forma dinámica pero la mejora de rendimiento es enorme. A pesar de ello, para escenarios grandes puede hacerse una búsqueda de caminos jerárquica (un tema un poco más complejo). Hay que tener cuidado ya que al utilizar Floyd, un cambio en el escenario implicaría una nueva precomputación completa.