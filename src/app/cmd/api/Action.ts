interface Action {

    /**
     * Function which performs given action execution
     */
    execute(): Promise<void>;
    
    /**
     * Function defining whether the action is executable based on the current parameters.
     */
    isExecutable(): boolean;

}

export default Action;