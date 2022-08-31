+++
date = "2015-08-08T22:19:46Z"
description = ""
keywords = []
title = "Conjugate"

+++

Conjugate is a responsive verb conjugator webapp. Enter a verb in English and get the conjugations for all tenses in a variety of languages.

### Motivation

When learning a new language, it is very common to struggle with verb conjugations. For example:

> I want to know the third person singular form (masculine) of the future perfect tense of the verb *to eat* in French.

Unfortunately, the available resources are somehow limited:

* Google translator: usually gets conjugations wrong for most languages, especially in terms of gender.
* Apps: seriously? I don't want to install *yet* another app!
* Websites: lists are limited, the sites are old, full of ads and/or don't play well with mobile devices.

Conjugate tries to solve that use case.

### Components and technologies

* **[Verbix Scraper](https://github.com/dsaltares/conjugate/tree/master/scraping)**: Python and [BeautifulSoup4](https://pypi.python.org/pypi/beautifulsoup4) among other libraries.
* **[Web application](https://github.com/dsaltares/conjugate/tree/master/site)**: mainly Python, [Flask](http://flask.pocoo.org/docs/0.10/), [SQLAlchemy](http://www.sqlalchemy.org/) for the back-end while the front-end uses [JQuery](https://jquery.com/) and [Materialize](http://materializecss.com/).

### Demo

![conjugate](/img/conjugate/conjugate.gif)
