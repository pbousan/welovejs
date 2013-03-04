var App;
(function (App) {
    (function (Utils) {
        Utils.LoggerMode = {
            Console: 1,
            Alert: 2
        };
        var Logger = (function () {
            function Logger(mode) {
                if (typeof mode === "undefined") { mode = Utils.LoggerMode.Console; }
                this.mode = mode;
                switch(this.mode) {
                    case Utils.LoggerMode.Console: {
                        this.writer = function (msg) {
                            return console.log(msg);
                        };
                        break;

                    }
                    case Utils.LoggerMode.Alert: {
                        this.writer = function (msg) {
                            return alert(msg);
                        };

                    }
                }
            }
            Logger.prototype.write = function (msg) {
                this.writer(msg);
            };
            return Logger;
        })();
        Utils.Logger = Logger;        
    })(App.Utils || (App.Utils = {}));
    var Utils = App.Utils;

})(App || (App = {}));

