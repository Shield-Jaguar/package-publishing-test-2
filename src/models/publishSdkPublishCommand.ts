/**
 * PackagePublishing.WebLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { dict, object, optional, Schema, string } from '../schema';

export interface PublishSdkPublishCommand {
  apiEntityId?: string;
  languageVersions?: Record<string, string>;
}

export const publishSdkPublishCommandSchema: Schema<PublishSdkPublishCommand> = object(
  {
    apiEntityId: ['apiEntityId', optional(string())],
    languageVersions: ['languageVersions', optional(dict(string()))],
  }
);