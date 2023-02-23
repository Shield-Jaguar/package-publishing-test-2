/**
 * PackagePublishing.WebLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  boolean,
  lazy,
  nullable,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import {
  ConfigurationsPhpCommonPhpAuthorDto,
  configurationsPhpCommonPhpAuthorDtoSchema,
} from './configurationsPhpCommonPhpAuthorDto';
import {
  ConfigurationsPhpCommonPhpSupportDto,
  configurationsPhpCommonPhpSupportDtoSchema,
} from './configurationsPhpCommonPhpSupportDto';

export interface PhpConfigurationItem {
  isEnabled?: boolean;
  credentialsId?: string;
  repositoryUrl?: string;
  vendorName?: string;
  projectName?: string;
  description?: string;
  type?: string | null;
  keywords?: string[];
  homepage?: string | null;
  readme?: string | null;
  license?: string[];
  authors?: ConfigurationsPhpCommonPhpAuthorDto[];
  support?: ConfigurationsPhpCommonPhpSupportDto;
  releaseNotes?: string | null;
}

export const phpConfigurationItemSchema: Schema<PhpConfigurationItem> = object({
  isEnabled: ['isEnabled', optional(boolean())],
  credentialsId: ['credentialsId', optional(string())],
  repositoryUrl: ['repositoryUrl', optional(string())],
  vendorName: ['vendorName', optional(string())],
  projectName: ['projectName', optional(string())],
  description: ['description', optional(string())],
  type: ['type', optional(nullable(string()))],
  keywords: ['keywords', optional(array(string()))],
  homepage: ['homepage', optional(nullable(string()))],
  readme: ['readme', optional(nullable(string()))],
  license: ['license', optional(array(string()))],
  authors: [
    'authors',
    optional(array(lazy(() => configurationsPhpCommonPhpAuthorDtoSchema))),
  ],
  support: [
    'support',
    optional(lazy(() => configurationsPhpCommonPhpSupportDtoSchema)),
  ],
  releaseNotes: ['releaseNotes', optional(nullable(string()))],
});
