## - Numeric Literal Separator

- [Numeric Literal Separator ECMAScript Language Specification](https://tc39.es/ecma262/2021/#prod-NumericLiteralSeparator)

We use numeric separators for numbers in real life because it stops us from having false hope that our paychecks are larger than they actually are. Up until now, we haven't been afforded that same luxury in JavaScript. When we see <span className="code">const ONE_BILLION = 1000000000;</span> we need
to leave it up to blind faith in the developer who wrote it that the number is, in fact, one billion because our brains look at that clump of digits and only see chaos.

**What it does:** Allows us to use underscores to create a visual separation between groups of digits.

**Example:**

```js
const ONE_BILLION = 1_000_000_000; // okay, so they weren't lying (this time)
```

You can even use it for binary or hex literals if that's your thing. That's cool. No judgment here.