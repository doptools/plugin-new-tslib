import { CliCommand, SchematicRunner } from '@doptools/tslib-cli-core';
import { NewTypescriptProjectCommandBase } from '../../../base/NewTypescriptProjectCommandBase';


@CliCommand({
    description: 'Generate a new typescipt nodejs library project'
})
export default class NewTypescriptNodeJsLibraryCommand extends NewTypescriptProjectCommandBase {

    async run(): Promise<void> {
        await SchematicRunner.create('@doptools/schematic-project-tslib/new', {
            verbose: this.verbose,
            force: this.force,
            dryRun: this.dryRun,
            interactive: this.interactive,
            mode: 'rw'
        }).execute({
            name: this.name,
            directory: this.directory,
            description: this.description,
            repository: this.repository,
            author: this.author,
            license: this.license,
            private: this.private,
            skipGit: this.skipGit,
            skipInstall: this.skipInstall,
        });
    }
}
