/**
 * PackagePublishing.WebLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, object, optional, Schema, string } from '../schema';

export interface ConfigurationsSwiftUpsertCommand {
  isEnabled?: boolean;
  credentialsId?: string;
}

export const configurationsSwiftUpsertCommandSchema: Schema<ConfigurationsSwiftUpsertCommand> = object(
  {
    isEnabled: ['isEnabled', optional(boolean())],
    credentialsId: ['credentialsId', optional(string())],
  }
);
