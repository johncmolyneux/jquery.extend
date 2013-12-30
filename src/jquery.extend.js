// custom event container
$._customEvents = {};
$.createEvent = function (trigger, notifier) {
    $._customEvents[trigger] = notifier;
};

// extend .on() so custom events can be handled
$.fn._on = $.fn.on;
$.fn.on = function () {
    for (var event in $._customEvents) {
        if (event == arguments[0]) {
            $._customEvents[event](this, arguments[1]);
            return this;  // return the element so we can chain as normal
        }
    }
    return $.fn._on.apply(this, arguments);
};
