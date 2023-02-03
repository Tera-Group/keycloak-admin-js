/* eslint-disable */
/**
 * This file was automatically generated by `npm run gendef`.
 * DO NOT MODIFY IT BY HAND. Instead, update the script gendef within package.json,
 * and run `npm run gendef` to regenerate this file.
 */

export interface AuthenticationFlowRepresentation {
  alias?: string;
  authenticationExecutions?: AuthenticationExecutionExportRepresentation[];
  builtIn?: boolean;
  description?: string;
  id?: string;
  providerId?: string;
  topLevel?: boolean;
}
export interface AuthenticationExecutionExportRepresentation {
  authenticator?: string;
  authenticatorConfig?: string;
  authenticatorFlow?: boolean;
  flowAlias?: string;
  priority?: number;
  requirement?: string;
  userSetupAllowed?: boolean;
}
