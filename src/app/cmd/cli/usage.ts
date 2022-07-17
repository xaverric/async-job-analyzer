import commandLineUsage from 'command-line-usage';
import { cmdArgumentsDefinition } from "./arguments";

const usageDefinition = [
  {
    header: 'async-job-analyzer',
    content: 'Analyze your asynchronous jobs as never before.'
  },
  {
    header: 'Synopsis',
    content: '$async-job-analyzer <command> <command parameters>'
  },
  {
    header: 'Commands',
    content: [
      { name: 'analyze', summary: 'Performs jobs analysis based on given parameters and configuration.' },
      { name: 'print', summary: 'Prints details about async job broker.' },
      { name: 'help', summary: 'Display this help.' }
    ]
  },
  {
    header: 'Parameters',
    optionList: cmdArgumentsDefinition
  }
];

export default commandLineUsage(usageDefinition);
