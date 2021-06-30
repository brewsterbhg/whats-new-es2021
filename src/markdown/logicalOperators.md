## - Logical Assignment Operators

- [Logical Assignment Operators ECMAScript Language Specification](https://tc39.es/ecma262/multipage/ecmascript-language-expressions.html#sec-assignment-operators)
- [Logical AND Assignment MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND_assignment)
- [Logical OR Assignment MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR_assignment)
- [Logical Nullish Assignment MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_nullish_assignment)

As a JavaScript developer I'm always chasing that dragon of writing less code. In fact, if I could write no code, I would. Hmm, maybe being a developer wasn't the right occupation for me. Sorry, what were we talking about again?

**What it does:** Provides the following new compound assignment operators: <span className="code">logical AND assignment (&&=)</span>, <span className="code">logical OR assignment (||=)</span>, and <span className="code">logical nullish assignment (??=)</span>.

**Examples:**

a &&= b

```js
const song = {
    title: 'Never Gonna Give You Up',
    description: ''
};
​
// song.title is truthy
song.title &&= 'Rick Roll';
console.log(song.title); // 'Rick Roll'
​
// song.artist is falsy
song.artist &&= 'Rick Astley';
console.log(song.artist); // undefined
​
// song.description is falsy
song.description &&= 'This is a great song!';
console.log(song.description); // ''
```

a ||= b

```js
const song = {
    title: 'Never Gonna Give You Up',
    artist: ''
};
​
// song.title is truthy
song.title ||= 'Rick Roll';
console.log(song.title); // 'Never Gonna Give You Up'
​
// song.artist is falsy
song.artist ||= 'Rick Astley';
console.log(song.artist); // 'Rick Astley'
```

a ??= b

```js
const song = {
    title: 'Never Gonna Give You Up'
};
​
// song.title is NOT nullish
song.title ??= 'Rick Roll';
console.log(song.title); // 'Never Gonna Give You Up''
​
// song.artist is nullish
song.artist ??= 'Rick Astley';
console.log(song.artist); // 'Rick Astley'
```

I hope you're as excited as me for these new ways to assign variables that will almost certainly cause some immediate cognitive overhead as we think to ourselves "wait, when it's OR does that mean this property will update if it exists or when it doesn't?". When in doubt, reference this table below:

<table>
  <thead>
    <tr>
      <th>Assignment operator</th>
      <th>Equivalent to</th>
      <th>Only assigns if a is</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>a ||= b</td>
      <td>a || (a = b)</td>
      <td>Falsy</td>
    </tr>
    <tr>
      <td>a &&= b</td>
      <td>a && (a = b)</td>
      <td>Truthy</td>
    </tr>
    <tr>
      <td>a ??= b</td>
      <td>a ?? (a = b)</td>
      <td>Nullish</td>
    </tr>
  </tbody>
</table>