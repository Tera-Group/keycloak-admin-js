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
/**
 * AttackDetectionApi - axios parameter creator
 * @export
 */
export const AttackDetectionApiAxiosParamCreator = function (
  configuration?: Configuration
) {
  return {
    /**
     *
     * @summary Clear any user login failures for all users   This can release temporary disabled users
     * @param {string} realm realm name (not id!)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    realmAttackDetectionBruteForceUsersDelete: async (
      realm: string,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'realm' is not null or undefined
      assertParamExists(
        'realmAttackDetectionBruteForceUsersDelete',
        'realm',
        realm
      );
      const localVarPath =
        `/{realm}/attack-detection/brute-force/users`.replace(
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
        method: 'DELETE',
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
    /**
     *
     * @summary Clear any user login failures for the user   This can release temporary disabled user
     * @param {string} realm realm name (not id!)
     * @param {string} userId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    realmAttackDetectionBruteForceUsersUserIdDelete: async (
      realm: string,
      userId: string,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'realm' is not null or undefined
      assertParamExists(
        'realmAttackDetectionBruteForceUsersUserIdDelete',
        'realm',
        realm
      );
      // verify required parameter 'userId' is not null or undefined
      assertParamExists(
        'realmAttackDetectionBruteForceUsersUserIdDelete',
        'userId',
        userId
      );
      const localVarPath =
        `/{realm}/attack-detection/brute-force/users/{userId}`
          .replace(`{${'realm'}}`, encodeURIComponent(String(realm)))
          .replace(`{${'userId'}}`, encodeURIComponent(String(userId)));
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'DELETE',
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
    /**
     *
     * @summary Get status of a username in brute force detection
     * @param {string} realm realm name (not id!)
     * @param {string} userId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    realmAttackDetectionBruteForceUsersUserIdGet: async (
      realm: string,
      userId: string,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'realm' is not null or undefined
      assertParamExists(
        'realmAttackDetectionBruteForceUsersUserIdGet',
        'realm',
        realm
      );
      // verify required parameter 'userId' is not null or undefined
      assertParamExists(
        'realmAttackDetectionBruteForceUsersUserIdGet',
        'userId',
        userId
      );
      const localVarPath =
        `/{realm}/attack-detection/brute-force/users/{userId}`
          .replace(`{${'realm'}}`, encodeURIComponent(String(realm)))
          .replace(`{${'userId'}}`, encodeURIComponent(String(userId)));
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
 * AttackDetectionApi - functional programming interface
 * @export
 */
export const AttackDetectionApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator =
    AttackDetectionApiAxiosParamCreator(configuration);
  return {
    /**
     *
     * @summary Clear any user login failures for all users   This can release temporary disabled users
     * @param {string} realm realm name (not id!)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async realmAttackDetectionBruteForceUsersDelete(
      realm: string,
      options?: AxiosRequestConfig
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.realmAttackDetectionBruteForceUsersDelete(
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
    /**
     *
     * @summary Clear any user login failures for the user   This can release temporary disabled user
     * @param {string} realm realm name (not id!)
     * @param {string} userId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async realmAttackDetectionBruteForceUsersUserIdDelete(
      realm: string,
      userId: string,
      options?: AxiosRequestConfig
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.realmAttackDetectionBruteForceUsersUserIdDelete(
          realm,
          userId,
          options
        );
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     *
     * @summary Get status of a username in brute force detection
     * @param {string} realm realm name (not id!)
     * @param {string} userId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async realmAttackDetectionBruteForceUsersUserIdGet(
      realm: string,
      userId: string,
      options?: AxiosRequestConfig
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<{ [key: string]: any }>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.realmAttackDetectionBruteForceUsersUserIdGet(
          realm,
          userId,
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
 * AttackDetectionApi - factory interface
 * @export
 */
export const AttackDetectionApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  const localVarFp = AttackDetectionApiFp(configuration);
  return {
    /**
     *
     * @summary Clear any user login failures for all users   This can release temporary disabled users
     * @param {string} realm realm name (not id!)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    realmAttackDetectionBruteForceUsersDelete(
      realm: string,
      options?: any
    ): AxiosPromise<void> {
      return localVarFp
        .realmAttackDetectionBruteForceUsersDelete(realm, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Clear any user login failures for the user   This can release temporary disabled user
     * @param {string} realm realm name (not id!)
     * @param {string} userId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    realmAttackDetectionBruteForceUsersUserIdDelete(
      realm: string,
      userId: string,
      options?: any
    ): AxiosPromise<void> {
      return localVarFp
        .realmAttackDetectionBruteForceUsersUserIdDelete(realm, userId, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Get status of a username in brute force detection
     * @param {string} realm realm name (not id!)
     * @param {string} userId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    realmAttackDetectionBruteForceUsersUserIdGet(
      realm: string,
      userId: string,
      options?: any
    ): AxiosPromise<{ [key: string]: any }> {
      return localVarFp
        .realmAttackDetectionBruteForceUsersUserIdGet(realm, userId, options)
        .then((request) => request(axios, basePath));
    },
  };
};

/**
 * AttackDetectionApi - object-oriented interface
 * @export
 * @class AttackDetectionApi
 * @extends {BaseAPI}
 */
export class AttackDetectionApi extends BaseAPI {
  /**
   *
   * @summary Clear any user login failures for all users   This can release temporary disabled users
   * @param {string} realm realm name (not id!)
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AttackDetectionApi
   */
  public realmAttackDetectionBruteForceUsersDelete(
    realm: string,
    options?: AxiosRequestConfig
  ) {
    return AttackDetectionApiFp(this.configuration)
      .realmAttackDetectionBruteForceUsersDelete(realm, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @summary Clear any user login failures for the user   This can release temporary disabled user
   * @param {string} realm realm name (not id!)
   * @param {string} userId
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AttackDetectionApi
   */
  public realmAttackDetectionBruteForceUsersUserIdDelete(
    realm: string,
    userId: string,
    options?: AxiosRequestConfig
  ) {
    return AttackDetectionApiFp(this.configuration)
      .realmAttackDetectionBruteForceUsersUserIdDelete(realm, userId, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @summary Get status of a username in brute force detection
   * @param {string} realm realm name (not id!)
   * @param {string} userId
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AttackDetectionApi
   */
  public realmAttackDetectionBruteForceUsersUserIdGet(
    realm: string,
    userId: string,
    options?: AxiosRequestConfig
  ) {
    return AttackDetectionApiFp(this.configuration)
      .realmAttackDetectionBruteForceUsersUserIdGet(realm, userId, options)
      .then((request) => request(this.axios, this.basePath));
  }
}
