(function (window) {
  'use strict';

  /**
   * @template {'resize'|'scroll'} E
   *
   * @param {E} eventName
   *
   * @return {
   *   (
   *     condition: (this: Window) => boolean,
   *     action: (this: Window, ready: boolean, event: GlobalEventHandlersEventMap[E]) => void
   *   ) => void
   * }
   */
  function getHandler(eventName) {
    return function(condition, action) {
      let ready = true;

      window.addEventListener(eventName, function (event) {
        if (condition.call(this)) {
          if (ready) {
            action.call(this, ready, event);
            ready = !ready;
          }
        } else {
          if (!ready) {
            action.call(this, ready, event);
            ready = !ready;
          }
        }
      });
    };
  }

  window.conditionalBreakpoint = Object.create(null);
  window.conditionalBreakpoint.resize = getHandler('resize');
  window.conditionalBreakpoint.scroll = getHandler('scroll');
})(window);
