interface JobBrokerStatistics {
    "submittedCount": number, 
        "scheduledCound": number, 
        "allocatedCount": number, 
        "startedCount": number, 
        "completedCount": number, 
        "failedCound": number, 
        "canceledCount": number
}

export default JobBrokerStatistics;