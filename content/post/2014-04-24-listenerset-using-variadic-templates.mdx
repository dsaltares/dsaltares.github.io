---
id: 2996
title: ListenerSet using variadic templates
date: 2014-04-24T10:00:02+00:00
author: David Saltares
layout: post
guid: http://siondream.com/blog/?p=2996
url: /computing/listenerset-using-variadic-templates/
dsq_thread_id:
  - 2633674729
categories:
  - Computing
tags:
  - C++
  - c++11
  - design pattern
  - event listening
  - listener
  - Observer
  - programming
  - variadic templates
---
**Important**: variadic templates are only available from C++11, make sure your compiler supports it.

Who has never used the [Observer](http://en.wikipedia.org/wiki/Observer_pattern) pattern? As long as you have been involved in any medium sized project, chances are you have come across it at some point.

### The problem

It is extremely common to have an event generating system other components would like to subscribe to. However, oftentimes I see code to manage a collection of listeners being unnecessarily duplicated on a per system basis. That is registration, un-registration and notification. A lot of nonsensical boilerplate, which makes for code that is harder to read and easier to get wrong.

Let's take a look at a typical input event dispatching system, simplified for the purposes of this article. We could have an `IInputListener` interface that handles a couple of events, `keyDown()` and `keyUp()`.

```
struct IInputListener
{
    virtual ~IInputListener() {}
    virtual bool keyDown(KeyCode code) = 0;
    virtual bool keyUp(KeyCode code) = 0;
};
```


Our `InputSystem` class could hold an `std::set` of `IInputListener` pointers. Registration and un-registration is made possible through `addListener()` and `removeListener()` respectively. Bad news is that, every single time we want to send an event to the listeners, we are forced to iterate over the collection. Also, God kills a kitten.

```
class InputSystem
{
public:
    void addListener(IInputListener* listener)
    {
        m_listeners.insert(listener);
    }

    void removeListener(IInputListener* listener)
    {
        m_listeners.erase(listener);
    }

    void update()
    {
        // Touch down detected
        for (auto listener : m_listeners)
        {
            listener->keyDown(code);
        }

        ...

        // Touch up detected
        for (auto listener : m_listeners)
        {
            listener->keyUp(code);
        }
    }

private:
    std::set<IInputListener*> m_listeners;
};
```


As if this wasn't enough, there is another important _gotcha_ here. What happens when a listener un-registers as a result of an event? The `m_listeners` collection is modified in the middle of the `for` loop, thus current iterators are no longer valid. The second we try to increment the internal iterator to fetch the next listener.

> BAM!

Not good.

The solution is simple but annoying. We can just add new listener registration and un-registration requests to a pending list while in the middle of a dispatch. Those pending lists would be processed once it's safe to modify the collection of listeners.

Moreover, some people use `std::vector` instead of `std::set` for performance reasons, which is completely legit. However, that involves adding code to ensure listener uniqueness in the collection.

Every time.

Honestly? I'm lazy so I don't want to be the guy who implements this over and over.

> Okay, so what do you suggest?

### The way towards the solution

Following our intuition, we realise that a way to generalise this behaviour is in order. Ideally, it would meet the following criteria.

  * Avoids all code duplication.
  * Ensures listener uniqueness.
  * It is safe, can register, un-register while notifying.
  * Avoids manually going through the listener collection to send an event.
  * Compatible with any kind of event listener.

Intuitively, we could have a `ListenerSet<Type>` template class that handles listener duplication as well as registration and un-registration safety.

**Note**: we'll be using `std::set` rather than `std::vector` for simplicity. Both can be used as long as the appropriate precautions are taken.

```
template <class Type> class ListenerSet
{
public:
    ListenerSet() {}
    virtual ~ListenerSet() {}

    inline void addListener(Type listener)
    {
        if (m_notifying)
        {
            m_pendingAddition.insert(listener);
            m_pendingRemoval.erase(listener);
        }
        else
        {
            m_listeners.insert(listener);
        }
    }

    inline void removeListener(Type listener)
    {
        if (m_notifying)
        {
            m_pendingRemoval.insert(listener);
            m_pendingAddition.erase(listener);
        }
        else
        {
            m_listeners.erase(listener);
        }
    }

private:
    bool m_notifying;
    std::set<Type> m_pendingRemoval;
    std::set<Type> m_pendingAddition;
    std::set<Type> m_listeners;
};
```


We're missing the notification functionality, that's the tricky part. We would like to have an interface such as to be able to do something like this.

```
m_listenerSet.notify(&IInputListener::keyDown, keyCode);
```


`ListenerSet::notify()` would iterate over all the registered listeners calling `IInputListener::keyDown` and passing `keyCode` as a parameter.

> Maybe easier said than done?

True, `ListenerSet::notify()` needs to support an arbitrary number of arguments, as different event handlers won't necessarily have the same signature. Moreover, `IInputListener::keyDown`(and every other potential handler) needs to receive a `this` pointer along the remaining arguments.

This is where [variadic templates](http://www.cplusplus.com/articles/EhvU7k9E/) come into play. Basically, they're templates that can take an arbitrary number of parameters of any type.

Interestingly enough, `std::bind()` also takes an arbitrary number of parameters. That means we can create an `std::function>` object that has everything we need: the event handler function pointer, `this` and the remaining arguments.

Take a look at the code.

```
template <class Function, class... Arguments>
inline void notify(Function&& f, Arguments&&... args)
{
    m_notifying = true;
    for (Type listener : m_listeners)
    {
        auto callback = std::bind(f, listener, args...);
        callback(listener);
    }
    m_notifying = false;

    for (Type listener : m_pendingRemoval)
    {
        m_listeners.erase(listener);
    }

    m_pendingRemoval.clear();

    for (Type listener : m_pendingAddition)
    {
        m_listeners.insert(listener);
    }

    m_pendingAddition.clear();
}
```


Note how we process the pending requests to add or remove listeners after we finish sending the events, that's when it's safe.

Now we can do exactly what we wanted!

```
ListenerSet<IInputListener*> listeners;

listeners.addListener(new PlayerInputListener());
listeners.addListener(new UserInterfaceInputListener());

m_listenerSet.notify(&IInputListener::keyDown, keyCode);
m_listenerSet.notify(&IInputListener::keyUp, keyCode);
```


Templates are instantiated at compile time, which means the compiler will complain if we're doing something dodgy such as trying to bind the wrong thing. Compile time checks are good.

Managing a set of listeners and sending events is now a lot easier, safer and readable. Last but not least, it's significantly less error prone.

> Hooray!!!

### Full source

For those interested, I've made the code available as a GitHub Gist.

[ListenerSet implementation](https://gist.github.com/dsaltares/11212605)
