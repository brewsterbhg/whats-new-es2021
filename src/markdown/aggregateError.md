## - AggregateError

- [AggregateError ECMAScript Language Specification](https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-aggregate-error-objects)
- [AggregateError MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/AggregateError)

Software development is hard. I've been doing it for 8 years and—don't tell my employer this—I still have no idea what I'm doing. What do you mean I need to write code that works AND handle the errors when it doesn't? But my code has _so many errors_! If only there were a way to **aggregate** these **errors** together...

**What it does**: Pretty much exactly what it sounds like: it's an object representing multiple errors wrapped in a single error.

**Example:**

```js
try {
  throw new AggregateError(
    [
      new Error("This thing blew up"),
      new Error("And also this thing"),
      new Error("Dang, this can't be good"),
    ],
    "Hey, so bad news"
  );
} catch (e) {
  console.log(e.message); // Hey, so bad news
  console.log(e.name);    // AggregateError
  console.log(e.errors);  // (3) [Error: This thing blew up
}                         // Error: And also this thing
                          // Error: Dang, this can't be good];
```

This is also the error thrown by our previous friend <span className="code">Promise.any()</span> if all of the promises passed to it are rejected. Let's just hope we don't have to see this one _too much_.