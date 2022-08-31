---
id: 705
title: Instalar Ogre en Ubuntu de forma sencilla
date: 2010-11-18T22:43:39+00:00
author: David Saltares
layout: post
guid: http://siondream.com/blog/?p=705
url: /games/instalar-ogre-en-ubuntu-de-forma-sencilla/
views:
  - 1065
dsq_thread_id:
  - 1852022978
categories:
  - Games development
tags:
  - IberOgre
  - Ogre
  - OIS
  - PFC
  - Ubuntu
  - Wiki
---

![ogre_17_logo.gif](/img/wp/ogre_17_logo.gif)

Si sigues el proyecto [IberOgre](http://osl.uca.es/iberogre/index.php/P%C3%A1gina_Principal) desde sus comienzos es probable que recuerdes [este artículo](/proyectos/pfc/sion-tower/periplo-por-un-entorno-de-trabajo-para-ogre/) en el que contaba como **las pasé canutas para instalar Ogre 1.7** en mi entorno de producción (siempre quise decir esto, ¡suena tan rimbombante!). Mi objetivo era utilizar herramientas libres y no depender de ningún IDE en concreto a la hora de compilar proyectos. El caso es que ya no hay que compilar Ogre sino que tenemos unos **flamantes paquetes .deb** a nuestra disposición.

### Gracias a la comunidad

**Miembros de la comunidad** de Ogre llevaban lanzando paquetes deb no oficiales desde hacía algún tiempo (¡y yo sin saberlo!). Por fin aparecen en la web oficial de Ogre como **sistema de instalación en Ubuntu** a partir de la reciente [versión 1.7.2](http://www.ogre3d.org/download). Se trata de una aportación de gran valor que facilita mucho la vida a los usuarios de la biblioteca.

### Proceso de instalación

**He actualizado el artículo ["Instalación de Ogre3D 1.7 en GNU/Linux"](http://osl2.uca.es/iberogre/index.php/Instalaci%C3%B3n_de_Ogre3D_1.7_en_GNU/Linux) añadiendo una sección dedicada a Ubuntu con este nuevo método. A continuación hago un pequeño resumen para que veas lo sencillo que es:

En primer lugar debes añadir el repositorio PPA del *"team-ogre"* a tu sistema:

```
sudo add-apt-repository ppa:ogre-team/ogre
```


Para actualizar tu lista de paquetes disponibles recurre al clásico:

```
sudo apt-get update
```


Genial, sólo te queda:

```
sudo apt-get install libogre-dev
```


En IberOgre utilizamos OIS (Object Oriented Input System) para gestionar la entrada del usuario. Puedes descargar la última versión desde [su web en Sourceforge](http://sourceforge.net/projects/wgois/) aunque tendrás que compilarla con las [autotools](http://en.wikipedia.org/wiki/GNU_build_system). En realidad, nos basta con la versión de los repositorios:

```
sudo apt-get install libois-dev
```


### ¿Fácil, verdad?

He probado este nuevo proceso en un netbook con Ubuntu 10.04 y va de maravilla. Los makefiles utilizados en la wiki funcionan a la perfección, por lo que si sigues los artículos no tendrás ningún problema.

**Ahora todos viviremos más tranquilos**.