import type * as types from './types';
import type { ConfigOptions, FetchResponse } from 'api/dist/core';
import Oas from 'oas';
import APICore from 'api/dist/core';
declare class SDK {
    spec: Oas;
    core: APICore;
    constructor();
    /**
     * Optionally configure various options that the SDK allows.
     *
     * @param config Object of supported SDK options and toggles.
     * @param config.timeout Override the default `fetch` request timeout of 30 seconds. This number
     * should be represented in milliseconds.
     */
    config(config: ConfigOptions): void;
    /**
     * If the API you're using requires authentication you can supply the required credentials
     * through this method and the library will magically determine how they should be used
     * within your API request.
     *
     * With the exception of OpenID and MutualTLS, it supports all forms of authentication
     * supported by the OpenAPI specification.
     *
     * @example <caption>HTTP Basic auth</caption>
     * sdk.auth('username', 'password');
     *
     * @example <caption>Bearer tokens (HTTP or OAuth 2)</caption>
     * sdk.auth('myBearerToken');
     *
     * @example <caption>API Keys</caption>
     * sdk.auth('myApiKey');
     *
     * @see {@link https://spec.openapis.org/oas/v3.0.3#fixed-fields-22}
     * @see {@link https://spec.openapis.org/oas/v3.1.0#fixed-fields-22}
     * @param values Your auth credentials for the API; can specify up to two strings or numbers.
     */
    auth(...values: string[] | number[]): this;
    /**
     * If the API you're using offers alternate server URLs, and server variables, you can tell
     * the SDK which one to use with this method. To use it you can supply either one of the
     * server URLs that are contained within the OpenAPI definition (along with any server
     * variables), or you can pass it a fully qualified URL to use (that may or may not exist
     * within the OpenAPI definition).
     *
     * @example <caption>Server URL with server variables</caption>
     * sdk.server('https://{region}.api.example.com/{basePath}', {
     *   name: 'eu',
     *   basePath: 'v14',
     * });
     *
     * @example <caption>Fully qualified server URL</caption>
     * sdk.server('https://eu.api.example.com/v14');
     *
     * @param url Server URL
     * @param variables An object of variables to replace into the server URL.
     */
    server(url: string, variables?: {}): void;
    /**
     * Get block activities
     *
     * @summary Get block activities
     */
    getV2OrdBtcBlockActivities(metadata: types.GetV2OrdBtcBlockActivitiesMetadataParam): Promise<FetchResponse<200, types.GetV2OrdBtcBlockActivitiesResponse200>>;
    /**
     * Get collection
     *
     * @summary Get collection
     */
    getCollection(metadata: types.GetCollectionMetadataParam): Promise<FetchResponse<200, types.GetCollectionResponse200>>;
    /**
     * Get collection stats
     *
     * @summary Get collection stats
     */
    getV2OrdBtcStat(metadata: types.GetV2OrdBtcStatMetadataParam): Promise<FetchResponse<200, types.GetV2OrdBtcStatResponse200>>;
    /**
     * Get popular collection stats
     *
     * @summary Get popular collection stats
     */
    getPopularCollectionStats(metadata: types.GetPopularCollectionStatsMetadataParam): Promise<FetchResponse<200, types.GetPopularCollectionStatsResponse200>>;
    /**
     * Get collection statistics
     *
     * @summary Get collection statistics
     */
    getCollectionStats(metadata?: types.GetCollectionStatsMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Get activities. Can be filtered by collectionSymbol, kind, tokenId, ownerAddress. By
     * default, sort by createdAt desc
     *
     * @summary Get activities
     */
    getActivities(metadata?: types.GetActivitiesMetadataParam): Promise<FetchResponse<200, types.GetActivitiesResponse200>>;
    /**
     * Get activities. Optional cursor and limit parameters
     *
     * @summary Get all activities, not dependent on collection
     */
    getActivitiesTrades(metadata?: types.GetActivitiesTradesMetadataParam): Promise<FetchResponse<200, types.GetActivitiesTradesResponse200>>;
    /**
     * Get tokens, can be filtered by collectionSymbol, owner, tokenIds
     *
     * @summary Get tokens
     */
    getTokens(metadata?: types.GetTokensMetadataParam): Promise<FetchResponse<200, types.GetTokensResponse200>>;
    /**
     * Get Rare Sats Listings by a Variety of Filters and Sorting Orders
     *
     * @summary Get Listings
     */
    getV2OrdBtcRaresatsListings(metadata?: types.GetV2OrdBtcRaresatsListingsMetadataParam): Promise<FetchResponse<200, types.GetV2OrdBtcRaresatsListingsResponse200>>;
    /**
     * Get Rare Sats by Address
     *
     * @summary Get Rare Sats by Address
     */
    getV2OrdBtcRaresatsWalletUtxos(metadata: types.GetV2OrdBtcRaresatsWalletUtxosMetadataParam): Promise<FetchResponse<200, types.GetV2OrdBtcRaresatsWalletUtxosResponse200>>;
    /**
     * Get Rare Sats Batch Listing PSBT for Signing
     *
     * @summary Get Batch Listing PSBT
     */
    postV2OrdBtcRaresatsListingPsbt(body: types.PostV2OrdBtcRaresatsListingPsbtBodyParam): Promise<FetchResponse<200, types.PostV2OrdBtcRaresatsListingPsbtResponse200>>;
    /**
     * Submit Batch Listing using the signed PSBT received from `GET /listing-psbt`
     *
     * @summary Submit Batch Listing
     */
    postV2OrdBtcRaresatsListing(body: types.PostV2OrdBtcRaresatsListingBodyParam): Promise<FetchResponse<200, types.PostV2OrdBtcRaresatsListingResponse200>>;
    /**
     * Get an unsigned PSBT for creating a rune sell order
     *
     * @summary Get an unsigned PSBT for creating a rune sell order
     */
    postV2OrdBtcRunesPsbtOrderCreate(body: types.PostV2OrdBtcRunesPsbtOrderCreateBodyParam): Promise<FetchResponse<200, types.PostV2OrdBtcRunesPsbtOrderCreateResponse200>>;
    /**
     * Submit a signed PSBT for creating a rune sell order
     *
     * @summary Submit a signed PSBT for creating a rune sell order
     */
    postV2OrdBtcRunesOrderCreate(body: types.PostV2OrdBtcRunesOrderCreateBodyParam): Promise<FetchResponse<200, types.PostV2OrdBtcRunesOrderCreateResponse200>>;
    /**
     * Get an unsigned message for cancelling a rune sell order
     *
     * @summary Get an unsigned message for cancelling a rune sell order
     */
    postV2OrdBtcRunesPsbtOrderCancel(body: types.PostV2OrdBtcRunesPsbtOrderCancelBodyParam): Promise<FetchResponse<200, types.PostV2OrdBtcRunesPsbtOrderCancelResponse200>>;
    /**
     * Submit a signed message for cancelling a rune sell order
     *
     * @summary Submit a signed message for cancelling a rune sell order
     */
    postV2OrdBtcRunesOrderCancel(body: types.PostV2OrdBtcRunesOrderCancelBodyParam): Promise<FetchResponse<200, types.PostV2OrdBtcRunesOrderCancelResponse200>>;
    /**
     * Get market market info for a specific rune
     *
     * @summary Get rune market info
     */
    getV2OrdBtcRunesMarketRuneInfo(metadata: types.GetV2OrdBtcRunesMarketRuneInfoMetadataParam): Promise<FetchResponse<200, types.GetV2OrdBtcRunesMarketRuneInfoResponse200>>;
    /**
     * Get orders for a specific rune
     *
     * @summary Get orders for a specific rune
     */
    getV2OrdBtcRunesOrdersRune(metadata: types.GetV2OrdBtcRunesOrdersRuneMetadataParam): Promise<FetchResponse<200, types.GetV2OrdBtcRunesOrdersRuneResponse200>>;
    /**
     * Get rune utxos by wallet address
     *
     * @summary Get rune utxos by wallet address
     */
    getV2OrdBtcRunesUtxosWalletAddress(metadata: types.GetV2OrdBtcRunesUtxosWalletAddressMetadataParam): Promise<FetchResponse<200, types.GetV2OrdBtcRunesUtxosWalletAddressResponse200>>;
    /**
     * Get activities for a specific rune
     *
     * @summary Get activities for a specific rune
     */
    getV2OrdBtcRunesActivitiesRune(metadata: types.GetV2OrdBtcRunesActivitiesRuneMetadataParam): Promise<FetchResponse<200, types.GetV2OrdBtcRunesActivitiesRuneResponse200>>;
    /**
     * Get Rune activities for a specific wallet address
     *
     * @summary Get Rune activities for a specific wallet address
     */
    getV2OrdBtcRunesWalletActivitiesAddress(metadata: types.GetV2OrdBtcRunesWalletActivitiesAddressMetadataParam): Promise<FetchResponse<200, types.GetV2OrdBtcRunesWalletActivitiesAddressResponse200>>;
    /**
     * Get Rune balances by wallet address
     *
     * @summary Get Rune balances by wallet address
     */
    getV2OrdBtcRunesWalletBalancesAddressRune(metadata: types.GetV2OrdBtcRunesWalletBalancesAddressRuneMetadataParam): Promise<FetchResponse<200, types.GetV2OrdBtcRunesWalletBalancesAddressRuneResponse200>>;
    /**
     * Get Rune collection stats
     *
     * @summary Get Rune collection stats
     */
    getV2OrdBtcRunesCollection_statsSearch(metadata: types.GetV2OrdBtcRunesCollectionStatsSearchMetadataParam): Promise<FetchResponse<200, types.GetV2OrdBtcRunesCollectionStatsSearchResponse200>>;
}
declare const createSDK: SDK;
export = createSDK;
