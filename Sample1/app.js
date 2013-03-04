var Greeter = (function () {
    function Greeter(element) {
        this.element = element;
    }
    Greeter.prototype.show = function () {
        this.element.innerText += "Ola K Ase";
    };
    return Greeter;
})();
window.onload = function () {
    var el = document.getElementById('content');
    var greeter = new Greeter(el);
    greeter.show();
};
