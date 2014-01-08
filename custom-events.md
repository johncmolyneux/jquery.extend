This is a list of the custom events added in custom-events.js.  This library can only be used in conjunction with js-extend, which adds the functionality required to create custom events and add them to the jQuery on() function.

datachanged
-
Custom event that is triggered when a data value is changed.
```JavaScript
$("div.data-container").on("datachange", function(event, name, value) {
    console.log("data changed : " + name + " = " + value);
});
```

enterkey
-
Custom event that is triggered when the enter key is pressed in a selected element or elements.
```JavaScript
$("input").on("enterkey", function(event) {
    console.log("enter key pressed : " + $(this).val());
});
```


imagesloaded
-
Custom event that is triggered when all images in a selected element or elements have been loaded.
```JavaScript
$("div.container").on("imagesloaded", function(event) {
    console.log("all images loaded");
});
```


