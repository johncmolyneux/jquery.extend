js-extend.js
=

JavaScript & jQuery extension library.

This library extends JavaScript & jQuery by adding new functions that I have created and overriding some existing ones to add new features.  These will be updated when I make something new and listed below.


$.createEvent()
-
This function allows you to create custom events and assign event handlers to them using the default jQuery on() method.

There are custom events in the file custom-events.js, showing examples of how to use it.


$.data()
-
A trigger has been added to the jQuery data() function.  You can now capture data change events using .on("datachange", function(event, name, value).  Usefull for handling data changes for many elements without having to add a function call in many places, and also for handling data changes caused by 3rd party libraries and plugins.


debug
-
This allows you to add debug logging to your code and enable and disable it at any time through the browser console.  (It means you can add debug code to your scripts and it won't be shown until you enable it.)

Also, when debugging is enabled all AJAX requests will be logged so you can inspect the data that was sent.

**debug.enabled** sets/gets whether to show debug messages or not (browser and site-specific, persisting from page to page)

**debug.dir()** as per console.dir() but only shown if debug is enabled

**debug.error()** as per console.error() but only shown if debug is enabled

**debug.log()** as per console.log() but only shown if debug is enabled

**debug.warn()** as per console.warn() but only shown if debug is enabled
