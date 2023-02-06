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
import { RoleRepresentation } from './role-representation';

/**
 *
 * @export
 * @interface RolesRepresentation
 */
export interface RolesRepresentation {
  /**
   *
   * @type {{ [key: string]: any; }}
   * @memberof RolesRepresentation
   */
  client?: { [key: string]: any };
  /**
   *
   * @type {Array<RoleRepresentation>}
   * @memberof RolesRepresentation
   */
  realm?: Array<RoleRepresentation>;
}