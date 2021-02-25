import { properties } from '@doptools/schematic-project-tslib/src/new/schema.json';
import { Argument, BooleanFlag, SchematicRunner, StringFlag } from '@doptools/tslib-cli-core';
import Command from '@oclif/command';

export abstract class NewTypescriptProjectCommandBase extends Command {

    @Argument({
        description: properties.name.description
    })
    protected name?: string;

    @StringFlag({
        description: properties.directory.description
    })
    protected directory?: string;

    @StringFlag({
        description: properties.description.description
    })
    protected description?: string;

    @StringFlag({
        description: properties.repository.description
    })
    protected repository?: string;

    @StringFlag({
        description: properties.author.description
    })
    protected author?: string;

    @StringFlag({
        description: properties.license.description
    })
    protected license?: string;

    @BooleanFlag({
        description: properties.private.description
    })
    protected private?: boolean;

    @BooleanFlag({
        description: properties.skipGit.description
    })
    protected skipGit?: boolean;

    @BooleanFlag({
        description: properties.skipInstall.description
    })
    protected skipInstall?: boolean;

    @BooleanFlag()
    protected verbose?: boolean;

    @BooleanFlag()
    protected force?: boolean;

    @BooleanFlag()
    protected dryRun?: boolean;

    @BooleanFlag()
    protected interactive?: boolean;
}
