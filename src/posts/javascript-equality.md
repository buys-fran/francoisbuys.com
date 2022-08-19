---
title: 'Javascript: Equality'
date: '2022-07-20'
tags: ['Javascript']
---

```
// Tells us if a and b are the same value
Object.is(a, b);
```

2 and 2 is the same value, {} and {} is not the same value. True to our mental model
variables that point to the same values are the same. So two variables can point to the
same object, and `Object.is` will return true in those cases.

⚠️  Strict equal === also works as expected in our universe, but there are two exceptions:

1. **`NaN === NaN` is `false`**, although they are the same value, don’t ever use `… === NaN` 
2. **`0 === 0` and `0 === -0` are `true`**, although they are different values.

```
function strictEquals(a, b) {
  if (Number.isNaN(a) && Number.isNaN(b)) return false;

  if(Object.is(a, 0) && Object.is(b, -0)) return true

  if(Object.is(b, 0) && Object.is(a, -0)) return true

  return Object.is(a, b)
}
```

This post contains some of my personal take aways from [Dan Abramov's - Just JavaScript Course](https://justjavascript.com/), I highly recommend his course.
