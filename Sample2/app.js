var __extends = this.__extends || function (d, b) {
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
}
var User = (function () {
    function User() {
    }
    User.prototype.play = function (song) {
        console.log('User: ' + this.name + ' plays song: ' + song);
    };
    return User;
})();
var AnonymousUser = (function (_super) {
    __extends(AnonymousUser, _super);
    function AnonymousUser() {
        _super.apply(this, arguments);

    }
    AnonymousUser.prototype.play = function (song) {
        _super.prototype.play.call(this, song);
        console.log('Play add');
    };
    return AnonymousUser;
})(User);
var RegisteredUser = (function (_super) {
    __extends(RegisteredUser, _super);
    function RegisteredUser() {
        _super.apply(this, arguments);

    }
    RegisteredUser.prototype.play = function (song) {
        _super.prototype.play.call(this, song);
        this.AddPoints(10);
    };
    RegisteredUser.prototype.AddPoints = function (value) {
        console.log('User: ' + this.name + ' obtains ' + value.toString() + ' points.');
    };
    return RegisteredUser;
})(User);
var PremiumUser = (function (_super) {
    __extends(PremiumUser, _super);
    function PremiumUser() {
        _super.apply(this, arguments);

    }
    PremiumUser.prototype.play = function (song) {
        if(this.balance > 0) {
            _super.prototype.play.call(this, song);
            this.saveOnHistory(song);
            this.balance -= 1;
        } else {
            console.log("No enough money.");
        }
    };
    PremiumUser.prototype.saveOnHistory = function (song) {
        console.log('User: ' + this.name + ' save ' + song);
    };
    PremiumUser.prototype.addCredit = function (quantity) {
        this.balance += quantity;
    };
    return PremiumUser;
})(RegisteredUser);
window.onload = function () {
    var user = new RegisteredUser();
    user.play("");
};
