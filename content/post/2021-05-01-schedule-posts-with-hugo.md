---
title: "Schedule posts with Hugo"
date: 2021-05-02T00:00:00+00:00
author: "David Saltares"
tags: ["Blog", "Github", "CI", "CD"]
categories: ["General"]
description: "Schedule your hugo blog posts using Github Actions and CI"
keywords: ["github actions", "hugo", "blogging", "hugo blogs", "posts", "publishing", "posting"]
---

Back in 2020, I migrated this blog to [Hugo and Github pages](/easily-deploy-your-hugo-site-to-github-pages/). I also set up a *"push to publish"* CD pipeline with Github pages.

Happy days.

🤔 A couple of days ago I wondered if there was a low effort way to schedule posts. That way, I could easily bulk some writing together and publish it later on without having to come back to it.

It's actually trivial to set up!

Simply add a [schedule trigger](https://docs.github.com/en/actions/reference/events-that-trigger-workflows#scheduled-events) to your Github Action like so:


```yaml
name: Build and deploy

on:
  push:
    branches:
    - master
  schedule:
    - cron: '0 0 * * *' # Once per day at midnight

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
    - name: Checkout
      uses: actions/checkout@v1
    - name: Setup Hugo
      uses: peaceiris/actions-hugo@v2
    - name: Build
      run: hugo
    - name: Deploy
      uses: peaceiris/actions-gh-pages@v2
      env:
        EXTERNAL_REPOSITORY: dsaltares/dsaltares.github.io
        ACTIONS_DEPLOY_KEY: ${{ secrets.ACTIONS_DEPLOY_KEY }}
        PUBLISH_BRANCH: master
        PUBLISH_DIR: ./public

```

Now you can push posts that will be published into the future by setting the [front matter](https://gohugo.io/content-management/front-matter/) `date`.

```
date: 3059-05-01T00:00:00+00:00
```

That could be a post for future generations 😅.

When `hugo` runs, it does not generate HTML for posts with dates in the future. However, our Github Action runs every day at midnight. This means that the run for May 1st 3059 will actually generate the HTML for our scheduled post and publish it 🙌.

📆 This post itself was scheduled!
