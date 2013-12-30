
// fires when child images are loaded within a selected element
$.createEvent("imagesloaded", function (element, callback) {
    var $element = $(element);
    var $images = $element.find("img");
    var imgCount = $images.length;
    if (!imgCount) {
        callback();
    } else {
        $images.each(function () {
            $(this).one("load error", function () {
                imgCount--;
                if (imgCount == 0) {
                    callback();
                }
            });
            if (this.complete) $(this).load();
        });
    }
});

// fires when the enter key is pressed within a selected element (must accept keyup)
$.createEvent("enterkey", function (element, callback) {
    var $element = $(element);
    $element.on("keyup", function(e) {
        var code = (e.keyCode ? e.keyCode : e.which);
        if (code == 13) {
            callback();
        }
    });    
})
