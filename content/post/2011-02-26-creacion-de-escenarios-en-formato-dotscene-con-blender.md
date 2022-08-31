---
id: 1077
title: Creación de escenarios en formato DotScene con Blender
date: 2011-02-26T19:49:59+00:00
author: David Saltares
layout: post
guid: http://siondream.com/blog/?p=1077
url: /games/creacion-de-escenarios-en-formato-dotscene-con-blender/
views:
  - 713
dsq_thread_id:
  - 1871128749
categories:
  - Games development
tags:
  - Blender
  - DotScene
  - escenarios
  - niveles
  - Ogitor
  - PFC
  - pugixml
  - Sion Tower
  - videojuegos
---

![escenarios-blender.png](/img/wp/escenarios-blender.png)

Como pudisteis ver en [el anterior vídeo](/proyectos/pfc/sion-tower/sion-tower-carga-de-escenarios-desde-blender-y-colisiones/ "Sion Tower, carga de escenarios desde Blender y colisiones") ya **he conseguido cargar un escenario creado con Blender**. En este artículo pretendo explicar porqué he escogido Blender como editor de escenarios y cómo funciona el **sistema de carga y gestión de niveles**. Como veremos, aún me quedan puntos por implementar pero no quería abarcarlo todo desde el principio. Todo a su tiempo, al menos el diseño está pensado para ser escalable.

### Blender vs Ogitor

A comienzos de enero escribí [un artículo](/proyectos/pfc/sion-tower/ogitor-instalacion-en-linux-y-el-formato-dotscene/ "Ogitor: instalación en Linux y el formato DotScene") en el que hablaba sobre un editor de escenarios desarrollado con QT y Ogre llamado **[Ogitor](http://www.ogitor.org/HomePage)**. Más tarde hice pruebas para ver si soportaba todo lo que necesitaba pero me di cuenta de que **se quedaba corto**. Es un proyecto muy prometedor pero le falta madurez y algunas cosas por implementar.

![ogitor.png](/img/wp/ogitor.png)

En cambio, **[Blender](http://www.blender.org/) es un editor 3D consagrado**, flexible, estable y con una comunidad mucho mayor. Busqué más alternativas y pregunté en Twitter por un buen editor de niveles **compatible con el formato DotScene**. El usuario [@makiolo](http://twitter.com/#!/makiolo) también sugirió amablemente Blender. Tras varias pruebas pude obtener el vídeo del anterior artículo. Si todo va bien y no me encuentro con ningún obstáculo insalvable utilizaré Blender.

### El formato DotScene y los escenarios de Sion Tower

**[DotScene](http://www.ogre3d.org/tikiwiki/DotScene) es un formato xml para definir escenas 3D** en Ogre, podéis acceder a su DTD [aquí](http://www.ogre3d.org/tikiwiki/DotSceneFormat). Contiene información sobre los nodos que componen la escena: cámaras, luces y entidades. Así mismo también ofrece datos sobre la luz ambiente y el color de fondo. A continuación tenéis el fichero xml correspondiente a la escena por defecto de Blender (un cubo, una cámara y un punto de luz):

```
<scene formatVersion="1.0.0">
  <nodes>
    <node name="Lamp">
      <position x="4.076245" y="5.903862" z="-1.005454"/>
      <quaternion x="-0.284166" y="0.726942" z="0.342034" w="0.523275"/>
      <scale x="1.000000" y="1.000000" z="1.000000"/>
      <light name="Spot" type="point">
        <colourdiffuse r="1.000000" g="1.000000" b="1.000000"/>
        <colourspecular r="1.000000" g="1.000000" b="1.000000"/>
        <lightattenuation range="5000.0" constant="1.000000" linear="0.033333" quadratic="0.000000"/>
      </light>
    </node>
    <node name="Cube">
      <position x="0.000000" y="0.000000" z="-0.000000"/>
      <quaternion x="0.000000" y="0.000000" z="-0.000000" w="1.000000"/>
      <scale x="1.000000" y="1.000000" z="1.000000"/>
      <entity name="Cube" meshFile="Cube.mesh"/>
    </node>
    <node name="Camera">
      <position x="7.481132" y="5.343665" z="6.507640"/>
      <quaternion x="-0.212056" y="0.386910" z="0.085793" w="0.893293"/>
      <scale x="1.000000" y="1.000000" z="1.000000"/>
      <camera name="Camera" fov="37.849289" projectionType="perspective">
        <clipping nearPlaneDist="0.100000" farPlaneDist="100.000000"/>
      </camera>
    </node>
  </nodes>
  <externals>
    <item type="material">
      <file name="Scene.material"/>
    </item>
  </externals>
  <environment>
    <colourambient r="0.000000" g="0.000000" b="0.000000"/>
    <colourbackground r="0.056563" g="0.220815" b="0.400000"/>
  </environment>
</scene>
```


Ya comenté que **utilizaría la biblioteca [pugixml](http://code.google.com/p/pugixml/)** para procesar los ficheros xml de cada nivel. Tiene un rendimiento excelente, cuenta con una documentación clara y es muy sencilla de utilizar. No requiere instalaciones ya que simplemente hay que añadir tres ficheros al proyecto. Lo que sigue es un pequeño ejemplo para leer la información del entorno de la escena:

```
void Level::loadAmbientInfo(const pugi::xml_document& doc) {
    // Cargamos el documento
    pugi::xml_node rootNode;

    if (!(rootNode = doc.child("scene"))) {
        cerr < < "Level::loadNodesInfo(): error al leer el fichero xml en elemento scene" << endl;
        exit(1);
    }

    // Buscamos el nodo ambient
    pugi::xml_node enviromentNode;

    if (!(enviromentNode = rootNode.child("environment"))) {
        cerr << "Level::loadNodesInfo(): error al leer el fichero xml en elemento enviroment" << endl;
        exit(1);
    }

    // Tomamos el SceneManager
    Ogre::SceneManager* sceneManager = Game::getSceneManager();

    // Leemos ambientColour
    Ogre::ColourValue ambientColour;
    pugi::xml_node colourNode = enviromentNode.child("colourAmbient");
    ambientColour.r = colourNode.attribute("r").as_float();
    ambientColour.g = colourNode.attribute("g").as_float();
    ambientColour.b = colourNode.attribute("b").as_float();

    // Establecemos el ambient colour
    sceneManager->setAmbientLight(ambientColour);
}
```


Tenemos un problema y es que no **nos basta con conocer los objetos que componen la escena**. Para los escenarios de Sion Tower necesitamos almacenar más datos: nombre, descripción, música que sonará durante la partida, icono, oleadas de enemigos, posición inicial del personaje, posición de la reliquia, [navigation mesh](http://en.wikipedia.org/wiki/Navigation_mesh) (para la búsqueda de caminos), etc. DotScene proporciona un campo *userData* para albergar información personalizada pero es complicado trabajar con él desde Blender. En secciones posteriores veremos cómo he abordado este problema.

### Exportando desde Blender a DotScene

Para exportar una escena de Blender al formato DotScene es necesario **instalar el plugin correspondiente**. Las instrucciones son las siguientes:

*   [Descargar el plugin](http://ogreaddons.svn.sourceforge.net/viewvc/ogreaddons/trunk/blendersceneexporter/ogredotscene.py)
  *   Si utilizas GNU/Linux, copia el plugin en *~/.blender/scripts/* y dale permisos de ejecución.
  *   Si utilizas Windows copia el plugin en la carpeta plugins dentro del directorio de instalación de Blender. Por defecto es *C:\Archivos de Programa\Blender Foundation\Blender*.

![exportar-dotscene.png](/img/wp/exportar-dotscene.png)

Cuando tengamos nuestra escena en Blender hacemos click en *file → export → OGRE Scene*. Debemos seleccionar los objetos que queramos exportar (normalmente todos) y corregir los ejes X,Z ya que en Blender se disponen al revés que en Ogre. Por último elegimos la ruta destino y pulsamos sobre *"exportar"*.

### Sistema de carga de niveles

El sistema de carga de niveles de Sion Tower se compone de dos clases principales: *Level* y *LevelManager*. La clase *Level* contiene la información de un nivel de juego completo (escena, oleadas de enemigos, posición inicial del personaje, etc). Una vez creado, un objeto *Level* puede encontrarse en dos estados: **inicializado** o **cargado**. Al estar inicializado sólo estará disponible su información básica como el nombre o la descripción. Si empleamos el método *Level::load* podremos acceder a los objetos del escenario, la música que deberíamos reproducir, etc aunque ocupará mucha más memoria.

![levels.png](/img/wp/levels.png)

Cuando se crea un nivel, se lee la i**nformación básica** de un sencillo fichero xml independiente del DotScene. Los niveles tienen un identificador de forma que el fichero DotScene debe ser i*d_scene.xml* y el que contiene información básica debe ser *id_info.xml*. Lo siguiente es un ejemplo de fichero de información básica:

```
< ?xml version="1.0" encoding="UTF-8" ?>
<basicinfo>
    <name>The Hall</name>
    <description>Some Goblins assault the main Hall of the Tower</description>
    <song name="music.ogg" group="" />
</basicinfo>
```


La clase *LevelManager* es la encargada de detectar los niveles disponibles, inicializarlos, controlar su ciclo de vida y permitir al usuario el acceso a los mismos. Sigue el patrón [Singleton](http://es.wikipedia.org/wiki/Singleton) y en el momento de su creación toma todos los ficheros *_info.xml* del directorio *media/levels* para construir los niveles.

![level_system.png](/img/wp/level_system.png)

### Convenciones en el nombrado

**Los nodos** que contengan entidades (mayas tridimensionales) **pueden tener varios significados** dentro de Sion Tower en función de su nombrado.

*   **Objetos colisionables**: siguen el patrón *"scene – objectType – objectNumber"*. El tipo de objeto nos indica el modelo colisionable que posee (table, bigWall, chair…). El número evita que tengamos entidades duplicadas.
*   **Posición del jugador**: la entidad *"player"* se utiliza para definir la posición inicial del jugador.
*   **Posición de la reliquia**: la entidad *"relic"* define la posición del objeto precioso que debe proteger nuestro protagonista.

El fichero DotScene generado con Blender deberá contener información adicional aún no implementada como:

*   **Navigation mesh**: maya que indica la superficie por la que pueden desplazarse los enemigos. Resultará muy útil para la búsqueda de caminos y la inteligencia artificial.
*   **Oleadas de enemigos**: otras entidades deberán definir el tipo de enemigo, el momento en el que entrará y por dónde lo hará.

![wow-navmesh.jpg](/img/wp/wow-navmesh.jpg)

El navigation mesh puede representarse mediante pequeñas esferas, así como la posición inicial de la reliquia o el personaje, a gusto del diseñador de niveles. Lo importante es que se cumplan las reglas de nombrado.

### Catálogo de objetos colisionables

La clase *LevelManager* lleva internamente un catálogo de objetos Body que definen los tipos de elementos colisionables que podemos encontrar en la escena. Al cagar un nivel y toparnos con una entidad del tipo *"scene – objectType – objectNumber"* le pedimos a *LevelManager* que nos devuelva el Body correspondiente con el identificador indicado mediante el método *createBodyFromCatalog()*. El catálogo se pruebla al crear la única instancia de *LevelManager* desde un fichero como el siguiente:

```
< ?xml version="1.0" encoding="UTF-8" ?>
<bodies>
    <body name="floor" type="1">
        <shape type="plane">
            <position x="0" y="0" z="0"/>
            <normal x="0" y="1" z="0"/>
        </shape>
    </body>
    <body name="wallcentered" type="2">
        <shape type="obb">
            <center x="0" y="0" z="0"/>
            <extent x="0.5" y="1" z="0.04"/>
            <axes a00="1" a01="0" a02="0" a10="0" a11="1" a12="0" a20="0" a21="0" a22="1" />
        </shape>
    </body>
    <body name="wall" type="2">
        <shape type="obb">
            <center x="0" y="1" z="0"/>
            <extent x="0.5" y="1" z="0.04"/>
            <axes a00="1" a01="0" a02="0" a10="0" a11="1" a12="0" a20="0" a21="0" a22="1" />
        </shape>
    </body>
    <body name="cube" type="2">
        <shape type="obb">
            <center x="0" y="0" z="0"/>
            <extent x="1" y="1" z="1"/>
            <axes a00="1" a01="0" a02="0" a10="0" a11="1" a12="0" a20="0" a21="0" a22="1" />
        </shape>
    </body>
    <body name="sphere" type="2">
        <shape type="sphere">
            <center x="0" y="0" z="0"/>
            <radius value="1"/>
        </shape>
    </body>
</bodies>
```


### Próximamente

Espero terminar de pulir el sistema de niveles y conseguir el arte necesario para subir un nuevo vídeo más vistoso. **¡Seguiré informando!**