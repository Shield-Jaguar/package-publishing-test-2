/**
 * PackagePublishing.WebLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { nullable, object, optional, Schema, string } from '../schema';

export interface ConfigurationsTypeScriptCommonTsPersonDto {
  name?: string | null;
  email?: string | null;
  url?: string | null;
}

export const configurationsTypeScriptCommonTsPersonDtoSchema: Schema<ConfigurationsTypeScriptCommonTsPersonDto> = object(
  {
    name: ['name', optional(nullable(string()))],
    email: ['email', optional(nullable(string()))],
    url: ['url', optional(nullable(string()))],
  }
);
