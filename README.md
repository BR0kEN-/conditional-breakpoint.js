# scrollBreakpoint.js

Plugin aimed for reducing the overhead on a client side for `scroll` event handling. In most cases we have to do some actions on exact breakpoint and continue scrolling the page, but many developers forget to check that actions has been performed and repeating them on every single event.

## Usage

Let's add the `sticky-header` class to the `body` element as soon as scroll position will be below of 500 pixels and remove it otherwise.

```javascript
window.scrollBreakpoint(function() {
  return this.scrollY > 500;
}, function(isTrue) {
  // This code will be executed exactly once when you'll reach the breakpoint.
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

The result of two samples above will be completely the same. Customer will not see the difference. But in the first case, class to the `body` will be added as soon as page will be scrolled to 500 pixels or below and removed when scroll location will be above of this height. In second one - the same actions will be performed every f***ing scroll. [Check the demonstration](http://BR0kEN-.github.io/scrollBreakpoint.js) and see by yourself.
