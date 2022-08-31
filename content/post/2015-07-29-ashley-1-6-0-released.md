---
id: 3324
title: Ashley 1.6.0 released
date: 2015-07-29T22:58:27+00:00
author: David Saltares
layout: post
guid: /?p=3324
url: /projects/ashley-1-6-0-released/
dsq_thread_id:
  - 3984650486
categories:
  - Games development
  - Projects
tags:
  - Ashley
  - ECS
  - entity framework
  - games development
  - GitHub
  - Java
  - Maven
  - programming
---

![ashley-logo.png](/img/ashley/ashley-logo.png) 

A new [Ashley](https://github.com/libgdx/ashley) package has shipped, making
[1.6.0](https://github.com/libgdx/ashley/releases/tag/ashley-1.6.0) the latest
stable version. Here's the summary of the changes:

* **[API change](https://github.com/libgdx/ashley/issues/170)**: `Component` is now an interface.
* **[API addition](https://github.com/libgdx/ashley/issues/167)**: adds `getEngine()` to `EntitySystem`.
* **[API addition](https://github.com/libgdx/ashley/commit/f9152e61d30907000bbc483de6fa0afb61c16c31)**: `EntityListeners` now are notified by priority order.
* **[API consistency](https://github.com/libgdx/ashley/issues/173)**: defines what happens when an `Entity` is added twice to an `Engine` and when we try do nested updates. We throw an exception in both cases.
* **[API consistency](https://github.com/libgdx/ashley/commit/1dbfcb4dc1ea0ea0a0fdb0d481c00b7dd9b8dd8f)**: adding an `EntitySystem` of the same class twice replaces the previous one, just like it has always happened when adding `Components` to an `Entity`.
* **[Update](https://github.com/libgdx/ashley/commit/0284510e759c7d97c7d1e7acaf7d29d6071434cc)**: uses Libgdx 1.6.4.

Note that this version introduces API breaking changes. However, fixing your
code will be trivial. To use it, change your dependency to `com.badlogicgames.gdx:ashley:1.6.0`.
The new nightly dependency is `com.badlogicgames.gdx:ashley:1.6.1-SNAPSHOT`. As usual,
[all unit tests are passing](http://libgdx.badlogicgames.com:8080/job/ashley/) and
the wiki is up to date. Please keep up the good work sending more pull requests and reporting bugs.