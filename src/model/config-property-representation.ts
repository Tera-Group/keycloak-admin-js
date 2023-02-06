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
 * @interface ConfigPropertyRepresentation
 */
export interface ConfigPropertyRepresentation {
  /**
   *
   * @type {object}
   * @memberof ConfigPropertyRepresentation
   */
  defaultValue?: object;
  /**
   *
   * @type {string}
   * @memberof ConfigPropertyRepresentation
   */
  helpText?: string;
  /**
   *
   * @type {string}
   * @memberof ConfigPropertyRepresentation
   */
  label?: string;
  /**
   *
   * @type {string}
   * @memberof ConfigPropertyRepresentation
   */
  name?: string;
  /**
   *
   * @type {Array<string>}
   * @memberof ConfigPropertyRepresentation
   */
  options?: Array<string>;
  /**
   *
   * @type {boolean}
   * @memberof ConfigPropertyRepresentation
   */
  readOnly?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof ConfigPropertyRepresentation
   */
  secret?: boolean;
  /**
   *
   * @type {string}
   * @memberof ConfigPropertyRepresentation
   */
  type?: string;
}