# async-job-analyzer
Analyze your asynchronous jobs as never before.

## Installation
```
npm install -g async-job-analyzer
```

## Usage
```
async-job-analyzer <command> <command parameters>
```

## Commands
```
help      Display this help.
analyze   Performs jobs analysis based on given parameters and configuration.
print     Prints details about async job broker.
```

## Parameters
### **--command** [string] 
analyze, print, help commands. All these can be used as default commands without providing --command argument

### -c, --config [string]
Configuration file containing user credentials and important URIs for the tool.

**Configuration File Convention**
All configuration fields are mandatory.
```json
{
    "hostOidc": "... grantToken uri for OIDC ...",
	"asyncJobBaseUri": "... async-job base uri ...",
	"ac1": "... user access code 1 ...",
	"ac2": "... user access code 2 ..."
}
```

### -q, --queue [string[]]
- *command*: **analyze**
    - Queue names for analysis. If not specified, the tool scans for all jobs no matter the queue name.
- *command*: **print**
    - Print all available queues in the given async job instance.

### -s, --status [string[]]
- *command*: **analyze**
    - Queue status for analysis. If not specified, the tool scans for all jobs no matter the status.
- *command*: **print**
    - Print job statistics (count of jobs per status).

### -p, --params [string[]]
Supported param values: [*count*].

*count* - supported for **analyze** command only.
- In case it is used with **-q** option, the tool will display number of jobs per queue. Filtering is still allowed.
- In case it is used with **-s** option, the tool will display job statistics (count of jobs per status).

### -o, --output [string]
Output folder path, where the output from the command call should be stored.

### -h, --help
Display help

## Examples
```bash
# Perform analysis of all available jobs
async-job-analyzer analyze -q --config C:\cfg.json

# Perform analysis of jobs in specific queues
async-job-analyzer analyze -q QUEUE1 QUEUE2 --config C:\cfg.json

# Show count of jobs per every queue
async-job-analyzer analyze -q --params count --config C:\cfg.json

# Show count of jobs for specific queues only
async-job-analyzer analyze -q QUEUE1 QUEUE2 --params count --config C:\cfg.json

# Show job broker statistics - count of jobs per job status
async-job-analyzer analyze -s --params count --config C:\cfg.json

# Show available queues
async-job-analyzer print -q --config C:\cfg.json

# Show job broker statistics - count of jobs per job status
async-job-analyzer print -s --config C:\cfg.json
```