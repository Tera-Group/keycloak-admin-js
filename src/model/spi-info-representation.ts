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
 * @interface SpiInfoRepresentation
 */
export interface SpiInfoRepresentation {
  /**
   *
   * @type {boolean}
   * @memberof SpiInfoRepresentation
   */
  internal?: boolean;
  /**
   *
   * @type {{ [key: string]: any; }}
   * @memberof SpiInfoRepresentation
   */
  providers?: { [key: string]: any };
}