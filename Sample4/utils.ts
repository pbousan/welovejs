module App.Utils { 

  export  var LoggerMode = {
        Console : 1,
        Alert : 2
    }

     export interface ILogger { 
        write: (msg: string) => void;
    }

    export class Logger implements ILogger {
        private writer: any;
    
        constructor (public mode: number = LoggerMode.Console) { 
            switch (this.mode) { 
                case LoggerMode.Console:
                    this.writer = (msg: string) => console.log(msg);
                    break;

                case LoggerMode.Alert:
                    this.writer = (msg: string) => alert(msg);
            }
        }

        write(msg) { this.writer(msg); }
     }
}