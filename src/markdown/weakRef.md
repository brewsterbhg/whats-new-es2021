## - WeakRef & FinalizationRegistry

- [WeakRef Objects ECMAScript Language Specification](https://tc39.es/ecma262/multipage/managing-memory.html#sec-weak-ref-objects)
- [WeakRef MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakRef)
- [FinalizationRegistry MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/FinalizationRegistry)

In 2017 I joined an Ubisoft game jam where you had two days to build Asteroids from scratch in C++. You couldn't use any assets, and instead everything needed to be rendered by drawing lines between coordinates on each frame for every object (player, asteroids, bullets, etc). I didn't win, and you can still find my terrible code [here](https://github.com/brewsterbhg/Blasteroids/tree/master/GameTest/App). It's probably because after two straight days of coding (and minutes before the deadline) I realized there was a terrible memory leak, and playing the game for any extended period of time would result in the computational life being slowly drained from your PC. Anyways, memory management is hard.

**What it does:** WeakRef creates a weak reference to an object, allowing the object to be reclaimed by the garbage collector (vs. a strong reference which will keep an object in memory). Once you create a WeakRef, you can call the <span className="code">deref()</span> method which returns the target of <span className="code">this</span> if it has not been garbage collected yet (otherwise it will return <span className="code">undefined</span>). One of the primary use cases is to implement caches or mappings that store large objects where we don't necessarily want to prevent the large object from being garbage-collected. **FinalizationRegistry** provides a cleanup callback whenever one of the objects registered within the registry has been garbage-collected (Note: these two features are independent of each other, but sometimes it makes sense to use them together).

**Example:**

> I couldn't come up with an example so I humbly stole this from [here](https://github.com/tc39/proposal-weakrefs/blob/master/README.md#weak-caches)

```js
function makeWeakCached(f) {
  const cache = new Map();
  const cleanup = new FinalizationRegistry(key => {
    const ref = cache.get(key);
    if (ref && !ref.deref()) cache.delete(key);
  });

  return key => {
    const ref = cache.get(key);

    if (ref) {
      const cached = ref.deref();
      if (cached !== undefined) return cached;
    }

    const fresh = f(key);

    cache.set(key, new WeakRef(fresh));
    cleanup.register(fresh, key);
    return fresh;
  };
}

var getImageCached = makeWeakCached(getImage);
```

Chances are that, unless you're doing work that requires intricate memory management, you should probably avoid this (people much smarter than me have explained why: [here](https://github.com/tc39/proposal-weakrefs/blob/master/README.md#a-note-of-caution)). The JavaScript garbage collector is a fickle beast that generally operates with reckless abandon, so it can be very difficult to predict when things will be garbage-collected. If you are interested in reading more about these new features, I recommend reading the [developer reference documentation](https://github.com/tc39/proposal-weakrefs/blob/master/reference.md) for the TC39 proposal.