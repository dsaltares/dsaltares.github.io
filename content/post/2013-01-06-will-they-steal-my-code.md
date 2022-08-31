---
id: 2358
title: Will they steal my code?
date: 2013-01-06T10:15:20+00:00
author: David Saltares
layout: post
guid: http://siondream.com/blog/?p=2358
url: /games/will-they-steal-my-code/
dsq_thread_id:
  - 1852024374
categories:
  - Games development
tags:
  - games development
  - open source
  - Software llicenses
  - version control
---

Creative people usually make a big deal out of authorship and honestly, who can blame us? We"re passionate about our work! Producing something that doesn't entirely suck entails sweat, tears and numerous sleepless nights. The open source world is inherently tricky and raises many concerns regarding ownership.

### Open source is a tradeoff

The story of our lives isn't it? Making your project open source is a tradeoff. On one hand you are more likely to achieve certain level of exposure. You"ll ask questions on StackOverflow, publish your progress under the showcase category of the engine you"re using and chat with other devs on an IRC channel. Being active in a community where people share their love in source code shape is wonderful and enriching. Who knows? Maybe a prospective employer thinks your coding style is "elegant" after browsing your online repository. True story.

On the other hand, it's understandable to fear hosting your code where it can be checked out by anyone and be claimed as theirs. Especially knowing they could shamelessly use it for commercial purposes even though your license explicitly forbids it. Horror stories where interviewers found out their candidates were presenting someone else's code as theirs are widely known. Yes, shame on them!

![show-me-the-source-yoda.jpg](/img/wp/show-me-the-source-yoda.jpg)

Let's first assume your rent doesn't depend on people buying what you make. Unless you have an alternative business model such as providing an additional service, logic would slap you in the face. However, if this is something you"re making to boost your portfolio or just for fun, read on and you"ll find a few ways of making sure you keep the ownership of anything you publish, absent doubts.

After taking some precautions, making open source software really pays off.

### Attach the license

First of all, you must make clear which license your code sweetness is published under. A good practice is to attach an [AUTHORS](http://www.gnu.org/prep/maintain/html_node/Recording-Contributors.html) along a LICENSE file in the main folder of the repo. Even though many people overlook this, every single file of code should contain a header summarizing that license. Shall we look at Sion Tower as an example of project published under [GPL 3](http://gplv3.fsf.org/)? Here's its [LICENSE](https://forja.rediris.es/plugins/scmsvn/viewcvs.php/siontower/trunk/src/LICENSE?root=cusl5-iberogre&view=markup) file and the beginning of the [CollisionManager.h](https://forja.rediris.es/plugins/scmsvn/viewcvs.php/siontower/trunk/src/include/collisionManager.h?root=cusl5-iberogre&rev=238&view=markup) file.

```
/*
 * This file is part of SionTower.
 *
 * 
 * David Saltares Marquez (C) 2011
 * <david.saltares@gmail.com>
 *
 * 
 * SionTower examples are free software: you can redistribute it and/or
 * modify it under the terms of the GNU General Public License ad
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) ant later version.
 *
 * SionTower examples are distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with SionTower examples.  If not, see <http://www.gnu.org/licenses/>.
 */
```


Obviously, you don't need to use GPL 3 necessarily, just make sure you attach the corresponding text of your license of choice.

License? Check.

Some people couldn't care less about software licenses, fair enough. So… Shall we move on to the next point?

### Run away from Dropbox! Use a version control system

Possibly, the most important golden rule of all is to keep track of your work's history. If you host your code in Dropbox and then share the link, you"re doomed. The second someone asks for proof you've written it, you"ll have to go home and cry. The answer is simple, use version control. To be honest, why the hell wouldn't you be doing that anyway  Let's put flame wars aside, SVN, Git, Mercurial or any other would be perfectly valid. Backups are built in, you can revert changes and what matters to us now, you get a full history of everything that's happened.

I know for a fact that employees check your projects" history to prevent people stealing code from other sources without even knowing what they"re doing. Being able to reuse and adapt code is excellent and it's highly appreciated, but you need to roughly understand what you"re dealing with.

![i-have-no-idea-what-im-doing.jpg](/img/wp/i-have-no-idea-what-im-doing.jpg)

### Write a dev blog

Finally, it"d be a brilliant idea to write a development blog where you explain your progress. Not only it serves as a backup log, it's the ultimate proof you fully understand the details of the problem being tackled. Actually, it's beneficial for so many other reasons as it also reinforces the impact your project has in the community and increases your online presence. Key facts.

In my humble opinion, sharing your code can bring you happiness in form of acknowledgement, personal enrichment and, why not, professional success. You just need to be aware of the caveats and take reasonable precautions.