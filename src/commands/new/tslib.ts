import { SchematicContext, Rule } from '@angular-devkit/schematics';
import { CliCommand } from '@doptools/tslib-cli-core';
import Command from '@oclif/command';

import { parse } from 'semver';

@CliCommand({
  description: 'Get the version of the project'
})
export default class NewTslibProjectCommand extends Command {
    
    run(): PromiseLike<any> {
        throw new Error('Method not implemented.');
    }
  
}
