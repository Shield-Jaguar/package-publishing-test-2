/**
 * PackagePublishing.WebLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for LanguageEnum
 */
export enum LanguageEnum {
  CSharp = 'CSharp',
  Go = 'Go',
  Java = 'Java',
  Php = 'Php',
  Python = 'Python',
  Ruby = 'Ruby',
  Swift = 'Swift',
  TypeScript = 'TypeScript',
}

/**
 * Schema for LanguageEnum
 */
export const languageEnumSchema: Schema<LanguageEnum> = stringEnum(LanguageEnum);