interface Writer<T> {

    write(path?: string, fileName?: string): void;

    getData(): T;

}

export default Writer;