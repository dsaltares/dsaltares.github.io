---
categories: ['General']
date: '2016-12-04T12:18:32Z'
title: 'Migration from Wordpress to Hugo'
url: '/general/migration-from-wordpress-to-hugo'
---

![hugo-logo](/img/others/hugo-logo.png)

At long last, I got around to do something I had been meaning to do for a very
long time. I migrated this Wordpress blog over to a statically generated site
powered by [Hugo](http://gohugo.io/).

That's 6 years or over 300 posts worth of content.

### Why not stay with Wordpress?

First of all, I wanted to move away from Wordpress because it's heavy and requires
quite a bit of setup: PHP, database, plugins and so on. Markdown based static site
generators have been around for a while and being able to keep everything in plain
text and under a familiar source control system such as Git is awesome.

I use git and Markdown all the time both at home and at work.

### Why Hugo?

Hugo is an [open source](https://github.com/spf13/hugo) static site generator
written in Go. It's cross-platform and ships as a dependency free binary. Comprehensive
[documentation](http://gohugo.io/overview/introduction/), wide range of
[themes](themes.gohugo.io) as well as active and helpful [community](https://discuss.gohugo.io/)
are great additions.

Whilst [Jekyll](https://jekyllrb.com/) was the more established solution, it
required Ruby and I really wanted to keep my environment as simple as possible.

Other alternatives lacked features, support, had a more complex setup or a combination
of the former.

We've got a winner!

### Exporting Wordpress content

The process went on like this.

1. Exported all posts and pages to XML with the standard Wordpress Export tool.
2. Used [Exitwp](https://github.com/thomasf/exitwp) to convert content to Markdown.
3. Lots of regex search and replace in Sublime.

Back in 2010 I used the WYSIWYG editor in Wordpress and later on I moved to use
the [Markdown module in Jetpack](https://jetpack.com/support/markdown/). The mix
really confused Exitwp and required me to do a lot of manual editing and that took
quite a while.

### Pushing to production

This [excellent tutorial](https://www.digitalocean.com/community/tutorials/how-to-deploy-a-hugo-site-to-production-with-git-hooks-on-ubuntu-14-04)
proved most useful to get a streamlined publishing pipeline.

Essentially, this involved the following:

1. Install Hugo on my production server
2. Put the site sources in a local git repository
3. Create a git bare repository in the production server
4. Add a `post-receive` hook on the production repository that runs `hugo` and builds the site.

Give the article a proper read if you want to know more. The publish hook also
uses `rsync` to back everything up in case something goes amiss.

To create a new post, test it locally and publish it, I simply do:

```
hugo new post/category/name.md
hugo serve --buildDrafts
git add content
git push prod
```

### Results

So far I love it!

Here are some poor man's stats on loading times for [the homepage](/), mind
that I haven't tried to optimized neither of the two.

- Wordpress: ~3.7s
- Hugo: ~2.1s

Please, let me know if you find anything broken, I would really appreciate it!
