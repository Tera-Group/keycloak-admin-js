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
 * @interface CredentialRepresentation
 */
export interface CredentialRepresentation {
  /**
   *
   * @type {number}
   * @memberof CredentialRepresentation
   */
  createdDate?: number;
  /**
   *
   * @type {string}
   * @memberof CredentialRepresentation
   */
  credentialData?: string;
  /**
   *
   * @type {string}
   * @memberof CredentialRepresentation
   */
  id?: string;
  /**
   *
   * @type {number}
   * @memberof CredentialRepresentation
   */
  priority?: number;
  /**
   *
   * @type {string}
   * @memberof CredentialRepresentation
   */
  secretData?: string;
  /**
   *
   * @type {boolean}
   * @memberof CredentialRepresentation
   */
  temporary?: boolean;
  /**
   *
   * @type {string}
   * @memberof CredentialRepresentation
   */
  type?: string;
  /**
   *
   * @type {string}
   * @memberof CredentialRepresentation
   */
  userLabel?: string;
  /**
   *
   * @type {string}
   * @memberof CredentialRepresentation
   */
  value?: string;
}
