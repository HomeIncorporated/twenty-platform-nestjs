import { Module } from '@nestjs/common';

import { DatabaseCommandModule } from 'src/database/commands/database-command.module';
import { FetchWorkspaceMessagesCommandsModule } from 'src/apps/messaging/commands/fetch-workspace-messages-commands.module';
import { WorkspaceHealthCommandModule } from 'src/engine/workspace-manager/workspace-health/commands/workspace-health-command.module';
import { WorkspaceCleanerModule } from 'src/engine/workspace-manager/workspace-cleaner/workspace-cleaner.module';
import { WorkspaceCalendarSyncCommandsModule } from 'src/apps/calendar/commands/workspace-calendar-sync-commands.module';
import { MainModule } from 'src/main.module';
import { WorkspaceMigrationRunnerCommandsModule } from 'src/engine/workspace-manager/workspace-migration-runner/commands/workspace-sync-metadata-commands.module';
import { WorkspaceSyncMetadataCommandsModule } from 'src/engine/workspace-manager/workspace-sync-metadata/commands/workspace-sync-metadata-commands.module';

@Module({
  imports: [
    MainModule,
    WorkspaceSyncMetadataCommandsModule,
    DatabaseCommandModule,
    FetchWorkspaceMessagesCommandsModule,
    WorkspaceCalendarSyncCommandsModule,
    WorkspaceCleanerModule,
    WorkspaceHealthCommandModule,
    WorkspaceMigrationRunnerCommandsModule,
  ],
})
export class CommandModule {}
