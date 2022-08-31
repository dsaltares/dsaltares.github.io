---
id: 2082
title: 'Getting started with XNA: Urban Race'
date: 2011-12-07T09:05:28+00:00
author: David Saltares
layout: post
guid: http://siondream.com/blog/?p=2082
url: /games/getting-started-with-xna-urban-race/
views:
  - 302
dsq_thread_id:
  - 1852023859
categories:
  - Games development
tags:
  - C++
  - games development
  - Kingston
  - Kingston University project
  - PC
  - time attack
  - Urban Race
  - vídeo
  - Windows
  - Xbox 360
  - XNA
---

![urbanrace.jpg](/img/wp/urbanrace.jpg)

As if I didn't have enough work, I recently started another project which has an early deadline. For the Advanced Games Programming module here at Kingston University we have to develop a **game for Windows and Xbox 360** using C# and the [XNA framework](http://en.wikipedia.org/wiki/Microsoft_XNA). The final deadline was in a month counting from the start date and, halfway through the development, we had to show a demo. That's how **Urban Race** began just a week ago, in this post I"ll talk about the game and my **first impressions on XNA**.

### Pitching Urban Race

Urban Race is a **time attack racing game** set in several tracks within a city environment. The player has to drive through the track collecting time bonuses so he can reach the goal before the time expires.

The controls are extremely simple: using the arrow keys you can accelerate, brake and steer the car. I haven't though about the controls in Xbox 360 yet but they"ll be similar to those in every racing game in that console.

![urbanrace-ingame.jpg](/img/urban-race/urbanrace-5.jpg)


### XNA first impressions

It's really easy to criticize everything M$ does but I have to admit that **XNA is a fine games development framework** and it's specially well integrated within Visual Studio. 7 days ago I didn't know anything about C# (although I knew Java and C++) nor XNA itself and I've managed to get lots of stuff done: game objects model, Blender level loading, collision detection and basic response, games states management, etc.

Speaking of framework specific matters, I have to say that **the API is very friendly although it lacks some essential features**. It would be nice if it had scene graph management, dynamic shadows or a proper animation module. All of that seems quite essential for a high level games development framework but it's not built in. Apart from that, it's surprisingly easy how much you can achieve in so little time with, initially, a total lack of knowledge.

However, I"m fairly happy with it and its **integration with Visual Studio**. I"m not talking only about the excellent auto-complete or syntax checking features but the content pipeline management. Every game asset is controlled by Visual Studio, being the IDE responsible of binary exporting and reference checking. When you run your game it tells you which non existing asset are you trying to load. At first, relying on Visual Studio being in control of your assets might be a little uncomfortable and dangerous (and it is) but in the end it's been a good thing for me.

![urbanrace-blender.jpg](/img/wp/urbanrace-blender.jpg)

### Tools for the trade

Here is a list of tools I've been using to create my game:

*   <span class="Apple-style-span" style="line-height: 18px;">**Visual Studio**: IDE (the only option in this case).</span>
*   <span class="Apple-style-span" style="line-height: 18px;">**Blender**: open source 3D modelling, texturing and animation tool. I've used it as my level editor as well exporting to the [Dotscene xml format](http://www.ogre3d.org/tikiwiki/DotScene).</span>
*   <span class="Apple-style-span" style="line-height: 18px;">**The Gimp**: open source 2D graphic tool that I've used for texturing my models.</span>
*   <span class="Apple-style-span" style="line-height: 18px;">**Inkscape**: open source 2D vector tool which I've used to design my track's pieces since they needed to be geometrically exact so they could fit together.</span>
*   <span class="Apple-style-span" style="line-height: 18px;">**Fraps**: recording my game running.</span>

### Video after 7 days of work

I created a video showing the development progress in Urban Race after 7 days of work. You can see the crappy physics and camera behavior (none of those are final) among other features such as level loading or collision detection.

{{< youtube Dvb__ZmDC-A >}}