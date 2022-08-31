---
id: 2201
title: Abstracting platform specific code in libgdx
date: 2012-09-08T11:02:59+00:00
author: David Saltares
layout: post
guid: http://siondream.com/blog/?p=2201
url: /games/abstracting-platform-specific-code-in-libgdx/
dsq_thread_id:
  - 1852023085
categories:
  - Games development
---

One of the main reasons I"m working with [libgdx](http://libgdx.badlogicgames.com/) is its multiplatform capabilities. With very little effort you can target desktop (Windows/Linux/Mac), Android and WebGL able browsers. The problem comes with the *"little"* in the previous sentence. The developer is supposed to share the code base between all targets but sometimes it"s necessary to provide platform specific behaviour, maybe because a feature is not available in every device or just to adapt the product better to the target. Anyway, how do we achieve that in a fairly elegant fashion?

### Project structure

As many of you may already know, a multiplatform libgdx project is often arranged the following way:

*   **game**: shared code base
*   **game-desktop**: desktop launcher
*   **game-android**: Android launcher
*   **game-html**: HTML5 launcher

Every platform specific project depends on the base one and they all instantiate the main class from there, typically belonging to an `ApplicationListener` derived class (we shall name it *Game* from now on). Yes, it is perfectly fine to add platform specific code in the derived projects. However, it would be desirable to handle platform specific behaviour using an homogeneous approach, from our base project.

### The PlatformResolver interface

This interface belongs to the shared code base and it contains methods to provide platform specific behaviour depending on our needs. Here there"s just a very basic example but this interface could vary on a per game basis. A good idea would be to implement this class as a [Facade](http://en.wikipedia.org/wiki/Facade_pattern) providing access to platform specific subsystems such as input management or Facebook connectivity to mention a couple.

```
public interface PlatformResolver {
    public String getDefaultLanguage();
    public FacebookAPI getFacebookAPI();
    public InputManager getInputManager();
}
```


Our main game class would hold an instance to a specific *PlatformResolver* yet to be determined. It"s each platform"s responsibility to tell the game which instance should it use to solve platform specific issues.

```
public class Game implements ApplicationListener {
    protected static PlatformResolver m_platformResolver = null;

    public static PlatformResolver getPlatformResolver() {
        return m_platformResolver;
    }

    public static void setPlatformResolver(PlatformResolver platformResolver) {
        m_platformResolver = platformResolver;
    }
}
```

### PlatformResolver in use

In each descendent project we would have something similar to:

```
public class AndroidResolver implements PlatformResolver {}
public class DesktopResolver implements PlatformResolver {}
public class WebGLResolver implements PlatformResolver {}
```

Like I mentioned before, it"s necessary to tell the *Game* which platform resolver to use, we do that in every platform"s launcher. The desktop one could serve as a perfectly valid example:

```
public static void main(String[] args) {
    // Configure platform dependent code
    Game.setPlatformResolver(new DesktopResolver());

    // Launch the game
    new LwjglApplication(new Game(), cfg);
}
```

Later on during execution we could need to determine the system"s default language but that depends on the platform we are working with… Fear no more! We can happily ask our *PlatformResolver*:

```
String defaultLang = Game.getPlatformResolver().getDefaultLanguage();
```


### The possibilities

We are currently using this very same approach for [SionEngine](https://github.com/dsaltares/sionengine) and it"s proven to be flawless so far. You can abstract virtually any platform specific behaviour using something similar.

Soon there will be more and better on libgdx related stuff! Feel free to criticize and throw rocks at me because of this post.
