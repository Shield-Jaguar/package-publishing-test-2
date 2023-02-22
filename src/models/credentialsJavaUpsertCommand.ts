/**
 * PackagePublishing.WebLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

export interface CredentialsJavaUpsertCommand {
  name?: string;
  ossrhUsername?: string;
  ossrhPassword?: string;
  gpgPassphrase?: string;
  gpgPrivateKey?: string;
}

export const credentialsJavaUpsertCommandSchema: Schema<CredentialsJavaUpsertCommand> = object(
  {
    name: ['name', optional(string())],
    ossrhUsername: ['ossrhUsername', optional(string())],
    ossrhPassword: ['ossrhPassword', optional(string())],
    gpgPassphrase: ['gpgPassphrase', optional(string())],
    gpgPrivateKey: ['gpgPrivateKey', optional(string())],
  }
);