"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var oas_1 = __importDefault(require("oas"));
var core_1 = __importDefault(require("api/dist/core"));
var openapi_json_1 = __importDefault(require("./openapi.json"));
var SDK = /** @class */ (function () {
    function SDK() {
        this.spec = oas_1.default.init(openapi_json_1.default);
        this.core = new core_1.default(this.spec, 'tallal-test/2.1.3 (api/6.1.3)');
    }
    /**
     * Optionally configure various options that the SDK allows.
     *
     * @param config Object of supported SDK options and toggles.
     * @param config.timeout Override the default `fetch` request timeout of 30 seconds. This number
     * should be represented in milliseconds.
     */
    SDK.prototype.config = function (config) {
        this.core.setConfig(config);
    };
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
    SDK.prototype.auth = function () {
        var _a;
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            values[_i] = arguments[_i];
        }
        (_a = this.core).setAuth.apply(_a, values);
        return this;
    };
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
    SDK.prototype.server = function (url, variables) {
        if (variables === void 0) { variables = {}; }
        this.core.setServer(url, variables);
    };
    /**
     * Get block activities
     *
     * @summary Get block activities
     */
    SDK.prototype.getV2OrdBtcBlockActivities = function (metadata) {
        return this.core.fetch('/v2/ord/btc/block/activities', 'get', metadata);
    };
    /**
     * Get collection
     *
     * @summary Get collection
     */
    SDK.prototype.getCollection = function (metadata) {
        return this.core.fetch('/v2/ord/btc/collections/{symbol}', 'get', metadata);
    };
    /**
     * Get collection stats
     *
     * @summary Get collection stats
     */
    SDK.prototype.getV2OrdBtcStat = function (metadata) {
        return this.core.fetch('/v2/ord/btc/stat', 'get', metadata);
    };
    /**
     * Get popular collection stats
     *
     * @summary Get popular collection stats
     */
    SDK.prototype.getPopularCollectionStats = function (metadata) {
        return this.core.fetch('/v2/ord/btc/popular_collections', 'get', metadata);
    };
    /**
     * Get collection statistics
     *
     * @summary Get collection statistics
     */
    SDK.prototype.getCollectionStats = function (metadata) {
        return this.core.fetch('/collection_stats/search/bitcoin', 'get', metadata);
    };
    /**
     * Get activities. Can be filtered by collectionSymbol, kind, tokenId, ownerAddress. By
     * default, sort by createdAt desc
     *
     * @summary Get activities
     */
    SDK.prototype.getActivities = function (metadata) {
        return this.core.fetch('/v2/ord/btc/activities', 'get', metadata);
    };
    /**
     * Get activities. Optional cursor and limit parameters
     *
     * @summary Get all activities, not dependent on collection
     */
    SDK.prototype.getActivitiesTrades = function (metadata) {
        return this.core.fetch('/v2/ord/btc/activities/trades', 'get', metadata);
    };
    /**
     * Get tokens, can be filtered by collectionSymbol, owner, tokenIds
     *
     * @summary Get tokens
     */
    SDK.prototype.getTokens = function (metadata) {
        return this.core.fetch('/v2/ord/btc/tokens', 'get', metadata);
    };
    /**
     * Get Rare Sats Listings by a Variety of Filters and Sorting Orders
     *
     * @summary Get Listings
     */
    SDK.prototype.getV2OrdBtcRaresatsListings = function (metadata) {
        return this.core.fetch('/v2/ord/btc/raresats/listings', 'get', metadata);
    };
    /**
     * Get Rare Sats by Address
     *
     * @summary Get Rare Sats by Address
     */
    SDK.prototype.getV2OrdBtcRaresatsWalletUtxos = function (metadata) {
        return this.core.fetch('/v2/ord/btc/raresats/wallet/utxos', 'get', metadata);
    };
    /**
     * Get Rare Sats Batch Listing PSBT for Signing
     *
     * @summary Get Batch Listing PSBT
     */
    SDK.prototype.postV2OrdBtcRaresatsListingPsbt = function (body) {
        return this.core.fetch('/v2/ord/btc/raresats/listing-psbt', 'post', body);
    };
    /**
     * Submit Batch Listing using the signed PSBT received from `GET /listing-psbt`
     *
     * @summary Submit Batch Listing
     */
    SDK.prototype.postV2OrdBtcRaresatsListing = function (body) {
        return this.core.fetch('/v2/ord/btc/raresats/listing', 'post', body);
    };
    /**
     * Get an unsigned PSBT for creating a rune sell order
     *
     * @summary Get an unsigned PSBT for creating a rune sell order
     */
    SDK.prototype.postV2OrdBtcRunesPsbtOrderCreate = function (body) {
        return this.core.fetch('/v2/ord/btc/runes/psbt/order/create', 'post', body);
    };
    /**
     * Submit a signed PSBT for creating a rune sell order
     *
     * @summary Submit a signed PSBT for creating a rune sell order
     */
    SDK.prototype.postV2OrdBtcRunesOrderCreate = function (body) {
        return this.core.fetch('/v2/ord/btc/runes/order/create', 'post', body);
    };
    /**
     * Get an unsigned message for cancelling a rune sell order
     *
     * @summary Get an unsigned message for cancelling a rune sell order
     */
    SDK.prototype.postV2OrdBtcRunesPsbtOrderCancel = function (body) {
        return this.core.fetch('/v2/ord/btc/runes/psbt/order/cancel', 'post', body);
    };
    /**
     * Submit a signed message for cancelling a rune sell order
     *
     * @summary Submit a signed message for cancelling a rune sell order
     */
    SDK.prototype.postV2OrdBtcRunesOrderCancel = function (body) {
        return this.core.fetch('/v2/ord/btc/runes/order/cancel', 'post', body);
    };
    /**
     * Get market market info for a specific rune
     *
     * @summary Get rune market info
     */
    SDK.prototype.getV2OrdBtcRunesMarketRuneInfo = function (metadata) {
        return this.core.fetch('/v2/ord/btc/runes/market/{rune}/info', 'get', metadata);
    };
    /**
     * Get orders for a specific rune
     *
     * @summary Get orders for a specific rune
     */
    SDK.prototype.getV2OrdBtcRunesOrdersRune = function (metadata) {
        return this.core.fetch('/v2/ord/btc/runes/orders/{rune}', 'get', metadata);
    };
    /**
     * Get rune utxos by wallet address
     *
     * @summary Get rune utxos by wallet address
     */
    SDK.prototype.getV2OrdBtcRunesUtxosWalletAddress = function (metadata) {
        return this.core.fetch('/v2/ord/btc/runes/utxos/wallet/{address}', 'get', metadata);
    };
    /**
     * Get activities for a specific rune
     *
     * @summary Get activities for a specific rune
     */
    SDK.prototype.getV2OrdBtcRunesActivitiesRune = function (metadata) {
        return this.core.fetch('/v2/ord/btc/runes/activities/{rune}', 'get', metadata);
    };
    /**
     * Get Rune activities for a specific wallet address
     *
     * @summary Get Rune activities for a specific wallet address
     */
    SDK.prototype.getV2OrdBtcRunesWalletActivitiesAddress = function (metadata) {
        return this.core.fetch('/v2/ord/btc/runes/wallet/activities/{address}', 'get', metadata);
    };
    /**
     * Get Rune balances by wallet address
     *
     * @summary Get Rune balances by wallet address
     */
    SDK.prototype.getV2OrdBtcRunesWalletBalancesAddressRune = function (metadata) {
        return this.core.fetch('/v2/ord/btc/runes/wallet/balances/{address}/{rune}', 'get', metadata);
    };
    /**
     * Get Rune collection stats
     *
     * @summary Get Rune collection stats
     */
    SDK.prototype.getV2OrdBtcRunesCollection_statsSearch = function (metadata) {
        return this.core.fetch('/v2/ord/btc/runes/collection_stats/search', 'get', metadata);
    };
    return SDK;
}());
var createSDK = (function () { return new SDK(); })();
module.exports = createSDK;
