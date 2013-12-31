// this is needed to force document.ready on some browsers when using back button
window.onunload = function (){};

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

// Check for console and create empty functions if it doesn't exist
if (typeof console == "undefined") {
    window.console = {
        dir: function () { },
        error: function () { },
        log: function () { },
        warn: function () { }
    };
}

// global debug object
window.debug = {
    get enabled() {
        return localStorage.getItem("_debug") === "true";
    },
    set enabled(value) {
        localStorage.setItem("_debug", value);
    },
    dir: function () {
        if (this.enabled) console.dir.apply(console, arguments);
    },
    error: function () {
        if (this.enabled) console.error.apply(console, arguments);
    },
    log: function () {
        if (this.enabled) console.log.apply(console, arguments);
    },
    warn: function () {
        if (this.enabled) console.warn.apply(console, arguments);
    }
}

// if debugging is enabled, log all ajax requests options
$(document).ajaxSend(function (event, jqXHR, ajaxOptions) {
    if (debug.enabled) {
        console.log(ajaxOptions.url);
        console.log(ajaxOptions);
    }
});

