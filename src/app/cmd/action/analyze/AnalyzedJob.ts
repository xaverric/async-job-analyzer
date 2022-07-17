interface AnalyzedJob {
    id: string,
    queue: string,
    cts: unknown,
    mts: unknown,
    rev: unknown,
    state: string,
    stateHistorySize: number,
    duration: number,
    requestSize: number,
    responseSize: number
}