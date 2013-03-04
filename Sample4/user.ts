/// <reference path="utils.ts" />

module App.Management { 
    export class User {
        private logger: App.Utils.ILogger;

        constructor (public name : string, public age: number) {
            this.logger = new App.Utils.Logger(App.Utils.LoggerMode.Alert);
        }

        play(song: string) {
            this.logger.write('User: ' + this.name + ' plays song: ' + song);
        }
    }
}