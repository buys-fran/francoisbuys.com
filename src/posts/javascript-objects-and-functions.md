---
title: 'Javascript: Objects and functions'
date: '2022-07-09'
tags: ['Javascript']
---

Objects and functions: Are also values. I can manipulate them from my code.

> 💡 Functions are objects

[Primitive values](/garden/javascript:-primitive-values), objects and functions are the only value types in javascript

> 💡 Not everything in JS is an object

Objects include:
- arrays,
- dates,
- RegExps
- and other non-primitive values.

```javascript
console.log(typeof({}));// "object"
console.log(typeof([]));// "object" 
console.log(typeof(new Date()));// "object" 
console.log(typeof(/\d+/));// "object"
console.log(typeof(Math));// "object"
```

Objects are mutable. `const` does not prevent object mutation

Unlike primitives, we can create objects. The following expressions create two different objects, not references to the same object.

```javascript
let thisThing = {}
let thatThing = {}
```

> 🗑 JavaScript is a garbage-collected language

Objects are never “nested” in our universe

## Functions

Functions are special objects, we can treat them like they are a separate type of value because of their unique abilities. But under the hood, they are objects.
