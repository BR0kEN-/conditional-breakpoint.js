(function(event) {
  'use strict';

  var addEventListener = window.addEventListener;

  if (!addEventListener) {
    event = 'on' + event;
    addEventListener = window.attachEvent;
  }

  /**
   * @param {Function} conditionCallback
   * @param {Function} actionCallback
   */
  window.scrollBreakpoint = function(conditionCallback, actionCallback) {
    var ready = true;

    addEventListener(event, function() {
      if (conditionCallback.call(this)) {
        if (ready) {
          actionCallback.call(this, ready);
          ready = !ready;
        }
      }
      else {
        if (!ready) {
          actionCallback.call(this, ready);
          ready = !ready;
        }
      }
    });
  };
})('scroll');
