$.createEvent()
-
This function allows you to create custom events and assign event handlers to them using the default jQuery on() method.

*This example of creating a custom event is taken from [custom-events](src/custom-events.js)*
```JavaScript
$.createEvent("enterkey", function (element, callback) {
    var $element = $(element);
    $element.on("keyup", function(e) {
        var code = (e.keyCode ? e.keyCode : e.which);
        if (code == 13) {
            callback();
        }
    });    
});
```
*Here is an example of using the above custom event*
```JavaScript
$("input").on("enterkey", function(event) {
    console.log("enter key pressed : " + $(this).val());
});
```

debug
-
This allows you to add debug logging to your code and enable and disable it at any time through the browser console.  (It means you can add debug code to your scripts and it won't be shown until you enable it.)

Also, when debugging is enabled all AJAX requests will be logged so you can inspect the data that was sent.

**debug.enabled**

*Set or get whether to show debug messages or not*
```JavaScript
// get
console.log(debug.enabled);

// set
debug.enabled = true;
```
**debug.dir()**

*As per console.dir() but only shown if debug is enabled*
```JavaScript
debug.dir(obj);
```
**debug.error()**

*As per console.error() but only shown if debug is enabled*
```JavaScript
debug.error("An error occured in function x : " + arguments);
```
**debug.log()**

*As per console.log() but only shown if debug is enabled*
```JavaScript
debug.log("Debug logging information");
```
**debug.warn()**

*As per console.warn() but only shown if debug is enabled*
```JavaScript
debug.warn("This is a warning message.  You'll probably ignore it.");
```

queryString
-
Access values in the query string, similar to server-side languages.
```JavaScript
console.log(queryString("name"));
```
