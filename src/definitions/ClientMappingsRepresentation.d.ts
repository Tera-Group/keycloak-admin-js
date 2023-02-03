/* eslint-disable */
/**
 * This file was automatically generated by `npm run gendef`.
 * DO NOT MODIFY IT BY HAND. Instead, update the script gendef within package.json,
 * and run `npm run gendef` to regenerate this file.
 */

export interface ClientMappingsRepresentation {
  client?: string;
  id?: string;
  mappings?: RoleRepresentation[];
}
export interface RoleRepresentation {
  attributes?: {
    [k: string]: string;
  };
  clientRole?: boolean;
  composite?: boolean;
  composites?: RoleRepresentationComposites;
  containerId?: string;
  description?: string;
  id?: string;
  name?: string;
}
export interface RoleRepresentationComposites {
  client?: {
    [k: string]: string;
  };
  realm?: string[];
}
