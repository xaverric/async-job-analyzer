interface ListJobDtoInType {
    notBeforeTimeFrom?: string,
    notBeforeTimeTo?: string,
    stateList?: string[],
    queueList?: string[],
    tagList?: string[],
    groupList?: string[],
    priority?: number,                      
    repeatedJobId?: string
    pageInfo?: { 
        pageIndex: number, 
        pageSize?: number
    }
}

export default ListJobDtoInType;