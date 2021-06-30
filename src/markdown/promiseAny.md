## - Promise.any()

- [Promise.any ECMAScript Language Specification](https://tc39.es/ecma262/multipage/control-abstraction-objects.html#sec-promise.any)
- [Promise.any MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/any)

I understand you may be feeling disappointed after the previous feature. I mean, it feels wrong calling it a feature. No offense to whoever created the proposal but where's the hype? Where's the pizzazz? ***The showmanship?*** I promise you (pun intended) that this one is definitely... marginally cooler.

**What it does:** <span className="code">Promise.any()</span> takes an array of promises and resolves once any of the executing promises are fulfilled.

**Example:**

```js
const sushiPromise = new Promise((resolve, reject) => {
  setTimeout(() => resolve(🍣), Math.floor(Math.random() * 1000));
});

const pizzaPromise = new Promise((resolve, reject) => {
  setTimeout(() => resolve(🍕), Math.floor(Math.random() * 1000));
});

const tacosPromise = new Promise((resolve, reject) => {
  setTimeout(() => resolve(🌮), Math.floor(Math.random() * 1000));
});

(async function whatShouldIHaveForLunch () {
  const lunchResult = await Promise.any([sushiPromise, pizzaPromise, tacosPromise]);

  console.log(lunchResult); // Either 🍣, 🍕 or 🌮
})();
```

Now you might be saying "Wait, isn't this just <span className="code">Promise.race()</span>? You promised that this was going to be cooler than <span className="code">replaceAll()</span>! Have you always been such a disappointment?" First, ouch. Second,  don't worry; there are a couple of very important distinctions between <span className="code">Promise.race()</span> and <span className="code">Promise.any()</span>:

1. <span className="code">Promise.race()</span> will reject as soon as the first promise you give it has been rejected. <span className="code">Promise.any()</span> won't reject until every promise it's been given has been rejected.

2. In the case that no promises are fulfilled, <span className="code">Promise.any()</span> will reject with an <span className="code">AggregateError</span>, but <span className="code">Promise.race()</span> will reject with the reason from the promise that was rejected.

See, cool right? Now you can do some proper gambling. And speaking of AggregateError...
