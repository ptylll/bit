import { PathOsBased } from 'bit-bin/utils/path';
import { ExtensionDataList, ExtensionDataEntry } from 'bit-bin/consumer/config';

/**
 * An interface implemented by component host (workspace / scope) config file
 * This used to be able to abstract the workspace/scope config.
 */
export interface HostConfig {
  /**
   * Path to the actual file
   */
  path: PathOsBased;

  extensions: ExtensionDataList;

  extension: (extensionId: string, ignoreVersion: boolean) => ExtensionDataEntry;
}

export type ConfigType = 'workspace' | 'scope';