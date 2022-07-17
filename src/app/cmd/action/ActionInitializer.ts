import { CommandLineOptions } from 'command-line-args';
import Action from '../api/Action';
import AnalyzeAction from './analyze/AnalyzeAction';
import HelpAction from './help/HelpAction';
import PrintAction from './print/PrintAction';
import Configuration from '../../conf/types/Configuration';
import ConfigurationService from '../../conf/service/ConfigurationService';

const actionInitializer = (cmdArguments: CommandLineOptions): Array<Action> => {
  let configuration: Configuration = ConfigurationService.load(cmdArguments);
  return [
    new HelpAction(cmdArguments),
    new AnalyzeAction(cmdArguments, configuration),
    new PrintAction(cmdArguments, configuration)
  ];
};

export default actionInitializer;
