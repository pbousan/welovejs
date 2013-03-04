var LoggerMode = {
    Console : 1,
    Alert : 2
}

interface ILogger { 
    write: (msg: string) => void;
}

class Logger implements ILogger {
    private writer: any;
    
    constructor (public mode: number = LoggerMode.Console) { 
        switch (this.mode) { 
            case LoggerMode.Console:
                this.writer = (msg: string) => console.log(msg);
                break;

            case LoggerMode.Alert:
                this.writer = (msg: string) => alert(msg);
                break;
        }
    }

    write(msg) { this.writer(msg); }
 }


window.onload = () => {
    var logger : ILogger = new Logger(LoggerMode.Alert);

    logger.write("Ola k Ase");
};