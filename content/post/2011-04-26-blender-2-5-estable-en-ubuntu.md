---
id: 1314
title: Blender 2.5 estable en Ubuntu
date: 2011-04-26T11:40:08+00:00
author: David Saltares
layout: post
guid: http://siondream.com/blog/?p=1314
url: /computing/blender-2-5-estable-en-ubuntu/
views:
  - 1284
dsq_thread_id:
  - 1852024276
categories:
  - Computing
  - Games development
tags:
  - 3D
  - arte 3D
  - Blender
  - Blender Game Engine
  - informática
  - Software Libre
---

![blender25.jpg](/img/wp/blender25.jpg)

El pasado día 13 de abril se lanzó [la primera **versión estable de la línea 2.5 de Blender** (2.57)](http://www.blender.org/development/release-logs/blender-257/), la herramienta de modelado y animación 3D libre por excelencia. Entre sus múltiples mejoras se encuentra el **rediseño completo de la interfaz** y la **nueva API para Python**. Es posible descargarlo para Linux desde la web pero lo más cómodo es instalarlo en Ubuntu es a través de un PPA y a continuación explico cómo hacerlo.

* Agregamos el PPA a nuestra lista de repositorios:

```
sudo add-apt-repository ppa:cheleb/blender-svn
```


* Actualizamos la lista de paquetes

```
sudo apt-get update
```


* Instalamos Blender

```
sudo apt-get install blender
```


Listo, **ya podréis comenzar a trastear** con la versión estable de Blender con toda tranquilidad (las betas fallaban más que una escopeta de feria). Los que estuvieran familiarizados con la antigua interfaz no tendrán ningún tipo de problema para adaptarse, todo es más agradable, cómodo y se encuentra completamente a la vista. La ventaja es que los nuevos no saldrán espantados nada más verlo.

![blender257.jpg](/img/wp/blender257.jpg)

Cada vez tengo más ganas de echarle el guante a **Blender Game Engine**, la nueva API en Python y la sencillez para distribuir aplicaciones compatibles con varias plataformas y carentes de dependencias.

¡A disfrutarlo!