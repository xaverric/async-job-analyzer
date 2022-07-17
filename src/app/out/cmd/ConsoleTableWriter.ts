import { CommandLineOptions } from "command-line-args";
import Table from "cli-table3";
import Writer from "../Writer";
import ConsoleWriter from "./ConsoleWriter";

class ConsoleTableWriter<T> extends ConsoleWriter implements Writer<string> {
    
    constructor(data: Array<T>, header?: Array<string>) {
        super(ConsoleTableWriter.getTableContent(data, header));
    }

    private static getTableContent = <T> (data: Array<T>, header?: Array<string>): string => {
        let table = new Table({head: header ? header : Object.keys(data[0])});
        data.forEach(item => table.push(Object.values(item)));
        return table.toString();
    }

}

export default ConsoleTableWriter;