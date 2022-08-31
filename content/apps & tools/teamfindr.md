---
title: "Team Findr"
date: 2022-01-16T00:00:00+00:00
author: "David Saltares"
tags: ["team findr", "sports", "apps", "React", "react query", "express", "mongodb"]
description: "Team Findr is an app that allows you to find nearby pick up games, organise games with your friends and find extra players"
keywords: ["team findr", "sports", "apps", "React", "react query", "express", "mongodb"]
---

⚽ [Team Findr](https://teamfindr.saltares.com) is a mobile-first app to help you find nearby pick up games, organise games with your friends and find extra players. It is completely free and has no ads.

![team findr screenshot](/img/teamfindr/teamfindr_00001.png)

🦠 I made it a side project during the winter holiday of 2020 as I had to self-isolate after direct contact with a covid-19 positive person. Later, my friend [Cristi](https://www.linkedin.com/in/cristian-iordan-26b1abb7/), did an entire UX pass and UI redesign.

### 📸 Screenshots

{{< gallery dir="/img/teamfindr/gallery/" />}}
{{< load-photoswipe >}}

### 💻 Technical details

[Team Findr is open source](https://github.com/dsaltares/teamfindr) under the MIT license. Contributions are welcome! The application is entirely written in Typescript and it has two main components.

* `web-app`: client side React application. It uses [Service Workers](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API), [React Query](https://react-query.tanstack.com/), [MaterialUI](https://mui.com/getting-started/usage/), [Leaflet](https://leafletjs.com/) and [Formik](https://formik.org/).
* `api`: REST API, deployed to an EC2 machine. It uses [express](https://expressjs.com/), [mongodb](https://www.mongodb.com/) and [Passport](https://www.passportjs.org/).
