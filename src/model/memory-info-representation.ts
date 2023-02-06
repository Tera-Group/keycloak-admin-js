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

/**
 *
 * @export
 * @interface MemoryInfoRepresentation
 */
export interface MemoryInfoRepresentation {
  /**
   *
   * @type {number}
   * @memberof MemoryInfoRepresentation
   */
  free?: number;
  /**
   *
   * @type {string}
   * @memberof MemoryInfoRepresentation
   */
  freeFormated?: string;
  /**
   *
   * @type {number}
   * @memberof MemoryInfoRepresentation
   */
  freePercentage?: number;
  /**
   *
   * @type {number}
   * @memberof MemoryInfoRepresentation
   */
  total?: number;
  /**
   *
   * @type {string}
   * @memberof MemoryInfoRepresentation
   */
  totalFormated?: string;
  /**
   *
   * @type {number}
   * @memberof MemoryInfoRepresentation
   */
  used?: number;
  /**
   *
   * @type {string}
   * @memberof MemoryInfoRepresentation
   */
  usedFormated?: string;
}
