---
id: 3622
title: Ashley 1.7.3 released!
date: 2016-09-10T14:16:40+00:00
author: David Saltares
layout: post
guid: /?p=3622
url: /projects/ashley-1-7-3-released/
dsq_thread_id:
  - 5133907297
categories:
  - Games development
  - Projects
---

![ashley-logo.png](/img/ashley/ashley-logo.png)

There's a new [Ashley](https://github.com/libgdx/ashley) release, check the changes for [1.7.3](https://github.com/libgdx/ashley/releases/tag/ashley-1.7.3) below:

* **API addition**: Adds ‘createComponent()" method to `Engine` class. Commit 07fc2ba6bcd9996c472c651b56b57b32fd8fd3a7.
* **API addition**: Adds ‘createEntity()" method to `Engine` class. Commit 45dd7e0e4a52c8d65f520fac4e8f4e83471b215b.
* **API addition**: Adds ‘addAndReturn()" method to `Entity` class. Commit 423148a2719873efb50d4f2b3982c247df4fceca.
* **Bug fix**: Fixes systems going out of priority order after removal. Issue #237. 
* **Bug fix**: Fixes returning pooled entity to the entity pool twice. Issue #221.
* **Update**: uses Travis for CI. Commit c4265eff694cfb34eaef1bdd929ee398c1ccfa64.
* **Update**: uses Libgdx 1.9.4.

To use it, change your dependency to `com.badlogicgames.gdx:ashley:1.7.3`. The new nightly dependency is `com.badlogicgames.gdx:ashley:1.7.4-SNAPSHOT`. Thanks for your continued support!