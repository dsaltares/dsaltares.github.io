---
id: 2454
title: '#OGAM: Freegemas HTML5'
date: 2013-01-14T23:39:29+00:00
author: David Saltares
layout: post
guid: http://siondream.com/blog/?p=2454
url: /games/ogam-freegemas-html5/
dsq_thread_id:
  - 1852024431
categories:
  - Games development
tags:
  - Freegemas
  - games development
  - GWT
  - HTML5
  - Java
  - libgdx
  - one game a month
  - WebGL
---

The HTML5 version of Freegemas is a project I've wanted to get around to finish for a long time. Finally, it greatly pleases me to say, it's done and you can play it right here, right now.

### [Play Freegemas](/freegemas/)

Freegemas HTML5 runs on any browser that supports WebGL. If you"re an unlucky Internet Explorer user, you then deserve to be deprived of the joys Freegemas has to offer. Anyways! As some of you may already know, my work here consisted in simply porting [the original Gosu game](http://code.google.com/p/freegemas/) to Java and libgdx so it"d run on JVM desktops and Android. At that point in time, libgdx HTML5 support was on the works which explains why there wasn't a browser release in the first place. Luckily enough, this is not the case anymore.

With libgdx's magical GWT backend up and running, deploying the WebGL version wasn't too much of a headache. Nevertheless, I"ll shamelessly count it as my [#OneGameAMonth](/games/one-game-a-month/) January project. Truth be told, I did improve performance quite a bit after taking a look at the VisualVM profiling tool, which will feed a future article. If my current knowledge of the Java language is poor to say the least, when I first released Freegemas, it was just hideous. As a consequence, memory allocation was running a bit wild.

Improvements summary:

*   Performance improvements
*   Fixed crash in board check
*   Added German language (thanks to [just4phil](http://www.badlogicgames.com/forum/memberlist.php?mode=viewprofile&u=1697) for that [pull request](https://github.com/dsaltares/freegemas-gdx/pull/1))

Enjoy.
