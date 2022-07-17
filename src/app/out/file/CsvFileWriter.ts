import TextFileWriter from "./TextFileWriter";
import Writer from "../Writer";

class CsvFileWriter<T> extends TextFileWriter implements Writer<string> {
    
    constructor(data: Array<T>) {
        super(CsvFileWriter.getCsvContent(data));
    }

    private static getCsvContent = <T> (data: Array<T>): string => {
        return `${this.getHeader(data)}${this.getBody(data)}`;
    }

    private static getHeader = <T> (data: Array<T>): string => {
        return `${Object.keys(data[0]).join(";")}\n`;
    }

    private static getBody = <T> (data: Array<T>): string => {
        return data.map(item => Object.values(item).join(";")).join("\n");
    }

}

export default CsvFileWriter;