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
import { MultivaluedHashMap } from './multivaluedHashMap';

export class ComponentRepresentation {
  'config'?: MultivaluedHashMap;
  'id'?: string;
  'name'?: string;
  'parentId'?: string;
  'providerId'?: string;
  'providerType'?: string;
  'subType'?: string;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: 'config',
      baseName: 'config',
      type: 'MultivaluedHashMap',
    },
    {
      name: 'id',
      baseName: 'id',
      type: 'string',
    },
    {
      name: 'name',
      baseName: 'name',
      type: 'string',
    },
    {
      name: 'parentId',
      baseName: 'parentId',
      type: 'string',
    },
    {
      name: 'providerId',
      baseName: 'providerId',
      type: 'string',
    },
    {
      name: 'providerType',
      baseName: 'providerType',
      type: 'string',
    },
    {
      name: 'subType',
      baseName: 'subType',
      type: 'string',
    },
  ];

  static getAttributeTypeMap() {
    return ComponentRepresentation.attributeTypeMap;
  }
}