---
id: 1354
title: Extender el sistema de gestión de recursos de Ogre
date: 2011-05-10T18:19:21+00:00
author: David Saltares
layout: post
guid: http://siondream.com/blog/?p=1354
url: /games/extender-el-sistema-de-gestion-de-recursos-de-ogre/
views:
  - 838
dsq_thread_id:
  - 1866286845
categories:
  - Games development
tags:
  - audio
  - IberOgre
  - Jamendo
  - Ogre3D
  - PFC
  - recursos
  - SDL
  - SDL_mixer
  - sonido
  - The Freesound Project
  - videojuegos
---

![extender-recursos-iberogre.jpg](/img/wp/extender-recursos-iberogre.jpg)

Acabo de publicar un **nuevo artículo** en IberOgre titulado **["Extender la gestión de recursos, audio"](http://osl2.uca.es/iberogre/index.php/Extender_la_gesti%C3%B3n_de_recursos,_audio)**. Es un completo texto en el que se exponen todos los conocimientos necesarios para integrar los recursos de tu propio juego (niveles, audio, scripts de IA, etc) dentro del sistema de gestión de recursos de Ogre. La teoría se lleva a la práctica creando un sistema de audio sobre [SDL](http://www.libsdl.org/), característica inexistente en Ogre de forma inicial.

Los **contenidos** de forma esquemática son:

*   Instalación de SDL y SDL_mixer en GNU/Linux y Windows.
*   Inicialización y cierre de SDL.
*   Conceptos sobre la extensión del sistema de recursos.
*   Primer ejemplo: música.
*   Segundo ejemplo: efectos de sonido.
*   Ejemplo final: escenario de monólogos en el que tomamos el papel del regidor. Podemos reproducir las melodías del supuesto programa o añadir efectos de público como risas o aplausos.

El sistema de audio está tomado del que posee Sion Tower, la música proviene de [Jamendo](http://www.jamendo.com/es/album/41851) y los efectos de [The Freesound Project](http://www.freesound.org/index.php). Como siempre, se aceptan cualquier tipo de comentarios.