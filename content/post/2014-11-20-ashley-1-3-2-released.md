---
id: 3184
title: Ashley 1.3.2 released
date: 2014-11-20T22:26:04+00:00
author: David Saltares
layout: post
guid: http://siondream.com/blog/?p=3184
url: /games/ashley-1-3-2-released/
dsq_thread_id:
  - 3246562495
categories:
  - Games development
tags:
  - Ashley
  - entity systems
  - games development
  - libgdx
  - programming
---
![ashley-logo.png](/img/ashley/ashley-logo.png)

More features, bug fixes and improvements for [Ashley](https://github.com/libgdx/ashley) entity framework on this new [release](https://github.com/libgdx/ashley/releases/tag/ashley-1.3.1).

  * **[API addition](https://github.com/libgdx/ashley/commit/974f12f6d53c5d92992ddd6bf09edd44937d9e66)**: we now use a builder pattern to create `Family` objects. More about it on the [wiki](https://github.com/libgdx/ashley/wiki/How-to-use-Ashley#entity-families).
  * **[API addition](https://github.com/libgdx/ashley/commit/905b26895536c57d9d42d994e62237c60f909e0c)**: new [`SortedIteratingSystem`](http://libgdx.badlogicgames.com/ashley/docs/com/badlogic/ashley/systems/SortedIteratingSystem.html) by [Lusito](https://github.com/libgdx/ashley/commits/master?author=Lusito).
  * **[API addition](https://github.com/libgdx/ashley/commit/c39b09772a4514c180846204ce55cdc2eae71cc5)**: now `ImmutableArray` implements the `Iterable` interface, which makes it a lot easier to iterate over entity collections. 
  * **[Bug fix](https://github.com/libgdx/ashley/commit/1c861a27b85d8b98b854814c2820f80d001ca715)**: avoid double entity removal by accident.
  * **[Bug fix](https://github.com/libgdx/ashley/issues/103)**: fixes `StackOverflowError` when processing entity operations. 
  * **[Bug fix](https://github.com/libgdx/ashley/issues/101)**: fixes freeze when calling `removeAllEntities()`.
  * **Improvement**: we made a bunch of changes that increase performance.

The new nightly dependency is `com.badlogicgames.gdx:ashley:1.3.3-SNAPSHOT`.

Big thanks to our awesome community!