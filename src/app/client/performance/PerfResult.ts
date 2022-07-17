class PerfResult<T> {
    
    private data: T;
    private start: number;
    private end: number;
    private request: unknown;

    constructor(perfResultDtoIn: PerfResultDtoInType<T>) {
        this.data = perfResultDtoIn.data;
        this.start = perfResultDtoIn.start;
        this.end = perfResultDtoIn.end;
        this.request = perfResultDtoIn.request;
    }

    getDurationInSeconds(): number {
        return (this.end - this.start) / 1000;
    }

    getData(): T {
        return this.data;
    }

    getResponseSizeInMB(): number {
        const size = Buffer.byteLength(JSON.stringify(this.data));
        return parseFloat((size / 1024 / 1024).toFixed(2));
    }

    getRequestSizeInkB(): number{
        const size = Buffer.byteLength(JSON.stringify(this.request));
        return parseFloat((size / 1024 ).toFixed(2));
    }
    
}

export default PerfResult;