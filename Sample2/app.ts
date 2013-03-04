class User {
    name: string;
    age: number;

    constructor () {}

    play(song: string) {
        console.log('User: ' + this.name + ' plays song: ' + song);
    }
}

class AnonymousUser extends User {

    play(song: string) { 
        super.play(song);
        console.log('Play add');
    }
}

class RegisteredUser extends User {
    play(song: string) { 
        super.play(song);
        this.AddPoints(10);
    }

    private AddPoints(value: number) { 
        console.log('User: ' + this.name + ' obtains ' + value.toString() + ' points.');
    }
}

class PremiumUser extends RegisteredUser { 
    private balance: number;

    play(song: string) {
        if (this.balance > 0) {
            super.play(song);
            this.saveOnHistory(song);
            this.balance -= 1;
        }
        else {
            console.log("No enough money.");
        }
    }

    private saveOnHistory(song : string) { 
        console.log('User: ' + this.name + ' save ' + song);
    }

    addCredit(quantity: number) {
        this.balance += quantity;
    }
}

window.onload = () => {
    var user = new RegisteredUser;
    user.play("");
};