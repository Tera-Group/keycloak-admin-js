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
import { RoleRepresentation } from './roleRepresentation';

export class MappingsRepresentation {
  'clientMappings'?: { [key: string]: any };
  'realmMappings'?: Array<RoleRepresentation>;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: 'clientMappings',
      baseName: 'clientMappings',
      type: '{ [key: string]: any; }',
    },
    {
      name: 'realmMappings',
      baseName: 'realmMappings',
      type: 'Array<RoleRepresentation>',
    },
  ];

  static getAttributeTypeMap() {
    return MappingsRepresentation.attributeTypeMap;
  }
}