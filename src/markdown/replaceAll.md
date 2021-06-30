## - String.prototype.replaceAll()

- [String.prototype.replaceAll ECMAScript Language Specification](https://tc39.es/ecma262/multipage/text-processing.html#sec-string.prototype.replaceall)
- [String.prototype.replaceAll MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll)

**What it does:** returns a new string where all matches of a pattern are replaced with a replacement.

**Example:**

```js
const str = "keith got first place in the talent show";

console.log(str.replaceAll("first", "second")); // keith got second place in the talent show
```

> You really had to be there to get this joke

You may be saying "Wait, isn't this the same as <span className="code">.replace()</span> using a Regex pattern and the global flag?" <span className="emphasis">Yeah, that's pretty much it</span>. The function itself feels a little more explicit, and it does allow you to provide a string pattern (where <span className="code">.replace()</span> would require you to provide a regular expression pattern in order to do a full replacement), but ultimately—it's just ergonomics.
