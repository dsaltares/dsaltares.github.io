---
id: 3224
title: Recover history with Git
date: 2014-12-31T13:00:26+00:00
author: David Saltares
layout: post
guid: http://siondream.com/blog/?p=3224
url: /computing/recover-history-with-git/
dsq_thread_id:
  - 3376333763
categories:
  - Computing
tags:
  - Git
  - git history
  - git reflog
  - programming
---
While doing some cleanup of old feature branches, I accidentally deleted one that hadn't been pushed to `origin` yet. However, I didn't realise at the time.

After a couple of weeks, a hundred commits and many other branches mingling about, I found myself looking for the one I had previously deleted.

> Oh noes! 

Luckily for me, Git is somewhat idiot-proof and rarely truly deletes anything. Using `git reflog` you can list the tip of branches, including the deleted ones. Once you find the commit you were looking for, you can just use `git checkout` to get it back. This will detach you from `HEAD`, so you will probably want to create the old branch again with `git checkout -b name`.

Most of the time, there will be too many commits and the search might be painful. In that case you can grep the results. Let's say you know the commit message had `feature x` in it.

```
git reflog --grep='feature x'
git checkout 123456
git checkout -b feature-x
``` 

I really love Git.