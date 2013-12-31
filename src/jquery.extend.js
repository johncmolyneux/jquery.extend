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

// global debug object that defines whether or not to show console messages
var debug = {
    get enabled() {
        return localStorage.getItem("_debug") === "true";
    },
    set enabled(value) {
        localStorage.setItem("_debug", value);
    }
}

// Check for console and create empty functions if it doesn't exist
if (typeof console == "undefined") {
    window.console = {
        dir: function () { },
        error: function () { },
        log: function () { },
        warn: function () { }
    };
}

// override console functions so that they only work if debug is enabled
window._console = window.console;
window.console = {
    dir: function () {
        if (debug.enabled) _console.dir.apply(_console, arguments);
    },
    error: function () {
        if (debug.enabled) _console.error.apply(_console, arguments);
    },
    log: function () {
        if (debug.enabled) _console.log.apply(_console, arguments);
    },
    warn: function () {
        if (debug.enabled) _console.warn.apply(_console, arguments);
    }
};

// if debugging is enabled, log all ajax requests options
$(document).ajaxSend(function (event, jqXHR, ajaxOptions) {
    if (debug.enabled) {
        console.log(ajaxOptions.url);
        console.log(ajaxOptions);
    }
});

