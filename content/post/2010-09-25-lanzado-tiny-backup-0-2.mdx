---
id: 453
title: Lanzado Tiny Backup 0.2
date: 2010-09-25T10:51:48+00:00
author: David Saltares
layout: post
guid: http://siondream.com/blog/?p=453
url: /projects/lanzado-tiny-backup-0-2/
views:
  - 544
dsq_thread_id:
  - 1852023678
categories:
  - Projects
tags:
  - backup
  - colaboración
  - Forja
  - Glade
  - PyGTK
  - Python
  - Software Libre
  - SVN
  - Tiny Backup
---

![tiny-backup1.png](/img/wp/tiny-backup1.png)

Tiny Backup es una pequeña interfaz para algunas de las funcionalidades del **comando dpkg** que permite a usuarios de GNU/Linux **realizar y restaurar copias** de la lista de paquetes instalados en el sistema. Está **desarrollado en Python utilizando PyGTK y Glade** para la GUI aunque de eso ya hablé suficiente en [el artículo](/desarrollo-informatica/tiny-backup-pygtk-y-glade/) que le dediqué hace algo más de un mes. En este pequeño escrito hablaré de la acogida de la primera versión y de los arreglos que incorpora la segunda.

### La recepción de Tiny Backup 0.1

Para mi sorpresa, **Tiny Backup 0.1 tuvo una buena acogida** teniendo en cuenta las pequeñas dimensiones del proyecto. No tanto por el número de descargas sino por el feedback de los usuarios. Incluso recibí una invitación para hablar sobre la aplicación **en el blog [Muy Linux](http://www.muylinux.com/2010/09/02/tiny-backup-tu-tambien-puedes-hacerlo)** (la cual acepté de buen gusto). Generalmente las impresiones fueron buenas aunque **se reportó algún que otro problema**. El más sangrante era que, al ejecutar Tiny Backup desde otro directorio que no fuese el del módulo principal (desde un acceso directo, por ejemplo) no se encontraban los ficheros referenciados por rutas relativas. Un fallo bastante grave del que debí haberme percatado en su momento.

### Bug encontrado y solucionado para Tiny Backup 0.2

**La solución** pasaba por obtener la ruta absoluta del módulo en ejecución y, a partir de la misma, construir el camino hasta el fichero deseado. El no ser muy ducho en Python y no haberle dedicado el suficiente tiempo a la aplicación ha hecho que la solución se retrase más de lo debido. **Gracias al lector [Cristian Arbazua](/desarrollo-informatica/tiny-backup-pygtk-y-glade/#comment-227)** y su afán colaborativo el bug ha sido cerrado. Sin duda, un aporte que recuerda el valor del Software Libre y anima a continuar. A continuación **un pequeño ejemplo** de la medida tomada:

```
# Vamos a construir la interfaz del formulario principal
builder = gtk.Builder()

# ANTES: Tomamos la ruta relativa donde se encuentra el Glade
path = 'glade/TinyBackup.glade'

# AHORA: Tomamos la ruta absoluta  donde se encuentra el Glade
path = os.path.dirname(__file__) + os.sep + 'glade/TinyBackup.glade'

# Cargamos el fichero
builder.add_from_file(path)
```


Cuando vi su aporte acudí velozmente a modificar el código, probarlo y subir una nueva versión a la [forja](http://code.google.com/p/python-tiny-backup/). Desde estos momentos podéis **[descargar Tiny Backup 0.2](http://python-tiny-backup.googlecode.com/files/tinybackup-0.2.tar.gz)**.

### Futuras versiones

El tiempo es un bien del que ando bastante escaso últimamente y, en estos momentos, mi tiempo de desarrollo lo acapara IberOgre y Sion Tower. No obstante, se me ocurren **un par de ideas para Tiny Backup 0.3**:

*   **Internacionalización**: empecé a desarrollar Tiny Backup en inglés pero me gustaría que estuviese disponible en algunos idiomas más: español, francés, alemán, etc. Tengo entendido que con Glade es sencillo incorporar internacionalización y sería interesante aprender cómo.
*   **Barra de progreso**: los usuarios necesitan feedback constante por parte del software que utilizan. Si encargan una tarea pesada y no aparece una barra de progreso creerán que la aplicación se ha colgado. Si queremos restaurar una extensa lista de paquetes el proceso puede llevar bastante tiempo así que esta característica tiene bastante prioridad.

Desconozco cuando podré dedicarle el tiempo suficiente para incorporar estas mejoras. En cualquier caso le vuelvo a agradecer a Cristian Arbazua su inestimable colaboración en este pequeño proyecto. **¡El feedback siempre es bienvenido!**