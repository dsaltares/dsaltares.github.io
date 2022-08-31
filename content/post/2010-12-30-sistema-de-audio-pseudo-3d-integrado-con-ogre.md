---
id: 815
title: Sistema de audio pseudo-3D integrado con Ogre
date: 2010-12-30T17:05:00+00:00
author: David Saltares
layout: post
guid: http://siondream.com/blog/?p=815
url: /games/sistema-de-audio-pseudo-3d-integrado-con-ogre/
views:
  - 760
dsq_thread_id:
  - 1858386165
categories:
  - Games development
tags:
  - 3D
  - audio
  - Ogre3D
  - OpenAL
  - PFC
  - SDL Mixer
  - Sion Tower
  - videojuegos
---

![audio3d-ogre1.png](/img/wp/audio3d-ogre1.png)

Como todo buen hijo de vecino, **[Sion Tower](/category/proyectos/pfc/sion-tower/) necesitará reproducir efectos de sonido y música** de fondo, de otro modo al jugador se le caerían dos lagrimones y lo cerraría para siempre. Ogre es un motor de renderizado y no incorpora elementos como un subsistema de audio, por tanto, debía buscarlo en otro lugar. Como he comentado anteriormente, Ogre cuenta con un sistema de gestión de recursos muy potente y ampliable. Sobra decir que mi audio debería **integrarse completamente** con dicho sistema. A continuación, relato mi pequeña odisea para conseguir lo deseado.

### Elegir una biblioteca de audio

Debía elegir una biblioteca para gestionar el audio, al menos a bajo nivel. **Las opciones más evidentes eran [SDL Mixer](http://es.wikipedia.org/wiki/Simple_DirectMedia_Layer#Componentes_adicionales) y [OpenAL](http://es.wikipedia.org/wiki/OpenAL)**. Indagando un poco, encontré una biblioteca auxiliar llamada **[OgreOggSound](http://www.ogre3d.org/tikiwiki/OgreOggSound&structure=Libraries)** que integraba OpenAL con Ogre incorporando audio 3D. Los ojos se me abrieron como platos pero me llevé una decepción cuando vi que la documentación brillaba por su ausencia. Además, **prefería aprender** la forma de extender la gestión de recursos de Ogre y cacharrear un poco con el audio.

**OpenAL** es al sonido lo que OpenGL al 3D en el ámbito open source. Es compatible con decenas de plataformas y está enfocada al desarrollo de videojuegos en 3D. Títulos triple A como Doom 3, Battlefield 2 o Jedi Knight lo han utilizado. Como era de esperar, es un **sistema muy grande y complejo**.

**SDL Mixer** es una biblioteca **pequeña y sencilla** que me permite regular aspectos como volumen y ángulo para provocar un efecto pseudo 3D. Ya había trabajado con ella en [Air Force Pilot](/proyectos/air-force-pilot/) y en [Granny's Bloodbath](/proyectos/grannys-bloodbath/) de forma satisfactoria. Además, es compatible con las plataformas que necesito. En fin, es más limitada pero me basta para mis necesidades.

### Integración con la gestión de recursos de Ogre

Los recursos que queramos **integrar con Ogre** deben implementar la interfaz [Resource](http://www.ogre3d.org/docs/api/html/classOgre_1_1Resource.html). Ogre utiliza el [ResourceGroupManager](http://www.ogre3d.org/docs/api/html/classOgre_1_1ResourceGroupManager.html) para gestionar los recursos a nivel global pero tiene un [ResourceManager](http://www.ogre3d.org/docs/api/html/classOgre_1_1ResourceManager.html) para cada tipo de recurso. Esto quiere decir que tenemos que implementar clases que hereden de ResourceManager. Los gestores de recursos no manejan objetos Resource directamente, sino que utilizan punteros inteligentes, [SharedPtr](http://www.ogre3d.org/docs/api/html/classOgre_1_1SharedPtr.html) muy similares a los [shared_ptr](http://www.boost.org/doc/libs/1_45_0/libs/smart_ptr/shared_ptr.htm) de Boost. Esto les permite mantener una sola instancia de cada recurso compartida por varias entidades.

SDL Mixer trata de forma distinta la música y los efectos de sonido por lo que planteé **dos nuevos recursos: Musica y Sonido**. A continuación tenéis la lista de clases resultante aunque al final de este artículo se expone un diagrama UML completo.

* SoundFX y SoundFXPtr
* Song y SongPtr
* SoundFXManager
* SongManager

La forma de trabajar con los nuevos recursos es semejante al estilo de Ogre. Queda completamente integrado:

```
// Al arrancar la aplicación
SoundFXManager* soundFXManager = new SoundFXManager();

// Durante la carga de algún estado
// Se le indica el nombre del recurso, ResourceGroupManager
// te proporciona la ruta completa.
SoundFXPtr sound = SoundFXManager::getSingleton().load("disparo.wav");

// Durante el game loop
sound->play();

// Al cerrar la aplicación
delete soundFXManager;
```


### Sencillo pero resultón sonido 3D

No todos los sonidos tienen porqué reproducirse con efecto 3D por lo que he modelado este pequeño sistema de forma independiente. **La clase Sound3D** tiene un SoundFXPtr y dos punteros a SceneNode. Uno de los nodos es el emisor y el otro el que escucha. El volumen varía en función de la distancia entre ambos nodos mientras que el ángulo entre ambos elementos produce un efecto estéreo. El siguiente diagrama lo ilustra:

![audio3d-esquema.png](/img/wp/audio3d-esquema.png)

SDL Mixer distribuye los efectos de sonido en los canales que se hayan reservado a tal efecto. Un mismo Sound3D puede estar reproduciéndose en canales distintos al mismo tiempo. La clase Sound3D controla internamente qué sonido tiene asociado cada canal. Se pone a disposición del desarrollador un **método estático para actualizar todos los sonidos 3D** en reproducción. Preferiblemente una vez por cada iteración del game loop deberíamos hacer:

```
// Actualizar todos los sonidos 3D en reproducción
Sound3D::update3DSound();
```


### A vista de pájaro

El siguiente **diagrama de clases** simplificado ilustra a grandes rasgos los elementos de este sistema de audio y sus relaciones.

![audio3d-clases1.png](/img/wp/audio3d-clases1.png)

### Para terminar

¡Vaya, me he extendido más de la cuenta! Han sido dos días intensos de trabajo entre aprender a extender la gestión de recursos de Ogre e implementación. En principio he desarrollado este sistema de sonido para Sion Tower pero en realidad **es completamente independiente**. Si estás desarrollando un juego y te interesa, acude a la [forja](https://forja.rediris.es/projects/cusl5-iberogre/) y utiliza lo que desees (es GPL).

Seguiré informando de mis avances, muchas gracias por leer.