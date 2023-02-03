/**
 * Keycloak Admin REST API
 * This is a REST API reference for the Keycloak Admin REST API.
 *
 * The version of the OpenAPI document: 1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

export class ConfigPropertyRepresentation {
  'defaultValue'?: object;
  'helpText'?: string;
  'label'?: string;
  'name'?: string;
  'options'?: Array<string>;
  'readOnly'?: boolean;
  'secret'?: boolean;
  'type'?: string;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: 'defaultValue',
      baseName: 'defaultValue',
      type: 'object',
    },
    {
      name: 'helpText',
      baseName: 'helpText',
      type: 'string',
    },
    {
      name: 'label',
      baseName: 'label',
      type: 'string',
    },
    {
      name: 'name',
      baseName: 'name',
      type: 'string',
    },
    {
      name: 'options',
      baseName: 'options',
      type: 'Array<string>',
    },
    {
      name: 'readOnly',
      baseName: 'readOnly',
      type: 'boolean',
    },
    {
      name: 'secret',
      baseName: 'secret',
      type: 'boolean',
    },
    {
      name: 'type',
      baseName: 'type',
      type: 'string',
    },
  ];

  static getAttributeTypeMap() {
    return ConfigPropertyRepresentation.attributeTypeMap;
  }
}