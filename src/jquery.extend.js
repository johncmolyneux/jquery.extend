// custom event container
$.fn._customEvents = {};
$.fn.createEvent = function (name, notifier) {
    $.fn._customEvents[name] = notifier;
};

// extend .on() so custom events can be handled
$.fn._on = $.fn.on;
$.fn.on = function () {
    for (var event in $.fn._customEvents) {
        if (event == arguments[0]) {
            $.fn._customEvents[event](this, arguments[1]);
            return this;  // return the element so we can chain as normal
        }
    }
    return $.fn._on.apply(this, arguments);
};
