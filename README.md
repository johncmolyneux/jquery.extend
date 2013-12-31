js-extend.js
=

JavaScript & jQuery extension library.

This library extends JavaScript & jQuery by adding new functions that I have created.  These will be updated and listed below.

$.createEvent()
-
This function allows you to create custom events and assign event handlers to them using the default jQuery on() method.

There are custom events in the file custom-events.js, showing examples of how to use it.

debug
-
**debug.enabled = true; // all console messages will be output**

**debug.enabled = false; // all console messages will be ignored**

This allows you to add debug logging to your code (using console.log, console.dir etc.) and then enable it and disable it at any time through the console, just on the browser you are using.  (It means you can add debug code to your scripts and no-one will ever see it.)

Also, when debugging is enabled all AJAX requests will be logged so you can inspect the data that was sent.
