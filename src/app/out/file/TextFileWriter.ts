import fs from "fs";
import Writer from "../Writer";
import path from "path";
import { dir } from "console";

class TextFileWriter implements Writer<string>{
    
    private content: string;

    constructor(data: string) {
        this.content = data;
    }

    write(directory: string, fileName: string): void {
        if (!fs.existsSync(directory)) {
            fs.mkdirSync(directory, {recursive: true});
        }
        fs.writeFileSync(path.resolve(directory, fileName), this.content, 'utf-8');
    }

    getData(): string {
        return this.content;
    }
}

export default TextFileWriter;