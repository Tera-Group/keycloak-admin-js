/* eslint-disable */
/**
 * This file was automatically generated by `npm run gendef`.
 * DO NOT MODIFY IT BY HAND. Instead, update the script gendef within package.json,
 * and run `npm run gendef` to regenerate this file.
 */

export interface KeysMetadataRepresentation {
  active?: {
    [k: string]: string;
  };
  keys?: KeysMetadataRepresentationKeyMetadataRepresentation[];
}
export interface KeysMetadataRepresentationKeyMetadataRepresentation {
  algorithm?: string;
  certificate?: string;
  kid?: string;
  providerId?: string;
  providerPriority?: number;
  publicKey?: string;
  status?: string;
  type?: string;
  use?: "SIG" | "ENC";
}
