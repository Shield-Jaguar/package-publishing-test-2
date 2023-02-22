/**
 * PackagePublishing.WebLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  boolean,
  dict,
  nullable,
  object,
  optional,
  Schema,
  string,
} from '../schema';

export interface ConfigurationsRubyUpsertCommand {
  isEnabled?: boolean;
  credentialsId?: string;
  name?: string;
  authors?: string[];
  summary?: string;
  description?: string | null;
  email?: string[];
  homepage?: string | null;
  licenses?: string[];
  metadata?: Record<string, string>;
  postInstallMessage?: string | null;
  requirements?: string[];
}

export const configurationsRubyUpsertCommandSchema: Schema<ConfigurationsRubyUpsertCommand> = object(
  {
    isEnabled: ['isEnabled', optional(boolean())],
    credentialsId: ['credentialsId', optional(string())],
    name: ['name', optional(string())],
    authors: ['authors', optional(array(string()))],
    summary: ['summary', optional(string())],
    description: ['description', optional(nullable(string()))],
    email: ['email', optional(array(string()))],
    homepage: ['homepage', optional(nullable(string()))],
    licenses: ['licenses', optional(array(string()))],
    metadata: ['metadata', optional(dict(string()))],
    postInstallMessage: ['postInstallMessage', optional(nullable(string()))],
    requirements: ['requirements', optional(array(string()))],
  }
);
