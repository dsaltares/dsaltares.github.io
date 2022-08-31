---
id: 2578
title: Libraries, libgdx and GWT survival guide
date: 2013-04-11T07:21:25+00:00
author: David Saltares
layout: post
guid: http://siondream.com/blog/?p=2578
url: /games/libraries-libgdx-and-gwt-survival-guide/
dsq_thread_id:
  - 1852024069
categories:
  - Games development
tags:
  - games development
  - Google Web Toolkit
  - GWT
  - HTML5
  - libgdx
  - WebGL
---

As of today, I truly believe libgdx to be the best open source cross platform games framework when it comes to 2D. As if desktop, Android and iOS were not enough, it also comes with a WebGL backend. Luckily enough, this does not force you to maintain a Javascript version of your game code. Instead, it relies on [Google Web Toolkit (GWT)](https://developers.google.com/web-toolkit/), which translates your Java project into optimized, obfuscated Javascript code.

> OMG. How does this work?

Black, arcane magic. I would presume it sacrifices a dozen virgins during the third full moon of the year to make it happen. Just don't ask.

### Considerable win? Yes. Silver bullet? No.

This is utterly awesome for obvious reasons. Only, an insignificant amount of extra code is needed for your games to be fully playable from any WebGL browser without requiring any extra plugins. Take that Flash, Unity and the like!

However, as they say, not everything that glitters is gold. GWT doesn't support every Java feature and this could potentially be a deal breaker depending on your existing codebase. Moreover, you could get unlucky and find out that the library that was about to make your life so much easier is not GWT friendly. Damn!

Last weekend, I was doing some work with libgdx that absolutely required browser compatibility. I happened to need a way of automatically placing tree nodes on a 2D surface. A smile was drawn on my face when I found the sexy [treelayout](https://code.google.com/p/treelayout/) library. Of course, it couldn't be that easy, there's no joy in victory when it hasn't been preceded by some pain. I had to adapt it to the GWT build process and fix a few compatibility issues.

If anything, this made me realise that including new Java libraries in your WebGL libgdx game is not so straightforward. Hence, this small survival guide.

### If you"re lucky, Setup UI

Chances are, you've setted up your project using the magnificent [Setup UI](http://www.aurelienribon.com/blog/2012/09/libgdx-project-setup-v3-0-0/) tool. Aurelien Ribon's free tool automatically creates cross platform libgdx Eclipse projects, including the libraries you want. Even though it has a system to add optional third party libraries, only a couple of them are available at the minute.

![gdx-setup-ui-3-RC-02-300x163.jpg](/img/wp/gdx-setup-ui-3-RC-02.jpg)


Long story short. As long as that external library you want is either Universal Tween Engine or Physics Body Editor loader, you"re good. Otherwise, read on, as you might have some work down the road. Hopefully, this situation will change in the future.

### GWT build process 101

Bare in mind this is a guide so you can fix your library problem and move on, those who seek a proper explanation, I"d recommend [the official documentation](https://developers.google.com/web-toolkit/doc/latest/DevGuideOrganizingProjects).

Let's get going! You will find a very special file named *GwtDefinition.gwt.xml* under the main package folder in the HTML5 project. It"ll look something like this.

```
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<module>
    <entry-point class="com.siondream.mygame.client.GwtLauncher"/>
    <set-configuration-property name="gdx.assetpath" value="../tranches-android/assets"/>
    <inherits name="MyGame"/>
    <inherits name="aurelienribon.tweenengine"/>
    <inherits name="com.badlogic.gdx.backends.gdx_backends_gwt"/>
</module>
```


Its main purpose is to tell the GTW compiler what modules the application depends on, and therefore, inherits from. As you can see, it's also used to specify the entry point class and add configuration params such as the assets folder location. I've obviously made *MyGame* module up, this would correspond to your core project. Look under the src folder of your core project and you should find a *MyGame.gwt.xml* file.

```
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE module PUBLIC "-//Google Inc.//DTD Google Web Toolkit trunk//EN" "http://google-web-toolkit.googlecode.com/svn/trunk/distro-source/core/src/gwt-module.dtd">
<module>
	<source path="com/siondream/mygame" />
</module>
```


As you can see, the *MyGame* module contains a single source path which is located under the *com.siondream.mygame* package. If you wanted, you could add more source path entries in this file as long as they point to packages under the same project.

Now you"re a GWT expert, right?

### Integrating a third party library

It's not hard to guess what you need to add an external library to your GWT build process. You've guessed right, it's necessary to add a new module inheritance entry in your *GwtDefinitions.xml* file that points to a module file, which in turn, points to where the source code is.

> Does that mean that I can't get away with just adding a third party jar to the build path?

Exactly. This is a bit of a downside because it requires you to import the whole library source into your workspace, and that means you need to be able to access the source in the first place.


> Crap!

Well, it's actually not too bad. In my particular case, I went to the treelayout Google Code repository, checked out the source using Tortoise SVN and imported the project, easy peasy. The next step would be to add a module definition file under the src folder in the treelayout project, let's name it *TreeLayout.gwt.xml*.

```
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE module PUBLIC "-//Google Inc.//DTD Google Web Toolkit trunk//EN" "http://google-web-toolkit.googlecode.com/svn/trunk/distro-source/core/src/gwt-module.dtd">
<module>
	<source path="org/abego/treelayout" />
</module>
```


Hang on, we"re almost there! Finally, add the inheritance entry to the *GwtDefinitions.xml* file.

```
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<module>
    <entry-point class="com.siondream.tranches.client.GwtLauncher"/>
    <set-configuration-property name="gdx.assetpath" value="../tranches-android/assets"/>
    <inherits name="MyGame"/>
    <inherits name="TreeLayout"/>
    <inherits name="aurelienribon.tweenengine"/>
    <inherits name="com.badlogic.gdx.backends.gdx_backends_gwt"/>
</module>
```


Done! If you take 10 minutes to offer some prayers to *$deity* and press GWT everything should just work.

**Note**: after someone saying, *"it just should just work"*, I've come to realise that such situation is hardly ever the case.

### Errors, expect them

Before carrying on with this section, I would always recommend to add these options to the GWT compiler.

```
-optimize 9 -strict
```


Optimize speaks for itself but strict means that the build process will bail out as soon as it encounters an error, rather than trying to keep going.

As long as you've followed the process, your library should be detected by the GWT compiler. However, like I've said before, [GWT doesn't support every Java feature](https://developers.google.com/web-toolkit/doc/latest/DevGuideCodingBasicsCompatibility). Every time you use an unsupported class or method you"ll get an error that looks like the following one.

```
[ERROR] Line 84: No source code is available for type java.util.Formatter; did you forget to inherit a required module?
```


> This is going to hurt, isn't it?

Again, GWT is not a silver bullet but it generally does a pretty good job. To tackle these issues you could try replacing every problematic class usage or method call by an equivalent, or an alternative of your own. Fear not, most Java stuff is there, the common troublesome areas I've come across are reflection, AWT and String.format().

### Off you go

These steps helped me with treelayout integration and I hope they can aid you too. In my case I had to go through them all as the library used unsupported features. We"re done here, feel free to comment with your own experiences. Also, if you find any errors in the text, please point it out so it can be promptly fixed.