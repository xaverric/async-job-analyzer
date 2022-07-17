import Writer from "../Writer";

class ConsoleWriter implements Writer<string> {
    
    private content: string;

    constructor(data: string) {
        this.content = data;
    }

    write(): void {
        console.log(this.content);
    }

    getData(): string {
        return this.content;
    }
    
}

export default ConsoleWriter;