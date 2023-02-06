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

import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// URLSearchParams not necessarily used
// @ts-ignore
import { URL, URLSearchParams } from 'url';
// Some imports not used depending on template conditions
// @ts-ignore
import {
  DUMMY_BASE_URL,
  assertParamExists,
  setApiKeyToObject,
  setBasicAuthToObject,
  setBearerAuthToObject,
  setOAuthToObject,
  setSearchParams,
  serializeDataIfNeeded,
  toPathString,
  createRequestFunction,
} from '../common';
// @ts-ignore
import {
  BASE_PATH,
  COLLECTION_FORMATS,
  RequestArgs,
  BaseAPI,
  RequiredError,
} from '../base';
// @ts-ignore
import { KeysMetadataRepresentation } from '../model';
/**
 * KeyApi - axios parameter creator
 * @export
 */
export const KeyApiAxiosParamCreator = function (
  configuration?: Configuration
) {
  return {
    /**
     *
     * @param {string} realm realm name (not id!)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    realmKeysGet: async (
      realm: string,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'realm' is not null or undefined
      assertParamExists('realmKeysGet', 'realm', realm);
      const localVarPath = `/{realm}/keys`.replace(
        `{${'realm'}}`,
        encodeURIComponent(String(realm))
      );
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'GET',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication access_token required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
  };
};

/**
 * KeyApi - functional programming interface
 * @export
 */
export const KeyApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = KeyApiAxiosParamCreator(configuration);
  return {
    /**
     *
     * @param {string} realm realm name (not id!)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async realmKeysGet(
      realm: string,
      options?: AxiosRequestConfig
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<KeysMetadataRepresentation>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.realmKeysGet(
        realm,
        options
      );
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
  };
};

/**
 * KeyApi - factory interface
 * @export
 */
export const KeyApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  const localVarFp = KeyApiFp(configuration);
  return {
    /**
     *
     * @param {string} realm realm name (not id!)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    realmKeysGet(
      realm: string,
      options?: any
    ): AxiosPromise<KeysMetadataRepresentation> {
      return localVarFp
        .realmKeysGet(realm, options)
        .then((request) => request(axios, basePath));
    },
  };
};

/**
 * KeyApi - object-oriented interface
 * @export
 * @class KeyApi
 * @extends {BaseAPI}
 */
export class KeyApi extends BaseAPI {
  /**
   *
   * @param {string} realm realm name (not id!)
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof KeyApi
   */
  public realmKeysGet(realm: string, options?: AxiosRequestConfig) {
    return KeyApiFp(this.configuration)
      .realmKeysGet(realm, options)
      .then((request) => request(this.axios, this.basePath));
  }
}
