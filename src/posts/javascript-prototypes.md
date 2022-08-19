---
title: 'Javascript: Prototypes'
date: '2022-08-19'
tags: ['Javascript']
---

###  Prototypes

A prototype represents a relationship

Javascript searches for a property in our object, if it cannot find the property it will
look for a matching property in the object prototype (infinite levels up the prototype
chain).

We get undefined when there is no more prototypes to look in and we still don’t have a
value for the property.

> 🔥 Prototype chains cannot be circular

`hasOwnProperty` looks for a property in the object and not up the prototype chain

Don’t be confused by assignments, we only assign to the object not to the prototype.
When we assign to a missing property it gets added to the object (not to the prototype).

All object has the Object Prototype by default. That is why we have built-in methods on
objects.

> 🔥 Avoid polluting the prototypes

When we define method on a class, Javascript still finds the property by searching in the
prototype chain.

This post contains some of my personal take aways from [Dan Abramov's - Just JavaScript Course](https://justjavascript.com/), I highly recommend his course.
