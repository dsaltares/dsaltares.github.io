---
id: 3451
title: Thoughts on unit testing for Ashley and games in general
date: 2015-12-13T15:21:50+00:00
author: David Saltares
layout: post
guid: /?p=3451
url: /games/thoughts-on-unit-testing-for-ashley-and-games-in-general/
dsq_thread_id:
  - 4400404105
categories:
  - Games development
tags:
  - Ashley
  - games industry
  - integration tests
  - jUnit
  - libgdx
  - testing
  - unit testing
---

Shortly after we moved [Ashley](https://github.com/libgdx/ashley) into the [Libgdx](https://github.com/libgdx) family, we started writing [unit tests](https://github.com/libgdx/ashley/tree/master/ashley/tests/com/badlogic/ashley) for every single component in the framework using [jUnit](http://junit.org/).

### Unit testing goodness

That was over a year and a half ago and it has proven to be a huge win for many reasons.

  * Issue reporters can (and should) include a [test that breaks](https://github.com/libgdx/ashley/issues/173) as a way of explaining the problem. We can then easily include it into the suite, fix it and prevent future regressions.
  * Pull requests [trigger a build](https://github.com/libgdx/ashley/pull/187) in Jenkins that compiles the code and runs all the unit tests. Code reviews should check for design, good practices as well as correctness. However, as long as the tests have good coverage, we can be pretty sure the change won't break existing code.
  * Since, it is mandatory to include extensive unit tests with each new feature, we can increase quality from the get go.
  * Refactoring becomes a lot easier. We lose fear of cleaning up ugly parts of the codebase because we have unit tests to make sure the behaviour remains the same. This became evident with the recent [Engine internal refactor](https://github.com/libgdx/ashley/commit/261342f74dc7c1b955e7605aadeb9bfcbc112128).

The morale is basically as follows.

![unit-test-all-the-things.png](/img/wp/unit-test-all-the-things.png)

Our [issue tracker](https://github.com/libgdx/ashley/issues?q=is%3Aissue+is%3Aclosed) proves that we're far from perfect, which makes me thing about where we'd be if it weren't for unit tests. Ashley inherently has lots of tricky bits of logic and potential edge cases. Making sure we don't break anything without automated tests would almost impossible.

That is why, every time we break something, we add a unit test with the fix and make sure it never ever happens again.

### Lack of unit testing in the games industry

When I left the games industry as a full time occupation something struck me. There's an incredibly poor unit testing culture in games compared to other industries. Sure, other industries are also affected by this disease but I've felt a lack of attitude in the games world to change the situation.

This is really, really bad.

As you surely know, games are complex pieces of code. Many systems with non-trivial logic interact in a real-time simulation all at once. Games development is hard! Actually, it's more than that! It's brain melting!

When a deadline approaches and the bug count shoots over the roof, we put in hacky fixes and hope for the best. Then our WTFs per line increase and no one ever dares to fix it because they're scared of breaking everything. So we keep pushing forward until the game's unavoidably collapses on us.

![wtf.png](/img/wp/wtf.png)

Some people may say that decoupling and correctly abstracting code for it to be more easily testable may add an overhead games cannot afford. I would tell them that's a huge empty fallacy until proven otherwise and quite possibly fall within [premature optimisation](http://c2.com/cgi/wiki?PrematureOptimization). These claims need to be backed by profiling data and I seriously doubt these practices will become someone's main bottleneck.

Clean and performant code is possible.

### We can do better than this

Admittedly, games are very hard to test. How can you unit test a shader or a behaviour script? Many things depend on graphics or user input and we cannot automate them!

Here is a few things you can do.

* Unit test foundational classes like [geometry intersectors](https://github.com/libgdx/libgdx/blob/master/gdx/test/com/badlogic/gdx/math/IntersectorTest.java) or [containers](https://github.com/libgdx/libgdx/blob/master/gdx/test/com/badlogic/gdx/utils/PooledLinkedListTest.java).
* Write tests for game specific logic that does not depend on graphics nor user input.
* Make sure you have a [headless backend](https://github.com/libgdx/libgdx/tree/master/backends/gdx-backend-headless) for your engine, that way you can run it without requiring a graphic environment. 
* Use [dependency injection](https://en.wikipedia.org/wiki/Dependency_injection), so you can mock those dependencies in a unit test. Don't have your `Player` internally use a `PlayerController`, give it a reference to `ControllerInterface` in the constructor. This way you can test Player behaves well without relying on an actual keyboard.

Higher level systems can be really tricky to test, especially if they're strongly tied to user input. In those situations, you can write an [integration test](https://en.wikipedia.org/wiki/Integration_testing) that fakes user input and validate the output.

Designing your game to be unit testable is hard and may take longer but think about it as an investment. In the long run, you will face less roadblocks and will be able to iterate faster. No need to do this for a game jam prototype although I would certainly recommend it for a more serious project.

It's undeniable that writing unit tests is time consuming but I strongly believe the games industry completely underestimate their usefulness.

Finally, let me recommend [Clean Code](/computing/book-review-clean-code/) again.