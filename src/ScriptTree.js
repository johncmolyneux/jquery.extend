
var ScriptTree = function() {

    var scriptObject = function(url) {

        // private -------------------------------------------------------------------------------------------------------
        var dependencies = [];

        var addDependency = function(url) {
            script = new scriptObject(url);
            dependencies.push(script);
            return script;
        };

        // public --------------------------------------------------------------------------------------------------------
        this.addDependency = addDependency;
        this.dependencies = dependencies;
		    this.url = url;
    };

    var scripts = [];
    var loaders = [];

    function addScript(url) {
        var script = new scriptObject(url);
        scripts.push(script);
        return script;
    }

    function loadScript(script) {
        var loader = new Promise(function(resolve, reject) {
            var scriptTag = document.createElement("script");
            scriptTag.addEventListener("load", resolve);
            scriptTag.addEventListener("error", reject);
            document.querySelector("head").appendChild(scriptTag);
            scriptTag.src = script.url;
        });
        if (script.dependencies.length) {
            loader.then(function() {
                script.dependencies.forEach(function(dependency) {
                    loadScript(dependency);
                });
            });
        }
        return loader;
    }

    function load() {
        scripts.forEach(function(script) {
            loaders.push(loadScript(script));
        });
        return Promise.all(loaders);
    }

    // external ---------------------------------------------------------------------------------------------------------
    this.addScript = addScript;
    this.load = load;
};
