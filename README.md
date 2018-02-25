# conditional-breakpoint.js

Plugin aimed at reducing the overhead on a client side in the handling of `scroll` and `resize` events. In most cases we have to do some actions on an exact breakpoint and continue scrolling/resizing the page, but many developers forget to check that actions have been performed and repeating them on every single event occasion.

## Installation

### Bower

```shell
bower install conditional-breakpoint
```

### NPM

```shell
npm install conditional-breakpoint
```

## Usage

Let's add the `sticky-header` class to the `body` element as soon as scroll position will be below of 500 pixels and remove it otherwise.

```javascript
window.conditionalBreakpoint.scroll(function() {
  return this.scrollY > 500;
}, function(isTrue) {
  // This code will be executed exactly once when you'll reach the
  // breakpoint and not as many times as event will be fired.
  document.body.classList[isTrue ? 'add' : 'remove']('sticky-header');
});
```

One **bad example** which I'm seeing all the time:

```javascript
window.addEventListener('scroll', function() {
  // This code will be executed every time during page scrolling.
  document.body.classList[this.scrollY > 500 ? 'add' : 'remove']('sticky-header');
});
```

The result of two samples above will be completely the same. Customer will not see the difference. But in the first case, class to the `body` will be added as soon as a page will be scrolled to 500 pixels or below and removed when scroll location will be above of this height. In the second one - the same actions will be performed every f***ing scroll. [Check the demonstration](http://BR0kEN-.github.io/conditional-breakpoint.js) and see personally.

![Demonstration](docs/screenshots/demo.png)

The same technique can be used for handling the `resize` event. Check it out:

```javascript
window.conditionalBreakpoint.resize(function() {
  return this.innerWidth > 500;
}, function(isTrue) {
  // This code will be executed exactly once when the window width
  // is bigger than 500 pixels.
  document.body.classList[isTrue ? 'add' : 'remove']('sticky-header');
});
```

And its **bad brother**:

```javascript
window.addEventListener('resize', function() {
  var isTrue = this.innerWidth > 500;
  // Execute one of the methods as many times as the event is fired. Gosh...
  document.body.classList[isTrue ? 'add' : 'remove']('sticky-header');
});
```
