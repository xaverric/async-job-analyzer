interface PerfResultDtoInType<T> {
    data: T;
    start: number;
    end: number;
    request: unknown
}