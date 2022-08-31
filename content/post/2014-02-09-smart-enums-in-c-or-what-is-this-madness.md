---
id: 2813
title: 'Smart enums in C++ or: "what is this madness?"'
date: 2014-02-09T20:45:57+00:00
author: David Saltares
layout: post
guid: http://siondream.com/blog/?p=2813
url: /computing/smart-enums-in-c-or-what-is-this-madness/
dsq_thread_id:
  - 2243561446
categories:
  - Computing
tags:
  - C++
  - enum
  - higher order macros
  - macros
  - programming
---
Needless to say, **C++ is a glorious language**. Sadly, the attention it gets on the blog is far from representative of my appreciation towards it. Despite it being my main language at work, I only tend to talk about [Libgdx](/tag/libgdx/) side projects around here. Well, enough is enough!

Truth be told, over the years, standard after standard, C++ has become a behemoth of a language. As [Scott Meyers](https://www.google.co.uk/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&ved=0CC8QFjAA&url=http%3A%2F%2Fwww.amazon.co.uk%2FEffective-Specific-Addison-Wesley-Professional-Computing%2Fdp%2F0201924889&ei=T9X3UoS5Ec7y7AaS5IDQDA&usg=AFQjCNFQ9GOAfduwPXXh4k9gzib3-djOTg&sig2=JutKpkkTKO8YMXdtaGgZmA&bvm=bv.60983673,d.ZGU) likes to say, it's actually a set of languages.

  * C with classes.
  * C with classes and the STL.
  * All of the above and templates.

One of the beauties of C++ is that I can always learn something new about it, which almost makes up for its ever growing syntax complexity.

### Let's talk macros

Let's talk about macros. Everyone knows about the [preprocessor](www.cplusplus.com/doc/tutorial/preprocessor/) and the basic usage of macros, right?

<pre class="prettyprint lang-cpp linenumstrigger linenums">#define PI 3.14
#define SQR(x) x * x</pre>

Actually, let's talk about macros that take other macros as arguments.

> Sorry what?

### The problem

Let us imagine we define the following perfectly standard enum to represent kinds of animals in a farm.

<pre class="prettyprint lang-cpp linenumstrigger linenums">enum Animal
{
    eAnimal_Dog,
    eAnimal_Cat,
    eAnimal_Cow,
    eAnimal_Count,
};</pre>

Our application can request a server a list of animals a given farm has. The server sends the animal names as strings, so we need to convert them to enum values. Alright, let's define a function to do that.

<pre class="prettyprint lang-cpp linenumstrigger linenums">Animal getAnimalFromString(const char* str)
{
    if (!strcmp(str, "Dog")) return eAnimal_Dog;
    if (!strcmp(str, "Cat")) return eAnimal_Cat;
    if (!strcmp(str, "Cow")) return eAnimal_Cow;
    return eAnimal_Count;
}</pre>

Err&#8230; That is not the most elegant piece of code you've ever seen, is it? We also might have to convert from an enum value to a string literal in case we want to send a report back to the server.

<pre class="prettyprint lang-cpp linenumstrigger linenums">const char* getStringFromAnimal(Animal animal)
{
    switch (animal)
    {
    case eAnimal_Dog: return "Dog";
    case eAnimal_Cat: return "Cat";
    case eAnimal_Cow: return "Cow";
    default: return "None";
    }
}</pre>

That was horrendous enough, but just the thought of adding new species to the catalogue makes me shiver badly. Why not simply use strings to represent animal species? Enums are nice because they heavily reduce the domain of values a variable can have and prevent us from making silly typos everywhere.

> There must be a better solution.

### Higher order macros

To make things nicer, we'd need some sort of compile time mechanism that traverses the list of enum values generating the time consuming boilerplate code for us.

> The preprocessor!

Take a look at this way of defining our list of animals.

<pre class="prettyprint lang-cpp linenumstrigger linenums">#define ANIMAL_LIST(m)   \
    m(Animal, Dog)  \
    m(Animal, Cat)  \
    m(Animal, Cow)</pre>

`_ANIMAL_LIST_` is a higher order macro that takes a macro m as a parameter. Then it passes each one of our animal species to m.

The previous macro is not really useful by itself. Let's make things slightly more interesting

<pre class="prettyprint lang-cpp linenumstrigger linenums">#define SMARTENUM_VALUE(typeName, value) e##typeName##_##value,
#define SMARTENUM_DEFINE_ENUM(typeName, values) enum typeName { values(SMARTENUM_VALUE) e##typeName##_Count, };</pre>

`SMARTENUM_DEFINE_ENUM` takes the enum name and the list of values as parameters and defines an enum for us. It also appends the total count.

<p style="padding-left: 30px;">
  <strong>Note</strong>: ## is used by the preprocessor to concatenate parameters with other pieces of text.
</p>

When we write

<pre class="prettyprint lang-cpp linenumstrigger linenums">SMARTENUM_DEFINE_ENUM(Animal, ANIMAL_LIST)</pre>

The preprocessor expands it to

<pre class="prettyprint lang-cpp linenumstrigger linenums">enum Animal { eAnimal_Dog, eAnimal_Cat, eAnimal_Cow, eAnimal_Count };</pre>

Okay, that was a lot of gibber jabber for very little gain.

Hang on a minute, we can go further. Let's write a small mechanism to convert an enum value to a string literal.

<pre class="prettyprint lang-cpp linenumstrigger linenums">#define SMARTENUM_STRING(typeName, value) #value,
#define SMARTENUM_DEFINE_NAMES(typeName, values) const char* typeName##Array [] = { values(SMARTENUM_STRING) };
#define getStringFromEnumValue(typeName, value) typeName##Array[##value]</pre>

`SMARTENUM_DEFINE_NAMES` takes an enum type and the list of values and generates an array with the string representations of our list values. Interestingly enough, the values in the array map directly to those of the enum. This allows us to write the third macro, which accesses the array at the right position to return the corresponding string literal for a given enum value.

<p style="padding-left: 30px;">
  <strong>Note</strong>: # is used by the preprocessor to convert a piece of text in a string literal.
</p>

When we write

<pre class="prettyprint lang-cpp linenumstrigger linenums">SMARTENUM_DEFINE_NAMES(Animal, ANIMAL_LIST)</pre>

The preprocessor expands it to

<pre class="prettyprint lang-cpp linenumstrigger linenums">const char* AnimalArray [] = { "Dog", "Cat", "Cow"}</pre>

So

<pre class="prettyprint lang-cpp linenumstrigger linenums">const char* animalName = getStringFromEnumValue(Animal, eAnimal_Cow);</pre>

Will result in

<pre class="prettyprint lang-cpp linenumstrigger linenums">const char* animalName = "Cow";</pre>

Aha!

Getting an enum value from a string literal is slightly trickier but still achievable. We've come this far, so it'd be a shame not to finish the job.

<pre class="prettyprint lang-cpp linenumstrigger linenums">#define SMARTENUM_DEFINE_GET_VALUE_FROM_STRING(typeName, name)       \
    typeName get##typeName##FromString(const char* str)     \
    {                               \
        for (int i = 0; i &lt; e##typeName##_Count; ++i)    \
            if (!strcmp(##typeName##Array[i], str))     \
                return (##typeName##)i;         \
        return e##typeName##_Count;             \
    }

#define getEnumValueFromString(typeName, name)  get##typeName##FromString(##name)</pre>

The first abomination generates a function that iterates over the previously defined array of names doing string comparisons until it finds the desired enum value. The second one is nothing more than a convenience macro to spare the user from remembering the preprocessor generated function name.

Now if we do

<pre class="prettyprint lang-cpp linenumstrigger linenums">SMARTENUM_DEFINE_GET_VALUE_FROM_STRING(Animal, ANIMAL_LIST)</pre>

We can simply go

<pre class="prettyprint lang-cpp linenumstrigger linenums">Animal animal = getEnumValueFromString(Animal, animalname);</pre>

Neat, isn't it?

### For future references

Now, every time we want to define an enum type that we need to convert to and from strings we'll be lucky to be able to do the following.

<pre class="prettyprint lang-cpp linenumstrigger linenums">#define CAR_LIST(m)  \
    m(Car, Fiat)    \
    m(Car, Ford)    \
    m(Car, Audi)

SMARTENUM_DEFINE_ENUM(Car, CAR_LIST)
SMARTENUM_DEFINE_NAMES(Car, CAR_LIST)
SMARTENUM_DEFINE_GET_VALUE_FROM_STRING(Car, CAR_LIST)</pre>

Voilà!

Admittedly, using macros like this doesn't make for readable code and sometimes results in debugging complications. However, I've been able to debug my code normally in Visual Studio 2012 when using similar macros.

String conversion of enums is just the tip of the iceberg, this approach can be used to generate all sorts of repetitive boilerplate code.

### Download it

In case you are interested, [SmartEnums.h](https://gist.github.com/dsaltares/8904478) is available as a GitHub gist.

<p style="padding-left: 30px;">
  <strong>Note</strong>: this post was inspired by the article <a href="http://journal.stuffwithstuff.com/2012/01/24/higher-order-macros-in-c/">Higher Order Macros in C++</a>
</p>
