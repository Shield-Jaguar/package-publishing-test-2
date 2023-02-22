/**
 * PackagePublishing.WebLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  boolean,
  dict,
  lazy,
  nullable,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import {
  ConfigurationsPythonCommonPythonLicenseDto,
  configurationsPythonCommonPythonLicenseDtoSchema,
} from './configurationsPythonCommonPythonLicenseDto';
import {
  ConfigurationsPythonCommonPythonPersonDto,
  configurationsPythonCommonPythonPersonDtoSchema,
} from './configurationsPythonCommonPythonPersonDto';

export interface ConfigurationsPythonUpsertCommand {
  isEnabled?: boolean;
  credentialsId?: string;
  name?: string;
  description?: string | null;
  readme?: string | null;
  license?: ConfigurationsPythonCommonPythonLicenseDto;
  authors?: ConfigurationsPythonCommonPythonPersonDto[];
  maintainers?: ConfigurationsPythonCommonPythonPersonDto[];
  keywords?: string[];
  classifiers?: string[];
  urls?: Record<string, string>;
}

export const configurationsPythonUpsertCommandSchema: Schema<ConfigurationsPythonUpsertCommand> = object(
  {
    isEnabled: ['isEnabled', optional(boolean())],
    credentialsId: ['credentialsId', optional(string())],
    name: ['name', optional(string())],
    description: ['description', optional(nullable(string()))],
    readme: ['readme', optional(nullable(string()))],
    license: [
      'license',
      optional(lazy(() => configurationsPythonCommonPythonLicenseDtoSchema)),
    ],
    authors: [
      'authors',
      optional(
        array(lazy(() => configurationsPythonCommonPythonPersonDtoSchema))
      ),
    ],
    maintainers: [
      'maintainers',
      optional(
        array(lazy(() => configurationsPythonCommonPythonPersonDtoSchema))
      ),
    ],
    keywords: ['keywords', optional(array(string()))],
    classifiers: ['classifiers', optional(array(string()))],
    urls: ['urls', optional(dict(string()))],
  }
);
