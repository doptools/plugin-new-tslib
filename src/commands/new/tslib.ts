import { Argument, BooleanFlag, CliCommand, SchematicRunner, StringFlag } from '@doptools/tslib-cli-core';
import Command, { flags } from '@oclif/command';
import { properties } from '@doptools/schematic-project-tslib/src/new/schema.json';
@CliCommand({
  description: 'Generate a new typescipt library project'
})
export default class NewTslibProjectCommand extends Command {

  @Argument({
    description: properties.name.description
  })
  private name?: string;

  @StringFlag({
    description: properties.directory.description
  })
  private directory?: string;

  @StringFlag({
    description: properties.description.description
  })
  private description?: string;

  @StringFlag({
    description: properties.repository.description
  })
  private repository?: string;

  @StringFlag({
    description: properties.author.description
  })
  private author?: string;

  @StringFlag({
    description: properties.license.description
  })
  private license?: string;

  @BooleanFlag({
    description: properties.private.description
  })
  private private?: boolean;

  @BooleanFlag({
    description: properties.skipGit.description
  })
  private skipGit?: boolean;

  @BooleanFlag({
    description: properties.skipInstall.description
  })
  private skipInstall?: boolean;

  @BooleanFlag()
  private verbose?: boolean;

  @BooleanFlag()
  private force?: boolean;

  @BooleanFlag()
  private dryRun?: boolean;

  @BooleanFlag()
  private interactive?: boolean;


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
