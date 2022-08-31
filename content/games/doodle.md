---
title: "Doodle"
date: 2020-05-17T00:00:00+00:00
author: "David Saltares"
tags: ["gamedev", "react", "typescript", "websockets"]
---

✏️ [Doodle](https://github.com/dsaltares/doodle) is a crazy drawing & guessing chain game. Think Pictionary meets Telephone. Get on a video call with friends and give it a try. It's completely free and has no ads.

![doodle brainstorming](/img/doodle/gallery/brainstorming.png)

🦠 I made it a side project during covid-19 confinement to be played during covid-19 confinement.


### 📸 Screenshots

{{< gallery dir="/img/doodle/gallery/" />}}
{{< load-photoswipe >}}

### 💻 Technical details

[Doodle is open source](https://github.com/dsaltares/doodle) under the MIT license. Contributions are welcome! The game is entirely written in Typescript and it has two main components.

* `web-app`: client side React application.
* `live-server`: websocket server, currently deployed to an EC2 machine.
