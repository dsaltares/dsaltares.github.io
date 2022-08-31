---
id: 1386
title: Sistema de actores
date: 2011-05-24T11:01:41+00:00
author: David Saltares
layout: post
guid: http://siondream.com/blog/?p=1386
url: /games/sistema-de-actores/
views:
  - 815
dsq_thread_id:
  - 1905845055
categories:
  - Games development
tags:
  - actores
  - clases
  - diseño
  - Ogre3D
  - Sion Tower
  - videojuegos
---

![siontower-actores.png](/img/wp/siontower-actores.png)

Tras publicar varios artículos en [IberOgre](http://osl2.uca.es/iberogre/index.php/P%C3%A1gina_Principal), he decidido **retomar el trabajo en Sion Tower** con el objetivo de tener una versión inicial a finales de julio. La primera tarea que he llevado a cabo es una **refactorización del sistema de actores** con el objetivo de hacerlo más extensible y evitar la duplicación de código en la medida de lo posible aunque crezca la verticalidad en la jerarquía. Por el momento no todas las clases están implementadas pero sí diseñadas. A continuación, una pequeña explicación del sistema.

El sistema de actores está compuesto por las siguientes clases:

*   **GameObject**: encapsula un *SceneNode* de Ogre con un *Body* del [sistema de colisiones](/proyectos/pfc/sion-tower/stc-sion-tower-collisions-v0-2/ "STC: Sion Tower Collisions v0.2"). Modela de forma genérica todos los objetos del juego.
*   **GameMesh**: hereda de *GameObject* y le añade un *Entity*, se utiliza para modelar los elementos del juego formados por mallas poligonales, como el escenario.
*   **Actor**: hereda de *GameMesh* y añade estados, animaciones y manejadores de estados para los personajes del juego (enemigos y protagonista).
*   **Player**: hereda de *Actor* y modela al protagonista del juego añadiendo su lógica de control particular.
*   **Enemy**: también hereda de *Actor* y modela de forma genérica el comportamiento de los enemigos.
*   **Spell**: hereda de *GameObject* y añade sistemas de partículas para modelar los hechizos del juego junto a sus explosiones.

![actors-clases.png](/img/wp/actors-clases.png)

En *GameObject* contamos con el enumerado *Type* para distinguir entre tipos de objetos de juego. Se cuenta con un método *getType* virtual puro que cada clase deberá implementar devolviendo el valor del enumerado correspondiente. De esta forma podemos **conocer el tipo de un objeto** de juego a partir de un *GameObject** y hacer casting sin peligro en caso de ser absolutamente necesario. También es posible utilizar el tipo de objeto para hacer un filtrado en la detección de colisiones.

```
class GameObject {
    public:

        enum Type {
            SIMPLEMESH = 0,
            FLOOR = 1,
            SCENE = 2,
            PLAYER = 3,
            ENEMY = 4,
            SPELL = 5
        };

        virtual Type getType() const = 0;

        ...
};
```


Podéis conocer a fondo el sistema en [la rama correspondiente de la Forja de Red Iris](https://forja.rediris.es/plugins/scmsvn/viewcvs.php/siontower/branches/actors/?root=cusl5-iberogre). En breve, os mostraré un vídeo con el sistema de lanzamiento de proyectiles mágicos funcionando.