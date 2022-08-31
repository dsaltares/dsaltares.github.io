---
id: 2072
title: Flocking behavior demo
date: 2011-11-26T08:39:02+00:00
author: David Saltares
layout: post
guid: http://siondream.com/blog/?p=2072
url: /games/flocking-behavior-demo/
views:
  - 109
dsq_thread_id:
  - 1853024101
categories:
  - Games development
tags:
  - Artificial Intelligence
  - Boids
  - C++
  - demo
  - Flocking
  - games development
  - Kingston University
  - Kingston University project
  - Open Scene Graph
  - Reynolds
  - Steering Behaviors
---

{{< youtube og9qYMzx3V0 >}}

I've just finished this simple **flocking behavior demo** based on the [3 Reynolds rules](http://en.wikipedia.org/wiki/Flocking_(behavior)): separation, cohesion and alignment. It was part of a coursework for the *Strategy & Intelligent Games* module I"m taking here in Kingston University. I know it's not precisely pretty but at least the boids are moving in a nice way. It's written in C++ using the despicable [Open Scene Graph](http://www.openscenegraph.org/) library (such an uncomfortable API).

**Features**:

*   <span class="Apple-style-span" style="line-height: 18px;">3 Reynolds rules: separation, cohesion and alignment.</span>
*   <span class="Apple-style-span" style="line-height: 18px;">Collision avoidance.</span>
*   <span class="Apple-style-span" style="line-height: 18px;">User interaction: dynamic mouse seeking or avoidance.</span>
*   <span class="Apple-style-span" style="line-height: 18px;">Steering behaviors blending.</span>
*   <span class="Apple-style-span" style="line-height: 18px;">Configurable parameters using an XML options file.</span>

Most of the algorithms have been extracted from the *Artificial Intelligence for Games* book written by Ian Millington and John Funge. If you"re interested in the topic it's totally a must read, I strongly recommend it.