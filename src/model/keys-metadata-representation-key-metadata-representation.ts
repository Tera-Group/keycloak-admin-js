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
 * @interface KeysMetadataRepresentationKeyMetadataRepresentation
 */
export interface KeysMetadataRepresentationKeyMetadataRepresentation {
  /**
   *
   * @type {string}
   * @memberof KeysMetadataRepresentationKeyMetadataRepresentation
   */
  algorithm?: string;
  /**
   *
   * @type {string}
   * @memberof KeysMetadataRepresentationKeyMetadataRepresentation
   */
  certificate?: string;
  /**
   *
   * @type {string}
   * @memberof KeysMetadataRepresentationKeyMetadataRepresentation
   */
  kid?: string;
  /**
   *
   * @type {string}
   * @memberof KeysMetadataRepresentationKeyMetadataRepresentation
   */
  providerId?: string;
  /**
   *
   * @type {number}
   * @memberof KeysMetadataRepresentationKeyMetadataRepresentation
   */
  providerPriority?: number;
  /**
   *
   * @type {string}
   * @memberof KeysMetadataRepresentationKeyMetadataRepresentation
   */
  publicKey?: string;
  /**
   *
   * @type {string}
   * @memberof KeysMetadataRepresentationKeyMetadataRepresentation
   */
  status?: string;
  /**
   *
   * @type {string}
   * @memberof KeysMetadataRepresentationKeyMetadataRepresentation
   */
  type?: string;
  /**
   *
   * @type {string}
   * @memberof KeysMetadataRepresentationKeyMetadataRepresentation
   */
  use?: KeysMetadataRepresentationKeyMetadataRepresentationUseEnum;
}

export const KeysMetadataRepresentationKeyMetadataRepresentationUseEnum = {
  Sig: 'SIG',
  Enc: 'ENC',
} as const;

export type KeysMetadataRepresentationKeyMetadataRepresentationUseEnum =
  (typeof KeysMetadataRepresentationKeyMetadataRepresentationUseEnum)[keyof typeof KeysMetadataRepresentationKeyMetadataRepresentationUseEnum];
