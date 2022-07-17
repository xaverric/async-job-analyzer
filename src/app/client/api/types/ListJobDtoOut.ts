interface ListJobDtoOutType {
    "itemList": [
        {
            "id": string,
            "awid": string,
            "sys": object,
            "queueCode": string,
            "callbackQueueCode": string,
            "notBeforeTime": string,
            "notAfterTime": string,
            "state": string,
            "call": {
                "uri": string,
                "data": object,
                "httpMethod": string,
                "httpHeaderMap": object
            },
            "callback": {
                "uri": string,
                "data": object,
                "httpMethod": string,
                "httpHeaderMap": object
            },
            "jobFinishStrategy": string
            "stateHistory": object[],
            "retryOptions": {
                "invokeRetryAfter": number[],
                "invokeRetryIndex": number,
                "brokerRetryIndex": number
            },
            "callbackRetryOptions": {
                "invokeRetryAfter": number[],
                "invokeRetryIndex": number,
                "brokerRetryIndex": number
            },
            "tagList": string[],
            "groupList": string[],
            "priority": number,
            "skipsRemaining": number,
            "costOfJobSkip": number
        }
    ],
    "pageInfo": {
        "pageIndex": 0,
        "pageSize": 1000
    },
    "uuAppErrorMap": {}

}

export default ListJobDtoOutType;