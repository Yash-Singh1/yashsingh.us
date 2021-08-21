---
title: Javascript Custom Iterables
subtitle: Building custom Iterables classes using Symbol.iterator
image: ../img/iterator.png
author: Yash Singh
date: March 26, 2021
---

# Javascript Custom Iterables

A while back I was creating a `URLPattern` class that allows you to match a URL
Pattern to a URL. I allowed `', '` to act as an and operator (`&&`). In that way,
my class was the following structure:

```js
{
    0: {
        "pattern": String,
        "match": Function
    },
    1: {
        "pattern": String,
        "match": Function
    },
    ...
    n: {
        "pattern": String,
        "match": Function
    },
    length: n + 1
}
```

I wanted someone to be able to do `[...pattern]` and get back:

```typescript
Array<{ pattern: String, match: Function }> // length = n + 1
```

That is when I came across the `Symbol.iterator` property.

## Symbol.iterator

From the MDN docs:

> The well-known **`Symbol.iterator`** symbol specifies the default iterator for
> an object. Used by [`for...of`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of).

The `Symbol.iterator` is a property of the builtin `Symbol` object that exists
as a property on the `Array` prototype, `Set` prototype, and many other builtin iterators.

It gets called whenever the `...` (spread syntax) or `Array.from` is run on the
object or `for...of`.

## Implementing in class

To use `Symbol.iterator` inside classes, define a method with the method name being
`[Symbol.iterator]`. Here is an example usage:

```js
class A {
  [Symbol.iterator]() {}
}
```

An example that will give back `[1, 2, 3]` is shown below:

```js
class A {
  constructor() {
    this.isNothing = true;
  }

  *[Symbol.iterator]() {
    yield 1;
    yield 2;
    yield 3;
  }
}
```

Now the following results can occur:

```js
const value = new A();
[...A]; // [1, 2, 3]
```

## Array-like iterator

If you want an iterator that would do the following:

```js
[...new myClass({ 0: 1, 1: 2, 2: 3, length: 3 })]; // [1, 2, 3]
```

You can either copy `Array.prototype`'s iterator or build something similar. We
will see how to do both:

### Copying

```js
class myClass {
  constructor(obj) {
    Object.keys(obj).forEach((key) => {
      this[key] = obj[key];
    });
  }
}

myClass.prototype[Symbol.iterator] = Array.prototype[Symbol.iterator];

[...new myClass({ 0: 1, 1: 2, 2: 3, length: 3 })]; // [1, 2, 3]
```

What the `Array.prototype` iterator does is checks the length and yields each and
every index until the length is reached.

Let's try that by ourselves.

### Rewriting

```js
class myClass {
  constructor(obj) {
    Object.keys(obj).forEach((key) => {
      this[key] = obj[key];
    });
  }

  *[Symbol.iterator]() {
    let currentIndex = 0;
    while (currentIndex < this.length) {
      yield this[currentIndex];
      currentIndex++;
    }
  }
}
```

This defines a generator function that will keep track of the index that it was
on and increment that every time. The index's value will then be yielded.
