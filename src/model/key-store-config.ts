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
 * @interface KeyStoreConfig
 */
export interface KeyStoreConfig {
  /**
   *
   * @type {string}
   * @memberof KeyStoreConfig
   */
  format?: string;
  /**
   *
   * @type {string}
   * @memberof KeyStoreConfig
   */
  keyAlias?: string;
  /**
   *
   * @type {string}
   * @memberof KeyStoreConfig
   */
  keyPassword?: string;
  /**
   *
   * @type {string}
   * @memberof KeyStoreConfig
   */
  realmAlias?: string;
  /**
   *
   * @type {boolean}
   * @memberof KeyStoreConfig
   */
  realmCertificate?: boolean;
  /**
   *
   * @type {string}
   * @memberof KeyStoreConfig
   */
  storePassword?: string;
}