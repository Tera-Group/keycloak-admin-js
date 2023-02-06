/* tslint:disable */
/* eslint-disable */
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

// May contain unused imports in some cases
// @ts-ignore
import { MultivaluedHashMap } from './multivalued-hash-map';

/**
 *
 * @export
 * @interface ComponentExportRepresentation
 */
export interface ComponentExportRepresentation {
  /**
   *
   * @type {MultivaluedHashMap}
   * @memberof ComponentExportRepresentation
   */
  config?: MultivaluedHashMap;
  /**
   *
   * @type {string}
   * @memberof ComponentExportRepresentation
   */
  id?: string;
  /**
   *
   * @type {string}
   * @memberof ComponentExportRepresentation
   */
  name?: string;
  /**
   *
   * @type {string}
   * @memberof ComponentExportRepresentation
   */
  providerId?: string;
  /**
   *
   * @type {MultivaluedHashMap}
   * @memberof ComponentExportRepresentation
   */
  subComponents?: MultivaluedHashMap;
  /**
   *
   * @type {string}
   * @memberof ComponentExportRepresentation
   */
  subType?: string;
}
