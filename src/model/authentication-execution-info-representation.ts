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
 * @interface AuthenticationExecutionInfoRepresentation
 */
export interface AuthenticationExecutionInfoRepresentation {
  /**
   *
   * @type {string}
   * @memberof AuthenticationExecutionInfoRepresentation
   */
  alias?: string;
  /**
   *
   * @type {string}
   * @memberof AuthenticationExecutionInfoRepresentation
   */
  authenticationConfig?: string;
  /**
   *
   * @type {boolean}
   * @memberof AuthenticationExecutionInfoRepresentation
   */
  authenticationFlow?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof AuthenticationExecutionInfoRepresentation
   */
  configurable?: boolean;
  /**
   *
   * @type {string}
   * @memberof AuthenticationExecutionInfoRepresentation
   */
  description?: string;
  /**
   *
   * @type {string}
   * @memberof AuthenticationExecutionInfoRepresentation
   */
  displayName?: string;
  /**
   *
   * @type {string}
   * @memberof AuthenticationExecutionInfoRepresentation
   */
  flowId?: string;
  /**
   *
   * @type {string}
   * @memberof AuthenticationExecutionInfoRepresentation
   */
  id?: string;
  /**
   *
   * @type {number}
   * @memberof AuthenticationExecutionInfoRepresentation
   */
  index?: number;
  /**
   *
   * @type {number}
   * @memberof AuthenticationExecutionInfoRepresentation
   */
  level?: number;
  /**
   *
   * @type {string}
   * @memberof AuthenticationExecutionInfoRepresentation
   */
  providerId?: string;
  /**
   *
   * @type {string}
   * @memberof AuthenticationExecutionInfoRepresentation
   */
  requirement?: string;
  /**
   *
   * @type {Array<string>}
   * @memberof AuthenticationExecutionInfoRepresentation
   */
  requirementChoices?: Array<string>;
}