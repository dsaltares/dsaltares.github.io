---
id: 1158
title: La pesadilla de los formatos 3D
date: 2011-03-18T11:47:08+00:00
author: David Saltares
layout: post
guid: http://siondream.com/blog/?p=1158
url: /games/la-pesadilla-de-los-formatos-3d/
views:
  - 958
dsq_thread_id:
  - 1852022618
categories:
  - Games development
tags:
  - Blender
  - Cinema 4D
  - COLLADA
  - exportación
  - formatos abiertos
  - formatos cerrados
  - Ogre3D
  - PFC
  - Sion Tower
  - videojuegos
  - XML
---

![formatos3d.png](/img/wp/formatos3d.png)

En el blog de desarrollo **no todo iban a ser alegrías y objetivos cumplidos**, también es justo y necesario tratar los escollos del camino. La **guerra de formatos** y los insufribles dolores de cabeza que provocan aquellos que son privativos no es algo que nos pille de primeras. ¿Cuántas veces un escalofrío nos ha recorrido el cuerpo cuando una institución pública nos envía un formulario importante en *.docx*? De la misma manera, este problema nos lo encontramos en el mundo de la animación en tres dimensiones.

### Cinema 4D es privativo pero existen exportadores

**Nuestro artista trabaja con [Cinema 4D](http://es.wikipedia.org/wiki/Cinema_4D)**, un software propietario de modelado y animación. En ningún momento se me pasaría por la cabeza rechazar una colaboración por este motivo. No seré yo quien lo coloque entre la espada y la pared: *"aprendes Blender o sales derechito por la puerta"*. Por supuesto, no quiero criticar su trabajo, lo está haciendo genial, no hay más que mirar los resultados. **El culpable es el formato** cerrado y su incompatibilidad a priori con Ogre. Lógicamente, en su momento **comprobé que existían exportadores** desde Cinema 4D a Blender y Ogre. Además, en caso de que los plugins diesen problemas podíamos **utilizar [COLLADA](http://en.wikipedia.org/wiki/COLLADA)**, un formato XML abierto para el intercambio de información 3D entre distinto software de creación de contenido (DCC).

![triste.jpg](/img/wp/triste.jpg)

### ¡Horror! El asunto no es tan sencillo

Nuestra sorpresa y desazón fueron máximas cuando comprobamos que **en la exportación a COLLADA se perdía información** imperdonable como el UV mapping de las texturas y las animaciones. Lo mismo ocurría con la totalidad de formatos supuestamente preparados para el intercambio.

Finalmente me he puesto en contacto con el desarrollador del plugin que exporta de Cinema 4D a Ogre más prometedor. Tras intercambiar varios correos y toneladas de problemas **hemos conseguido incluir el personaje** creado por AJR en la escena. No obstante, aún estamos tratando de solucionar problemas con las sombras proyectadas y las animaciones. Hemos [preguntado en el foro de Ogre](http://www.ogre3d.org/forums/viewtopic.php?f=2&t=63751) y seguimos indagando la forma de solucionarlo.

![siontower-ok.jpg](/img/wp/siontower-ok.jpg)

### Poco a poco se solucionan los problemas

Una vez encontremos los flujos de trabajo y de exportación adecuados no habrá demasiados problemas, pero hasta entonces uno pasa bastante miedo. Por estos inconvenientes y sintiéndolo mucho, nos será imposible incluir el personaje animado en la demo técnica antes de la fase local del CUSL. Cuando hayamos superado este problema **distribuiremos los personajes texturizados y animados en un formato abierto**.

![siontower-bad.jpg](/img/wp/siontower-bad.jpg)

Sin duda, no hay que fiarse en absoluto de estos formatos.

<span style="text-decoration: underline; color: #ff0000;">**Disclaimer**</span>: es posible que mi inexperiencia con el modelado 3D en general y con los formatos en particular me ha llevado a imprecisiones a lo largo de este artículo. Ruego no arrojen piedras.