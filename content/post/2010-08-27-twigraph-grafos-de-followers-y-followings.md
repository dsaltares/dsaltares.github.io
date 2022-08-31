---
id: 302
title: Twigraph, grafos de followers y followings
date: 2010-08-27T16:31:11+00:00
author: David Saltares
layout: post
guid: http://siondream.com/blog/?p=302
url: /projects/twigraph-grafos-de-followers-y-followings/
views:
  - 1054
dsq_thread_id:
  - 1852021975
categories:
  - Projects
tags:
  - API
  - CPL
  - Dot
  - Graphviz
  - informática
  - pydot
  - Python
  - Software Libre
  - TinyBackup
  - Twigraph
  - Twitter
  - wrapper
---

![twigraph-logo.png](/img/wp/twigraph-logo.png)

En un post anterior hablé sobre cómo me introduje en la **programación en Python** con PyGTK y Glade desarrollando **[Tiny Backup](/desarrollo-informatica/tiny-backup-pygtk-y-glade/)**. Antes que eso ya había experimentado un acercamiento al lenguaje de la serpiente en un ejercicio no extremadamente útil aunque curioso, el resultado fue Twigraph.

### Twigraph

**Twigraph** es un pequeño script que utiliza un wrapper de la API de Twitter y una biblioteca para trabajar con el lenguaje Dot de [Graphviz](http://www.graphviz.org/). El script toma nuestro usuario y contraseña para producir una imagen PNG con el **grafo de nuestros followings y followers**. Nuestro usuario es el nodo central del cual parten flechas hacia nuestros following Las flechas recibidas corresponden a los followers. No es nada del otro mundo sino una pequeña práctica personal que ha quedado como una mera anécdota.

En un principio **pensé ahondar en la recursividad**, de manera que fuese posible ver qué amigos estaban conectados entre sí. Esta característica es ofrecida por Twitter actualmente pero en el momento de la creación de Twigraph no era así. El problema era el **límite de peticiones** que impone Twitter sobre APIs externas, el número de enlaces crecía exponencialmente y las excepciones saltaban constantemente.[

[![twitterfriendgraph.png](/img/wp/twitterfriendgraph.png)](/img/wp/twitterfriendgraph.png)

### Python Twitter

Hay que reconocer que el nombre de **[este wrapper de la API de Twitter](http://code.google.com/p/python-twitter/)** para Python no es nada original. No obstante es tremendamente sencillo de utilizar y está **bien [documentado](http://python-twitter.googlecode.com/hg/doc/twitter.html)**. Con este wrapper podemos postear tweets, ver nuestro timeline o comenzar a seguir a otro usuario. En definitiva, tendremos acceso a la inmensa mayoría de las posibilidades de Twitter desde Python y con ejemplos de muchas de ellas.

### Graphviz y pydot

Graphviz es un software increíblemente potente para la **generación de gráficas y diagramas** liberado bajo [Commons Public License](http://www.graphviz.org/License.php) (CPL). Podemos generarlas en forma de imágenes o en un formato vectorial para incluirlo en cualquier tipo de documentos como LaTeX. Cuenta con una **sintaxis propia llamada dot** con la que se definen los grafos a generar. Una herramienta muy potente de la que sólo conozco la superficie.

**[Pydot](http://dkbza.org/pydot.html) es el wrapper de Graphviz** para Python (aunque existen para multitud de lenguajes). Esta API es un poco más compleja y profunda por lo que puede resultar más difícil utilizarla. No obstante, si sólo deseamos las funciones básicas una ojeada a la [documentación](http://dkbza.org/pydot/pydot.html) y a sus ejemplos bastará.

Como siempre, si se quiere aprender un lenguaje o el uso de una API lo mejor es lanzarse a desarrollar un pequeño script o proyecto. Quien tenga curiosidad puede descargar Twigraph aunque aviso que no se trata el éxtasis de la elegancia.

[**Descargar twigraph.py**