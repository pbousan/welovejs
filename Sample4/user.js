var App;
(function (App) {
    (function (Management) {
        var User = (function () {
            function User(name, age) {
                this.name = name;
                this.age = age;
                this.logger = new App.Utils.Logger(App.Utils.LoggerMode.Alert);
            }
            User.prototype.play = function (song) {
                this.logger.write('User: ' + this.name + ' plays song: ' + song);
            };
            return User;
        })();
        Management.User = User;        
    })(App.Management || (App.Management = {}));
    var Management = App.Management;

})(App || (App = {}));

