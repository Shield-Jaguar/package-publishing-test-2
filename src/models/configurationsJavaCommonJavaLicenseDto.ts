/**
 * PackagePublishing.WebLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { nullable, object, optional, Schema, string } from '../schema';

export interface ConfigurationsJavaCommonJavaLicenseDto {
  name?: string;
  url?: string;
  distribution?: string | null;
}

export const configurationsJavaCommonJavaLicenseDtoSchema: Schema<ConfigurationsJavaCommonJavaLicenseDto> = object(
  {
    name: ['name', optional(string())],
    url: ['url', optional(string())],
    distribution: ['distribution', optional(nullable(string()))],
  }
);
