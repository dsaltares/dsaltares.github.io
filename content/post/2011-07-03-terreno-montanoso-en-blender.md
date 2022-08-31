---
id: 1656
title: Terreno montañoso en Blender
date: 2011-07-03T13:11:25+00:00
author: David Saltares
layout: post
guid: http://siondream.com/blog/?p=1656
url: /games/terreno-montanoso-en-blender/
views:
  - 1595
dsq_thread_id:
  - 1853359499
categories:
  - Games development
tags:
  - 3D
  - arte
  - Blender
  - montañas
  - Ogre
  - Sion Tower
  - stencil textures
  - terreno
  - tutorial
  - videojuegos
---

Me gustaría pedir disculpas por el descenso en el ritmo de publicación, el motivo es muy sencillo: estoy **trabajando de forma intensa en la interfaz de [Sion Tower](/proyectos/sion-tower/)**. Para el menú principal he creado un **escenario montañoso** con los enemigos aproximándose a la Torre Sagrada en medio de una intensa lluvia. **Modelar las montañas con Blender** es terriblemente sencillo una vez se conoce la técnica apropiada y aquí vamos a comentarla en detalle.

### Creación de la malla

Lo primero que debes hacer es abrir Blender y eliminar el cubo por defecto. Utilizaremos una rejilla o malla de vértices para modelar el terreno. El proceso es simple, habrá que modificar la posición *Z* (vertical) de varios vértices para crear elevaciones. Finalmente, utilizaremos suavizado para evitar los bordes abruptos.

Para **añadir la rejilla** seleccionamos *Add → Mesh → Grid* e indicamos el número de vértices. A mayor resolución más calidad pero el coste computacional en Blender y en un videojuego crecerá de forma cuadrática. En Sion Tower me ha bastado con *50×50*, el suavizado final se encargará de mejorar el resultado. Después, en modo edición, debes escalar la rejilla hasta que se ajuste a la escala de tu juego o entorno.

![blender-grid.jpg](/img/wp/blender-grid.jpg)
### Modelado de las montañas

La clave está en utilizar el modo de **edición proporcional** que activamos pulsando la tecla *O*. Veremos que el modo también puede activarse en la barra de herramientas *Proportional – On*. Este modo hará que, al modificar un vértice, los vecinos dentro de un radio de acción también se vean ligeramente afectados. Justo al lado establecemos el *Falloff* a *Smooth Falloff*. Para activar el suavizado, seleccionamos todos los vértices con *A* y pulsamos en *Set Smooth*.

![blender-elevacion.jpg](/img/wp/blender-elevacion.jpg)

El proceso a seguir para **crear o modificar elevaciones** es:

1.  Seleccionar un vértice con el botón derecho y ajustar el radio de acción con la rueda del ratón a nuestro gusto.
2.  Desplazar el vértice pulsando la tecla *G*, es importante restringirlo al eje vertical con la tecla *Z*, de lo contrario se producen efectos extraños.
3.  Repetir el proceso con vértices y radios de acción diferentes hasta conseguir el resultado deseado.

![blender-terrain.jpg](/img/wp/blender-terrain.jpg)

Recuerda que **las montañas son estructuras naturales** y que, por tanto, muestran multitud de irregularidades. En la asimetría y lo brusco está el secreto.

### Texturizar el terreno

Continuamos la creación del terreno **añadiendo una textura**:

1.  Seleccionamos el terreno, acudimos al panel de materiales (*F5*) y añadimos un material nuevo.
2.  Las montañas no tienen un aspecto de material plástico, por lo que establecemos su color especular a .
3.  Nos dirigimos al panel de texturas (*F6*) y añadimos una nueva textura de tipo imagen con césped.
4.  Cargamos la textura de fichero y establecemos las propiedades *XRepeat* e *YRepeat* que, como sus propios nombres indican, hacen repetir la textura.

![grass.jpg](/img/wp/grass.jpg)

Si pulsas *F12* verás el renderizado de tus montañas y no tardarás de percatarte de dos problemas: la iluminación y… **¡parecen las montañas de los hobbits estando verdes!** En primer lugar, deberás jugar con las fuentes de luz. Ahora nos centraremos en mezclar varias texturas.

![terrain.jpg](/img/wp/terrain.jpg)

### Texturas stencil

Un terreno de corte más realista tiene **varias texturas**: hierba, tierra, rocas o incluso nieve. Las transiciones entre las mismas deben ser suaves y su situación debe ser lógica: la hierba abunda en los valles mientras la roca en los picos montañosos. En esta sección aprenderemos a aplicar varias texturas a nuestro terreno mezclándolas entre sí de manera apropiada.

Imaginad que tendremos una **pila de capas con varias texturas** ordenadas: hierba, roca y nieve. En medio colocaremos dos texturas en escala de grises llamadas stencil que indicarán al sistema de renderizado cómo han de mezclarse las capas entre sí. Un color negro indica que sólo ha de visualizarse la capa superior, blanco significa que sólo se vera la capa inferior. Lo interesante es que un valor intermedio o gris significará que las capas se mezclarán siguiendo la ponderación del color.

![blender-stencil-3d.jpg](/img/wp/blender-stencil-3d.jpg)

Seguimos el siguiente proceso:

*  Cambiamos del modo edición al *Vertex Paint*.
*  Seleccionamos el panel de edición (*F9*) y veremos una paleta de colores. Elegimos el color negro y pulsamos sobre *set VertCol* y la malla quedará completamente negra (se visualizaría la capa inferior).
*  Elegimos el color blanco y configuramos tanto la opacidad como el tamaño.
*  Comenzamos a pintar el terreno: los picos deberían ser completamente blancos (roca), las lomas de un tono intermedio y los valles prácticamente negros (hierba).
*  Cuando estemos satisfechos seleccionaremos la vista *Top* y el modo de proyección ortográfico. Hemos de hacer una captura de pantalla y aislar la el resultado con cualquier software de edición de imágenes como Gimp.

![blender-stencil.jpg](/img/wp/blender-stencil.jpg)

*  Volvemos al modo edición y creamos una nueva textura debajo de la hierba de tipo imagen cargando la textura stencil hierba-roca. Esta textura no debe repetirse.
*  En el panel *Map To* deseleccionamos *Col* y activamos *Stencil* y *No RGB*.
*  Creamos una nueva textura para la roca, cargamos la imagen y aplicamos repetición.

![rock.jpg](/img/wp/rock.jpg)

![blender-stencil-aplicando.jpg](/img/wp/blender-stencil-aplicando.jpg)

Si renderizas con *F12* verás un resultado mucho más satisfactorio.

![terrain-rock.jpg](/img/wp/terrain-rock.jpg)

### Resultado final

Si repites el proceso stencil para añadir una **nueva capa con nieve** el resultado tendrá mucha más calidad:

![terrain-snow.jpg](/img/wp/terrain-snow.jpg)

La escena final para el **menú principal de Sion Tower** ha quedado de la siguiente manera:

![siontower-menu.jpg](/img/wp/siontower-menu.jpg)

<span style="color: #ff0000;">**Nota importante**</span>: A la hora de exportar a Ogre el modelo con las texturas stencil he tenido muchos problemas. Al final la solución ha pasado por mezclar yo mismo las capas stencil con las de texturas utilizando Gimp y aplicarlas a la maya utilizando mapeado UV.

![blender-stencil-precomputado.jpg](/img/wp/blender-stencil-precomputado.jpg)

### Referencias

Para realizar el proceso y redactar el artículo he seguido estos dos estupendos tutoriales con varios añadidos personales:

*   [Blender 3D: Noob to Pro – Landscape Modeling I: Basic Terrain](http://en.wikibooks.org/wiki/Blender_3D:_Noob_to_Pro/Landscape_Modeling_I:_Basic_Terrain)
*   [Blender 3D: Noob to Pro – Landscape Modeling II: Texture Stenciling](http://en.wikibooks.org/wiki/Blender_3D:_Noob_to_Pro/Landscape_Modeling_II:_Texture_Stenciling)