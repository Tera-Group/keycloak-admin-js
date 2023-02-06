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
import { ProtocolMapperRepresentation } from './protocol-mapper-representation';
// May contain unused imports in some cases
// @ts-ignore
import { ResourceServerRepresentation } from './resource-server-representation';

/**
 *
 * @export
 * @interface ClientRepresentation
 */
export interface ClientRepresentation {
  /**
   *
   * @type {{ [key: string]: any; }}
   * @memberof ClientRepresentation
   */
  access?: { [key: string]: any };
  /**
   *
   * @type {string}
   * @memberof ClientRepresentation
   */
  adminUrl?: string;
  /**
   *
   * @type {boolean}
   * @memberof ClientRepresentation
   */
  alwaysDisplayInConsole?: boolean;
  /**
   *
   * @type {{ [key: string]: any; }}
   * @memberof ClientRepresentation
   */
  attributes?: { [key: string]: any };
  /**
   *
   * @type {{ [key: string]: any; }}
   * @memberof ClientRepresentation
   */
  authenticationFlowBindingOverrides?: { [key: string]: any };
  /**
   *
   * @type {boolean}
   * @memberof ClientRepresentation
   */
  authorizationServicesEnabled?: boolean;
  /**
   *
   * @type {ResourceServerRepresentation}
   * @memberof ClientRepresentation
   */
  authorizationSettings?: ResourceServerRepresentation;
  /**
   *
   * @type {string}
   * @memberof ClientRepresentation
   */
  baseUrl?: string;
  /**
   *
   * @type {boolean}
   * @memberof ClientRepresentation
   */
  bearerOnly?: boolean;
  /**
   *
   * @type {string}
   * @memberof ClientRepresentation
   */
  clientAuthenticatorType?: string;
  /**
   *
   * @type {string}
   * @memberof ClientRepresentation
   */
  clientId?: string;
  /**
   *
   * @type {boolean}
   * @memberof ClientRepresentation
   */
  consentRequired?: boolean;
  /**
   *
   * @type {Array<string>}
   * @memberof ClientRepresentation
   */
  defaultClientScopes?: Array<string>;
  /**
   *
   * @type {string}
   * @memberof ClientRepresentation
   */
  description?: string;
  /**
   *
   * @type {boolean}
   * @memberof ClientRepresentation
   */
  directAccessGrantsEnabled?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof ClientRepresentation
   */
  enabled?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof ClientRepresentation
   */
  frontchannelLogout?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof ClientRepresentation
   */
  fullScopeAllowed?: boolean;
  /**
   *
   * @type {string}
   * @memberof ClientRepresentation
   */
  id?: string;
  /**
   *
   * @type {boolean}
   * @memberof ClientRepresentation
   */
  implicitFlowEnabled?: boolean;
  /**
   *
   * @type {string}
   * @memberof ClientRepresentation
   */
  name?: string;
  /**
   *
   * @type {number}
   * @memberof ClientRepresentation
   */
  nodeReRegistrationTimeout?: number;
  /**
   *
   * @type {number}
   * @memberof ClientRepresentation
   */
  notBefore?: number;
  /**
   *
   * @type {boolean}
   * @memberof ClientRepresentation
   */
  oauth2DeviceAuthorizationGrantEnabled?: boolean;
  /**
   *
   * @type {Array<string>}
   * @memberof ClientRepresentation
   */
  optionalClientScopes?: Array<string>;
  /**
   *
   * @type {string}
   * @memberof ClientRepresentation
   */
  origin?: string;
  /**
   *
   * @type {string}
   * @memberof ClientRepresentation
   */
  protocol?: string;
  /**
   *
   * @type {Array<ProtocolMapperRepresentation>}
   * @memberof ClientRepresentation
   */
  protocolMappers?: Array<ProtocolMapperRepresentation>;
  /**
   *
   * @type {boolean}
   * @memberof ClientRepresentation
   */
  publicClient?: boolean;
  /**
   *
   * @type {Array<string>}
   * @memberof ClientRepresentation
   */
  redirectUris?: Array<string>;
  /**
   *
   * @type {{ [key: string]: any; }}
   * @memberof ClientRepresentation
   */
  registeredNodes?: { [key: string]: any };
  /**
   *
   * @type {string}
   * @memberof ClientRepresentation
   */
  registrationAccessToken?: string;
  /**
   *
   * @type {string}
   * @memberof ClientRepresentation
   */
  rootUrl?: string;
  /**
   *
   * @type {string}
   * @memberof ClientRepresentation
   */
  secret?: string;
  /**
   *
   * @type {boolean}
   * @memberof ClientRepresentation
   */
  serviceAccountsEnabled?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof ClientRepresentation
   */
  standardFlowEnabled?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof ClientRepresentation
   */
  surrogateAuthRequired?: boolean;
  /**
   *
   * @type {Array<string>}
   * @memberof ClientRepresentation
   */
  webOrigins?: Array<string>;
}
