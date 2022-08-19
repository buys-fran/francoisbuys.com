---
title: 'Javascript: Objects properties'
date: '2022-08-19'
tags: ['Javascript']
---

###  Object property rules:

1. Figure out the value of the part before the dot (**`.`**).
2. If that value is **`null`** or **`undefined`**, throw an error immediately.
3. Check whether a property with that name exists on our object:
    1. If **it exists**, answer with the value this property points to.
    2. If **it doesn’t exist**, answer with the **`undefined`** value.

This post contains some of my personal take aways from [Dan Abramov's - Just JavaScript Course](https://justjavascript.com/), I highly recommend his course.
