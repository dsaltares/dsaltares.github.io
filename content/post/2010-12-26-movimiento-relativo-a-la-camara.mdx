---
id: 797
title: Movimiento relativo a la cámara
date: 2010-12-26T12:52:13+00:00
author: David Saltares
layout: post
guid: http://siondream.com/blog/?p=797
url: /games/movimiento-relativo-a-la-camara/
views:
  - 781
dsq_thread_id:
  - 1852023184
categories:
  - Games development
tags:
  - cámara
  - movimiento
  - Ogre3D
  - PFC
  - programación
  - Sion Tower
  - videojuegos
---

![movimiento-camara.png](/img/wp/movimiento-camara.png)

En la mayoría de videojuegos en tercera persona, **la dirección hacia la que se mueve el personaje depende de la orientación de la cámara**. A pesar de que Sion Tower es un tower defense, controlamos a un personaje en tercera persona y, por tanto, debía incorporar este sistema. Estos días he estado exprimiendo los sesos para implementar dicho movimiento. ¡Por fin! Tras decenas de diagramas con vectores, ángulos y sistemas de coordenadas, lo he conseguido. En este artículo **explico un sencillo algoritmo para conseguirlo**.

### ¿Qué queremos conseguir?

El siguiente diagrama muestra el **sistema de coordenadas de Ogre**. Imaginad que nuestro personaje se encuentra en el origen *p = (0, 0, 0)* y que la cámara está en el *c = (0, 0, 50)* mirando hacia el origen. Nuestras teclas de movimiento son las clásicas: WASD. Al pulsar W el personaje debe moverse en la dirección negativa del eje Z, en cambio, si pulsamos D deberá hacerlo en la dirección positiva del eje X.

En cambio, si la cámara se situase en *c = (50, 0, 0)* mirando a *(0, 0, 0)* las teclas no tendrían el mismo efecto en términos absolutos, aunque se mantiene idéntico si tomamos como punto de referencia a la cámara. Si pulsamos W el personaje se desplazará en la dirección negativa del eje X. En el caso de que pulsemos D, el personaje se dirigirá en la dirección negativa del eje Z.

![coordenadas.png](/img/wp/coordenadas.png)

Por supuesto, **el personaje deberá girarse** para mirar hacia la dirección del desplazamiento. A continuación, detallamos la manera de implementar este sistema de movimiento.

### Algoritmo: objetos implicados

Este pequeño algoritmo está orientado al motor de renderizado Ogre3D y la biblioteca de dispositivos de entrada OIS aunque su filosofía es válida para otras herramientas. Lo ideal sería utilizar clases para el personaje y otros elementos aunque, en esta ocasión, he preferido no hacerlo en favor de la simplicidad del ejemplo.

Partimos de los siguientes objetos:

```
Ogre::SceneNode* nodoPersonaje; // Nodo que representa al personaje
Ogre::Vector3 direccionObjetivo; // Relativa a la cámara
Ogre::Vector3 direccionActual; // Relativa a la cámara
Ogre::Vector3 velocidad; // Velocidad del personaje
bool andando; // true si el personaje se está desplazando
OIS::Keyboard* teclado; // Teclado para controlar al personaje
```


### Algoritmo: desplazamiento del personaje

En cada frame debemos **tomar la dirección de la cámara** y quedarnos con su componente x y z ya que nos movemos en el plano. Esa será nuestra dirección *"hacia delante"*. Es muy sencillo obtener la dirección "*hacia la derecha"*, simplemente intercambiamos las componentes x y z cambiándole el signo a la z de *"hacia delante"*.

**La dirección objetivo** de este frame se puede calcular consultando las **pulsaciones de las teclas** y **combinando los dos vectores** anteriores utilizando sumas o restas. Nos podremos mover en 8 direcciones distintas. Por ejemplo, si deseamos dirigirnos hacia atrás a la izquierda tendremos: *direccionObjetivo = -delante – derecha*. Finalmente, **la dirección objetivo debe ser normalizada**, es decir, que el módulo del vector sea igual a 1\. Esto es muy importante si no queremos que la velocidad del personaje se vea alterada. Finalmente, aplicamos el desplazamiento teniendo en cuenta la velocidad, la dirección y el tiempo en milisegundos desde el último frame. Esta técnica se conoce como **LERP** (Linear Interpolation).

### Algoritmo: orientación del personaje

Sólo nos queda corregir la orientación del personaje para que mire hacia la dirección en la que se desplaza. Ogre pone a nuestra disposición el método *Vector3::getRotationTo* que, dado un vector nos devuelve el cuaternio a aplicar de forma que tras la rotación quede alineado con el segundo. **Los cuaternios se utilizan para representar rotaciones** en el espacio y están compuestos por un ángulo y un eje (en este caso el y). Si multiplicamos la rotación necesaria por la que ya posee el nodo del personaje, éste mirará hacia donde deseamos. Es importante el orden de los operadores ya que el producto de cuaternios no es conmutativo.

### Algoritmo: código completo

He aquí el código completo:

```
using namespace Ogre;

void EstadoJuego::actualizarPersonaje(Ogre::Real deltaT) {
    // Tomamos la dirección de la cámara
    Vector3 delante = camara->getDirection(); 
    delante.y = 0;

    // Vector relativo a la cámara, ortogonal hacia su derecha
    Vector3 derecha(-delante.z, 0, delante.x);

    // Calculamos la dirección objetivo en función de la pulsación de las
    // teclas.
    if (teclado->isKeyDown(OIS::KC_W) && teclado->isKeyDown(OIS::KC_D)) {
        direccionObjetivo = delante + derecha;
        andando = true;
    }
    else if (teclado->isKeyDown(OIS::KC_W) && teclado->isKeyDown(OIS::KC_A)) {
        direccionObjetivo = delante - derecha;
        andando = true;
    }
    else if (teclado->isKeyDown(OIS::KC_S) && teclado->isKeyDown(OIS::KC_D)) {
        direccionObjetivo = -delante + derecha;
        andando = true;
    }
    else if (teclado->isKeyDown(OIS::KC_S) && teclado->isKeyDown(OIS::KC_A)) {
        direccionObjetivo = -delante - derecha;
        andando = true;
    }
    else if (teclado->isKeyDown(OIS::KC_W)) {
        direccionObjetivo = delante;
        andando = true;
    }
    else if (teclado->isKeyDown(OIS::KC_S)) {
        direccionObjetivo = -delante;
        andando = true;
    }
    else if (teclado->isKeyDown(OIS::KC_D)) {
        direccionObjetivo = derecha;
        andando = true;
    } 
    else if (teclado->isKeyDown(OIS::KC_A)){
        direccionObjetivo = -derecha;
        andando = true;
    }
    else
        andando = false;

    // Normalizamos el vector direccion
    direccionObjetivo.normalise();

    // Si debemos desplazarnos, aplicamos la traslación y calculamos la
    // rotación a aplicar
    if (andando) {
        nodoPersonaje->translate(velocidad * direccionObjetivo * deltaT,
                                 Node::TS_WORLD);
        if (direccionObjetivo != direccionActual) {
            Quaternion rotacion = direccionActual.getRotationTo(direccionObjetivo,
                                                                Vector3(0, 1, 0));
            Quaternion rotacionActual = nodoPersonaje->getOrientation()
            nodoPersonaje->setOrientation(orientacion * rotacionActual);
            direccionActual = direccionObjetivo;
        }
    }
}
```


### Posibles mejoras

Este algoritmo no está pensado para incluirse en un juego completo puesto que debe ser refinado. Sólo tenemos en cuenta la animación externa del personaje (desplazamiento y orientación). El algoritmo se olvida completamente de la animación interna. Si quieres un mejor resultado deberías incluirla (andar, detenerse, etc).

La rotación es brusca, lo ideal sería aplicarla poco a poco de forma que el personaje se girase suavemente. Para hacerlo deberíamos dividir la rotación en partes y aplicar una en cada frame.

### Referencias

Seguramente quieras consultar fuentes mucho más fiables que yo:

*   *Game Engine Architecture (Jason Gregory)*: libro que cubre todos los aspectos a la hora de desarrollar un motor de juego. Contiene una sección de matemáticas muy bien explicada.
*   [*LERP (Wikipedia)*](http://en.wikipedia.org/wiki/Lerp_%28computing%29)
*   [*Quaternios (Confuted)*](http://www.cprogramming.com/tutorial/3d/quaternions.html): si esto de los cuaternios te ha sonado a chino te recomiendo que consultes este artículo en el que se hace una pequeña introducción.
*   [*Documentación oficial de Ogre*](http://www.ogre3d.org/docs/api/html/index.html): para obtener más detalles sobre las clases y los métodos empleados.