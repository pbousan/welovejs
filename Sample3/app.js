var LoggerMode = {
    Console: 1,
    Alert: 2
};
var Logger = (function () {
    function Logger(mode) {
        if (typeof mode === "undefined") { mode = LoggerMode.Console; }
        this.mode = mode;
        switch(this.mode) {
            case LoggerMode.Console: {
                this.writer = function (msg) {
                    return console.log(msg);
                };
                break;

            }
            case LoggerMode.Alert: {
                this.writer = function (msg) {
                    return alert(msg);
                };
                break;

            }
        }
    }
    Logger.prototype.write = function (msg) {
        this.writer(msg);
    };
    return Logger;
})();
window.onload = function () {
    var logger = new Logger(LoggerMode.Alert);
    logger.write("Ola k Ase");
};
