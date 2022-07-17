#!/usr/bin/env node
import Action from './app/cmd/api/Action';
import actionInitializer from './app/cmd/action/ActionInitializer';
import { cmdArguments } from './app/cmd/cli/arguments';
import {LOG} from "./app/log/winston.config";

const main = async () => {
  const actions: Action[] = actionInitializer(cmdArguments);
  const action: Action = actions.find(action => action.isExecutable())!;
  action && action.execute();
  
  processErrorMessages(action);
};

const processErrorMessages = (action: Action) => {
  cmdArguments._unknown && LOG.debug(`Unknown arguments used: ${cmdArguments._unknown}`);
  !action && LOG.debug('No action match the given parameters. Terminating without any action performed.');
};

main().then(() => {
  process.stdin.destroy();
}).catch((e) => {
    LOG.error(`Error in application : ${e.stack}`);
});
