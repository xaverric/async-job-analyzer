import PerfResult from "./PerfResult";

class PerfAnalyzer {

    /**
     * 
     * @param client 
     * @param fnc 
     * @param dtoIn 
     * @returns 
     */
    static track = async <T, E, F> (client: E, fnc: Function, dtoIn: F): Promise<PerfResult<T>> => {
        let start = Date.now();
        let data: T = await fnc.call(client, dtoIn);
        let end = Date.now();
        return new PerfResult({
            data, 
            start, 
            end, 
            request: dtoIn
        });
    }
}

export default PerfAnalyzer;