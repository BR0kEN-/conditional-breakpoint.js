(function(window) {
  'use strict';

  var getHandler = function(eventName) {
    /**
     * @param {Function} conditionCallback
     * @param {Function} actionCallback
     */
    return function(conditionCallback, actionCallback) {
      var ready = true;

      window.addEventListener(eventName, function() {
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
  };

  window.conditionalBreakpoint = Object.create(null);
  window.conditionalBreakpoint.resize = getHandler('resize');
  window.conditionalBreakpoint.scroll = getHandler('scroll');
})(window);
