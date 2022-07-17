interface GetJobBrokerDtoOutType {
    jobBroker: {
        "id": string,
        "awid": string,
        "sys": object,                                
        "name": string,
        "state": string,
        "jobArchiveConfig": {                         
          "jobTtl": number,
          "jobMaxCount": number
        },
        "queueMap": any,
        "callUriValidationPattern": string,
        "callBackUriValidationPattern": string,
        "authenticationType": string,
        "asyncJobBaseUri": string,
        "stuckStartedJobTtl": number
    }
  };