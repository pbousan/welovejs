class Greeter {
    element: HTMLElement;
    span: HTMLElement;
    
    constructor (element: HTMLElement) { 
        this.element = element;
    }
    show() {
        this.element.innerText += "Ola K Ase"; 
    }
}

window.onload = () => {
    var el = document.getElementById('content');
    var greeter = new Greeter(el);
    greeter.show();
};