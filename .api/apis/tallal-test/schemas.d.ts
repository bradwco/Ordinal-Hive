declare const GetActivities: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly collectionSymbol: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Collection symbol";
                };
                readonly kind: {
                    readonly type: "string";
                    readonly enum: readonly ["transfer", "create", "list", "delist", "buying_broadcasted", "mint_broadcasted"];
                    readonly default: "buying_broadcasted";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Activity kind";
                };
                readonly tokenId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Token id";
                };
                readonly ownerAddress: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Owner address";
                };
                readonly limit: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Limit";
                };
                readonly offset: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Offset";
                };
                readonly inscriptionMin: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Inscription number min";
                };
                readonly inscriptionMax: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Inscription number max";
                };
                readonly satRarity: {
                    readonly type: "string";
                    readonly enum: readonly ["common", "uncommon", "rare", "epic", "legendary", "mythic"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "sat rarity";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly activities: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly kind: {
                                readonly type: "string";
                            };
                            readonly tokenId: {
                                readonly type: "string";
                            };
                            readonly chain: {
                                readonly type: "string";
                            };
                            readonly collectionSymbol: {
                                readonly type: "string";
                            };
                            readonly collection: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly chain: {
                                        readonly type: "string";
                                    };
                                    readonly imageURI: {
                                        readonly type: "string";
                                    };
                                    readonly name: {
                                        readonly type: "string";
                                    };
                                    readonly symbol: {
                                        readonly type: "string";
                                    };
                                };
                            };
                            readonly tokenInscriptionNumber: {
                                readonly type: "string";
                            };
                            readonly oldLocation: {
                                readonly type: "string";
                            };
                            readonly newLocation: {
                                readonly type: "string";
                            };
                            readonly oldOwner: {
                                readonly type: "string";
                            };
                            readonly newOwner: {
                                readonly type: "string";
                            };
                            readonly txValue: {
                                readonly type: "number";
                            };
                            readonly txId: {
                                readonly type: "string";
                            };
                            readonly listedPrice: {
                                readonly type: "number";
                            };
                            readonly txBlockNumber: {
                                readonly type: "string";
                            };
                            readonly createdAt: {
                                readonly type: "string";
                            };
                            readonly sellerPaymentReceiverAddress: {
                                readonly type: "string";
                            };
                            readonly buyerPaymentAddress: {
                                readonly type: "string";
                            };
                            readonly brc20TransferAmt: {
                                readonly type: "number";
                            };
                            readonly brc20ListedUnitPrice: {
                                readonly type: "number";
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetActivitiesTrades: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly cursor: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Cursor";
                };
                readonly limit: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Limit";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly total: {
                    readonly type: "integer";
                };
                readonly activities: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly tokenId: {
                                readonly type: "string";
                            };
                            readonly createdAt: {
                                readonly type: "string";
                            };
                            readonly listedPrice: {
                                readonly type: "integer";
                            };
                            readonly kind: {
                                readonly type: "string";
                            };
                            readonly tokenInscriptionNumber: {
                                readonly type: "integer";
                            };
                            readonly collectionSymbol: {
                                readonly type: "string";
                            };
                            readonly newOwner: {
                                readonly type: "string";
                            };
                            readonly oldOwner: {
                                readonly type: "string";
                            };
                            readonly txId: {
                                readonly type: "string";
                            };
                        };
                    };
                };
                readonly nextCursor: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetCollection: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly symbol: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Collection symbol";
                };
            };
            readonly required: readonly ["symbol"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly symbol: {
                    readonly type: "string";
                };
                readonly name: {
                    readonly type: "string";
                };
                readonly imageURI: {
                    readonly type: "string";
                };
                readonly chain: {
                    readonly type: "string";
                };
                readonly description: {
                    readonly type: "string";
                };
                readonly supply: {
                    readonly type: "integer";
                };
                readonly twitterLink: {
                    readonly type: "string";
                };
                readonly discordLink: {
                    readonly type: "string";
                };
                readonly websiteLink: {
                    readonly type: "string";
                };
                readonly min_inscription_number: {
                    readonly type: "integer";
                };
                readonly max_inscription_number: {
                    readonly type: "integer";
                };
                readonly createdAt: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetCollectionStats: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly window: {
                    readonly type: "string";
                    readonly enum: readonly ["10m", "1h", "6h", "1d", "7d", "30d"];
                    readonly default: "1d";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Time window";
                };
                readonly sort: {
                    readonly type: "string";
                    readonly enum: readonly ["volume", "volumePercentageChange", "totalVolume", "sales", "salesPercentageChange", "totalSales", "floorPrice", "floorPricePercentageChange", "topOffer", "listedOverSupply", "ownerPercentage", "pending", "marketCap"];
                    readonly default: "volume";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Sort by";
                };
                readonly direction: {
                    readonly type: "string";
                    readonly enum: readonly ["asc", "desc"];
                    readonly default: "desc";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Sort direction";
                };
                readonly offset: {
                    readonly type: "integer";
                    readonly minimum: 1;
                    readonly maximum: 1000;
                    readonly default: 0;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Offset";
                };
                readonly limit: {
                    readonly type: "integer";
                    readonly minimum: 1;
                    readonly maximum: 1000;
                    readonly default: 100;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Limit";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const GetPopularCollectionStats: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly window: {
                    readonly type: "string";
                    readonly enum: readonly ["1h", "6h", "1d", "7d", "30d"];
                    readonly default: "1d";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Time window";
                };
                readonly limit: {
                    readonly type: "integer";
                    readonly maximum: 100;
                    readonly default: 12;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Limit";
                };
            };
            readonly required: readonly ["window"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly items: {
                readonly type: "object";
                readonly properties: {
                    readonly floorPrice: {
                        readonly type: "string";
                    };
                    readonly inscriptionNumberMin: {
                        readonly type: "string";
                    };
                    readonly inscriptionNumberMax: {
                        readonly type: "string";
                    };
                    readonly owners: {
                        readonly type: "string";
                    };
                    readonly pendingTransactions: {
                        readonly type: "string";
                    };
                    readonly supply: {
                        readonly type: "string";
                    };
                    readonly totalListed: {
                        readonly type: "string";
                    };
                    readonly totalVolume: {
                        readonly type: "string";
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetTokens: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly tokenIds: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Comma-separated list of token IDs.";
                };
                readonly collectionSymbol: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Collection symbol";
                };
                readonly ownerAddress: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Owner address";
                };
                readonly showAll: {
                    readonly type: "boolean";
                    readonly default: true;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Show all items including the listed and unlisted ones";
                };
                readonly limit: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Limit";
                };
                readonly offset: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Offset";
                };
                readonly inscriptionMin: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Inscription number min";
                };
                readonly inscriptionMax: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Inscription number max";
                };
                readonly sortBy: {
                    readonly type: "string";
                    readonly enum: readonly ["priceAsc", "priceDesc", "listedAtAsc", "listedAtDesc", "inscriptionNumberAsc", "inscriptionNumberDesc", "brc20UnitPriceAsc", "brc20UnitPriceDesc"];
                    readonly default: "priceAsc";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "sort by";
                };
                readonly minPrice: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "min price";
                };
                readonly maxPrice: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "max price";
                };
                readonly satRarity: {
                    readonly type: "string";
                    readonly enum: readonly ["common", "uncommon", "rare", "epic", "legendary", "mythic"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "sat rarity";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly total: {
                    readonly type: "integer";
                };
                readonly items: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly chain: {
                                readonly type: "string";
                            };
                            readonly collection: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly chain: {
                                        readonly type: "string";
                                    };
                                    readonly imageURI: {
                                        readonly type: "string";
                                    };
                                    readonly name: {
                                        readonly type: "string";
                                    };
                                    readonly symbol: {
                                        readonly type: "string";
                                    };
                                };
                            };
                            readonly contentURI: {
                                readonly type: "string";
                            };
                            readonly contentType: {
                                readonly type: "string";
                            };
                            readonly contentBody: {
                                readonly type: "string";
                            };
                            readonly contentPreviewURI: {
                                readonly type: "string";
                            };
                            readonly sat: {
                                readonly type: "number";
                            };
                            readonly satName: {
                                readonly type: "string";
                            };
                            readonly satRarity: {
                                readonly type: "string";
                            };
                            readonly genesisTransaction: {
                                readonly type: "string";
                            };
                            readonly genesisTransactionBlockTime: {
                                readonly type: "string";
                            };
                            readonly genesisTransactionBlockHeight: {
                                readonly type: "number";
                            };
                            readonly genesisTransactionBlockHash: {
                                readonly type: "string";
                            };
                            readonly inscriptionNumber: {
                                readonly type: "number";
                            };
                            readonly meta: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly name: {
                                        readonly type: "string";
                                    };
                                    readonly attributes: {
                                        readonly type: "array";
                                        readonly items: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly trait_type: {
                                                    readonly type: "string";
                                                };
                                                readonly value: {
                                                    readonly type: "string";
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                            readonly owner: {
                                readonly type: "string";
                            };
                            readonly collectionSymbol: {
                                readonly type: "string";
                            };
                            readonly location: {
                                readonly type: "string";
                            };
                            readonly locationBlockHeight: {
                                readonly type: "number";
                            };
                            readonly locationBlockTime: {
                                readonly type: "string";
                            };
                            readonly locationBlockHash: {
                                readonly type: "string";
                            };
                            readonly outputValue: {
                                readonly type: "number";
                            };
                            readonly output: {
                                readonly type: "string";
                            };
                            readonly mempoolTxId: {
                                readonly type: "string";
                            };
                            readonly mempoolTxTimestamp: {
                                readonly type: "string";
                            };
                            readonly listed: {
                                readonly type: "boolean";
                            };
                            readonly listedAt: {
                                readonly type: "string";
                            };
                            readonly listedPrice: {
                                readonly type: "number";
                            };
                            readonly listedMakerFeeBp: {
                                readonly type: "number";
                            };
                            readonly listedSellerReceiverAddress: {
                                readonly type: "string";
                            };
                            readonly listedForMint: {
                                readonly type: "boolean";
                            };
                            readonly brc20TransferAmt: {
                                readonly type: "number";
                            };
                            readonly brc20ListedUnitPrice: {
                                readonly type: "number";
                            };
                            readonly domain: {
                                readonly type: "string";
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetV2OrdBtcBlockActivities: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly blockHeight: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Block height";
                };
                readonly kind: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Comma-separated list of activity kinds. Acceptable values are \"create\" and \"transfer\". If not specified, defaults to \"create,transfer\".";
                };
                readonly limit: {
                    readonly type: "integer";
                    readonly minimum: 0;
                    readonly maximum: 60;
                    readonly default: 20;
                    readonly multipleOf: 20;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Limit";
                };
                readonly cursor: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "cursor";
                };
            };
            readonly required: readonly ["blockHeight"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly total: {
                    readonly type: "integer";
                };
                readonly results: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly inscription: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly id: {
                                        readonly type: "string";
                                    };
                                    readonly contentType: {
                                        readonly type: "string";
                                    };
                                    readonly contentMedia: {
                                        readonly type: "string";
                                    };
                                    readonly contentLength: {
                                        readonly type: "number";
                                    };
                                    readonly number: {
                                        readonly type: "number";
                                    };
                                    readonly sat: {
                                        readonly type: "number";
                                    };
                                    readonly satName: {
                                        readonly type: "string";
                                    };
                                    readonly satRarity: {
                                        readonly type: "string";
                                    };
                                    readonly satBlockHeight: {
                                        readonly type: "number";
                                    };
                                    readonly satBlockTime: {
                                        readonly type: "string";
                                    };
                                    readonly genesisTransaction: {
                                        readonly type: "string";
                                    };
                                    readonly genesisTransactionBlockTime: {
                                        readonly type: "string";
                                    };
                                    readonly genesisTransactionBlockHeight: {
                                        readonly type: "number";
                                    };
                                    readonly genesisTransactionBlockHash: {
                                        readonly type: "string";
                                    };
                                    readonly parentInscriptionId: {
                                        readonly type: "string";
                                    };
                                    readonly metaprotocol: {
                                        readonly type: "string";
                                    };
                                };
                            };
                            readonly activityType: {
                                readonly type: "string";
                            };
                            readonly blockHeight: {
                                readonly type: "number";
                            };
                            readonly blockHash: {
                                readonly type: "string";
                            };
                            readonly txId: {
                                readonly type: "string";
                            };
                            readonly location: {
                                readonly type: "string";
                            };
                            readonly address: {
                                readonly type: "string";
                            };
                            readonly output: {
                                readonly type: "string";
                            };
                            readonly value: {
                                readonly type: "number";
                            };
                            readonly offset: {
                                readonly type: "number";
                            };
                            readonly timestamp: {
                                readonly type: "number";
                            };
                            readonly oldLocation: {
                                readonly type: "string";
                            };
                            readonly oldAddress: {
                                readonly type: "string";
                            };
                            readonly createdAt: {
                                readonly type: "string";
                                readonly format: "date-time";
                            };
                        };
                    };
                };
                readonly limit: {
                    readonly type: "integer";
                };
                readonly nextCursor: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetV2OrdBtcRaresatsListings: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly sortBy: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                        readonly enum: readonly ["priceAsc", "priceDesc", "listedAtAsc", "listedAtDesc", "blockNumberAsc", "blockNumberDesc", "blockTimeAsc", "blockTimeDesc", "satRangeAsc", "satRangeDesc", "unitPriceAsc", "unitPriceDesc"];
                    };
                    readonly default: readonly ["priceAsc"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Sort By";
                };
                readonly limit: {
                    readonly type: "integer";
                    readonly minimum: 100;
                    readonly maximum: 500;
                    readonly default: 100;
                    readonly multipleOf: 100;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Page limit";
                };
                readonly offset: {
                    readonly type: "integer";
                    readonly minimum: 0;
                    readonly maximum: 20000;
                    readonly default: 0;
                    readonly multipleOf: 100;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Page offset";
                };
                readonly satributes: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                        readonly enum: readonly ["Common", "Uncommon", "Rare", "Epic", "Legendary", "Black Uncommon", "Black Rare", "Black Epic", "Black Legendary", "Mythic", "Palindrome", "Uniform Palinception", "Perfect Palinception", "Paliblock Palindrome", "Vintage", "Nakamoto", "Block 9", "Block 9 450x", "Block 286", "Block 78", "Block 666", "First Transaction", "Pizza", "Taproot", "Alpha", "Omega", "JPEG", "Legacy", "Hitman"];
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter listings that have the given satributes in the same sat range";
                };
                readonly minListedAt: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter items that were listed after the given timestamp";
                };
                readonly maxListedAt: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter items that were listed before the given timestamp";
                };
                readonly minPrice: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter by minimum listed price in satoshis";
                };
                readonly maxPrice: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter by maximum listed price in satoshis";
                };
                readonly minUtxoSize: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter by minimum utxo size in satoshis";
                };
                readonly maxUtxoSize: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter by maximum utxo size in satoshis";
                };
                readonly minSatRange: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter by minimum sat range in sats";
                };
                readonly maxSatRange: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter by maximum sat range in sats";
                };
                readonly minBlockNumber: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter listings that only contain sats that were created after the given block number";
                };
                readonly maxBlockNumber: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter listings that only contain sats that were created before the given block number";
                };
                readonly minBlockTimestamp: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter listings that only contain sats that were created after the given timestamp";
                };
                readonly maxBlockTimestamp: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter listings that only contain sats that were created before the given timestamp";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly items: {
                readonly type: "object";
                readonly properties: {
                    readonly tokens: {
                        readonly type: "array";
                        readonly items: {
                            readonly type: "object";
                            readonly properties: {
                                readonly id: {
                                    readonly type: "string";
                                };
                                readonly genesisTransaction: {
                                    readonly type: "string";
                                };
                                readonly genesisTransactionBlockTime: {
                                    readonly type: "string";
                                };
                                readonly genesisTransactionBlockHash: {
                                    readonly type: "string";
                                };
                                readonly genesisTransactionBlockHeight: {
                                    readonly type: "number";
                                };
                                readonly outputValue: {
                                    readonly type: "number";
                                };
                                readonly owner: {
                                    readonly type: "string";
                                };
                                readonly listed: {
                                    readonly type: "boolean";
                                };
                                readonly listedAt: {
                                    readonly type: "string";
                                };
                                readonly listedPrice: {
                                    readonly type: "number";
                                };
                                readonly listedSellerReceiverAddress: {
                                    readonly type: "string";
                                };
                                readonly minBlockHeight: {
                                    readonly type: "number";
                                };
                                readonly maxBlockHeight: {
                                    readonly type: "number";
                                };
                                readonly minBlockTime: {
                                    readonly type: "string";
                                };
                                readonly maxBlockTime: {
                                    readonly type: "string";
                                };
                                readonly minSatRange: {
                                    readonly type: "number";
                                };
                                readonly maxSatRange: {
                                    readonly type: "number";
                                };
                                readonly minUnitPrice: {
                                    readonly type: "number";
                                };
                                readonly maxUnitPrice: {
                                    readonly type: "number";
                                };
                                readonly satRanges: {
                                    readonly type: "array";
                                    readonly items: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly id: {
                                                readonly type: "string";
                                            };
                                            readonly from: {
                                                readonly type: "number";
                                            };
                                            readonly to: {
                                                readonly type: "number";
                                            };
                                            readonly parentFrom: {
                                                readonly type: "number";
                                            };
                                            readonly parentTo: {
                                                readonly type: "number";
                                            };
                                            readonly satributes: {
                                                readonly type: "array";
                                                readonly items: {
                                                    readonly type: "string";
                                                    readonly enum: readonly ["Common", "Uncommon", "Rare", "Epic", "Legendary", "Black Uncommon", "Black Rare", "Black Epic", "Black Legendary", "Mythic", "Palindrome", "Uniform Palinception", "Perfect Palinception", "Paliblock Palindrome", "Vintage", "Nakamoto", "Block 9", "Block 9 450x", "Block 286", "Block 78", "Block 666", "First Transaction", "Pizza", "Taproot", "Alpha", "Omega", "JPEG", "Legacy", "Hitman"];
                                                    readonly description: "`Common` `Uncommon` `Rare` `Epic` `Legendary` `Black Uncommon` `Black Rare` `Black Epic` `Black Legendary` `Mythic` `Palindrome` `Uniform Palinception` `Perfect Palinception` `Paliblock Palindrome` `Vintage` `Nakamoto` `Block 9` `Block 9 450x` `Block 286` `Block 78` `Block 666` `First Transaction` `Pizza` `Taproot` `Alpha` `Omega` `JPEG` `Legacy` `Hitman`";
                                                };
                                            };
                                            readonly amount: {
                                                readonly type: "number";
                                            };
                                            readonly sequence: {
                                                readonly type: "number";
                                            };
                                            readonly unitPrice: {
                                                readonly type: "number";
                                            };
                                            readonly blockInfo: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly blockHash: {
                                                        readonly type: "string";
                                                    };
                                                    readonly blockHeight: {
                                                        readonly type: "number";
                                                    };
                                                    readonly blockTime: {
                                                        readonly type: "string";
                                                    };
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetV2OrdBtcRaresatsWalletUtxos: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly walletAddress: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Wallet Address";
                };
                readonly listed: {
                    readonly type: "boolean";
                    readonly default: false;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Get only the rare sats that are listed if set to true";
                };
                readonly limit: {
                    readonly type: "integer";
                    readonly minimum: 0;
                    readonly maximum: 100;
                    readonly default: 40;
                    readonly multipleOf: 20;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Limit";
                };
                readonly offset: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Offset - the `nextOffset` cursor received from the request of the previous page";
                };
            };
            readonly required: readonly ["walletAddress"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly required: readonly ["tokens", "total"];
            readonly properties: {
                readonly tokens: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly chain: {
                                readonly type: "string";
                            };
                            readonly collection: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly chain: {
                                        readonly type: "string";
                                    };
                                    readonly imageURI: {
                                        readonly type: "string";
                                    };
                                    readonly name: {
                                        readonly type: "string";
                                    };
                                    readonly symbol: {
                                        readonly type: "string";
                                    };
                                };
                            };
                            readonly contentURI: {
                                readonly type: "string";
                            };
                            readonly contentType: {
                                readonly type: "string";
                            };
                            readonly contentBody: {
                                readonly type: "string";
                            };
                            readonly contentPreviewURI: {
                                readonly type: "string";
                            };
                            readonly sat: {
                                readonly type: "number";
                            };
                            readonly satName: {
                                readonly type: "string";
                            };
                            readonly satRarity: {
                                readonly type: "string";
                            };
                            readonly genesisTransaction: {
                                readonly type: "string";
                            };
                            readonly genesisTransactionBlockTime: {
                                readonly type: "string";
                            };
                            readonly genesisTransactionBlockHeight: {
                                readonly type: "number";
                            };
                            readonly genesisTransactionBlockHash: {
                                readonly type: "string";
                            };
                            readonly inscriptionNumber: {
                                readonly type: "number";
                            };
                            readonly meta: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly name: {
                                        readonly type: "string";
                                    };
                                    readonly attributes: {
                                        readonly type: "array";
                                        readonly items: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly trait_type: {
                                                    readonly type: "string";
                                                };
                                                readonly value: {
                                                    readonly type: "string";
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                            readonly owner: {
                                readonly type: "string";
                            };
                            readonly collectionSymbol: {
                                readonly type: "string";
                            };
                            readonly location: {
                                readonly type: "string";
                            };
                            readonly locationBlockHeight: {
                                readonly type: "number";
                            };
                            readonly locationBlockTime: {
                                readonly type: "string";
                            };
                            readonly locationBlockHash: {
                                readonly type: "string";
                            };
                            readonly outputValue: {
                                readonly type: "number";
                            };
                            readonly output: {
                                readonly type: "string";
                            };
                            readonly mempoolTxId: {
                                readonly type: "string";
                            };
                            readonly mempoolTxTimestamp: {
                                readonly type: "string";
                            };
                            readonly listed: {
                                readonly type: "boolean";
                            };
                            readonly listedAt: {
                                readonly type: "string";
                            };
                            readonly listedPrice: {
                                readonly type: "number";
                            };
                            readonly listedMakerFeeBp: {
                                readonly type: "number";
                            };
                            readonly listedSellerReceiverAddress: {
                                readonly type: "string";
                            };
                            readonly listedForMint: {
                                readonly type: "boolean";
                            };
                            readonly brc20TransferAmt: {
                                readonly type: "number";
                            };
                            readonly brc20ListedUnitPrice: {
                                readonly type: "number";
                            };
                            readonly domain: {
                                readonly type: "string";
                            };
                            readonly rareSatsUtxo: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly id: {
                                        readonly type: "string";
                                    };
                                    readonly txId: {
                                        readonly type: "string";
                                    };
                                    readonly vout: {
                                        readonly type: "number";
                                    };
                                    readonly value: {
                                        readonly type: "number";
                                    };
                                    readonly address: {
                                        readonly type: "string";
                                    };
                                    readonly blockInfo: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly blockHash: {
                                                readonly type: "string";
                                            };
                                            readonly blockHeight: {
                                                readonly type: "number";
                                            };
                                            readonly blockTime: {
                                                readonly type: "string";
                                            };
                                        };
                                    };
                                    readonly listedPrice: {
                                        readonly type: "number";
                                    };
                                    readonly satRanges: {
                                        readonly type: "array";
                                        readonly items: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly id: {
                                                    readonly type: "string";
                                                };
                                                readonly from: {
                                                    readonly type: "number";
                                                };
                                                readonly to: {
                                                    readonly type: "number";
                                                };
                                                readonly parentFrom: {
                                                    readonly type: "number";
                                                };
                                                readonly parentTo: {
                                                    readonly type: "number";
                                                };
                                                readonly satributes: {
                                                    readonly type: "array";
                                                    readonly items: {
                                                        readonly type: "string";
                                                        readonly enum: readonly ["Common", "Uncommon", "Rare", "Epic", "Legendary", "Black Uncommon", "Black Rare", "Black Epic", "Black Legendary", "Mythic", "Palindrome", "Uniform Palinception", "Perfect Palinception", "Paliblock Palindrome", "Vintage", "Nakamoto", "Block 9", "Block 9 450x", "Block 286", "Block 78", "Block 666", "First Transaction", "Pizza", "Taproot", "Alpha", "Omega", "JPEG", "Legacy", "Hitman"];
                                                        readonly description: "`Common` `Uncommon` `Rare` `Epic` `Legendary` `Black Uncommon` `Black Rare` `Black Epic` `Black Legendary` `Mythic` `Palindrome` `Uniform Palinception` `Perfect Palinception` `Paliblock Palindrome` `Vintage` `Nakamoto` `Block 9` `Block 9 450x` `Block 286` `Block 78` `Block 666` `First Transaction` `Pizza` `Taproot` `Alpha` `Omega` `JPEG` `Legacy` `Hitman`";
                                                    };
                                                };
                                                readonly amount: {
                                                    readonly type: "number";
                                                };
                                                readonly sequence: {
                                                    readonly type: "number";
                                                };
                                                readonly unitPrice: {
                                                    readonly type: "number";
                                                };
                                                readonly blockInfo: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly blockHash: {
                                                            readonly type: "string";
                                                        };
                                                        readonly blockHeight: {
                                                            readonly type: "number";
                                                        };
                                                        readonly blockTime: {
                                                            readonly type: "string";
                                                        };
                                                    };
                                                };
                                            };
                                        };
                                    };
                                    readonly hasUninscribedRareSat: {
                                        readonly type: "boolean";
                                    };
                                    readonly floorValue: {
                                        readonly type: "number";
                                    };
                                };
                            };
                        };
                    };
                };
                readonly total: {
                    readonly type: "integer";
                };
                readonly nextOffset: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetV2OrdBtcRunesActivitiesRune: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly rune: {
                    readonly type: "string";
                    readonly pattern: "^[A-Z]{1,26}$";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The rune symbol for which activities are fetched.";
                };
            };
            readonly required: readonly ["rune"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly offset: {
                    readonly type: "integer";
                    readonly minimum: 0;
                    readonly maximum: 10000;
                    readonly multipleOf: 100;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Pagination offset for the list of activities. Defaults to 0, increments must be multiples of 100, up to 10,000.";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly activities: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "string";
                            };
                            readonly kind: {
                                readonly type: "string";
                            };
                            readonly oldOwner: {
                                readonly type: "string";
                            };
                            readonly newOwner: {
                                readonly type: "string";
                            };
                            readonly rune: {
                                readonly type: "string";
                            };
                            readonly amount: {
                                readonly type: "string";
                            };
                            readonly txValue: {
                                readonly type: "string";
                            };
                            readonly txId: {
                                readonly type: "string";
                            };
                            readonly txBlockTime: {
                                readonly type: "string";
                                readonly format: "date-time";
                            };
                            readonly txBlockHeight: {
                                readonly type: "integer";
                            };
                            readonly txBlockHash: {
                                readonly type: "string";
                            };
                            readonly deletedAt: {
                                readonly type: "string";
                                readonly format: "date-time";
                            };
                            readonly createdAt: {
                                readonly type: "string";
                                readonly format: "date-time";
                            };
                            readonly listedPrice: {
                                readonly type: "string";
                            };
                            readonly listedMakerFeeBp: {
                                readonly type: "integer";
                            };
                            readonly listedTakerFeeBp: {
                                readonly type: "integer";
                            };
                            readonly btcUsdPrice: {
                                readonly type: "string";
                            };
                            readonly sellerPaymentReceiverAddress: {
                                readonly type: "string";
                            };
                            readonly buyerPaymentAddress: {
                                readonly type: "string";
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetV2OrdBtcRunesCollectionStatsSearch: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly window: {
                    readonly type: "string";
                    readonly enum: readonly ["10m", "1h", "6h", "1d", "7d", "30d"];
                    readonly default: "1d";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Time window for which statistics are aggregated.";
                };
                readonly limit: {
                    readonly type: "integer";
                    readonly minimum: 1;
                    readonly maximum: 2000;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Limit the number of results returned. Default is 20, maximum is 2000.";
                };
                readonly offset: {
                    readonly type: "integer";
                    readonly minimum: 0;
                    readonly maximum: 15000;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Pagination offset for results.";
                };
                readonly sort: {
                    readonly type: "string";
                    readonly enum: readonly ["volume", "volumePercentageChange", "totalVolume", "sales", "salesPercentageChange", "totalSales", "floorPrice", "floorPricePercentageChange", "topOffer", "listedOverSupply", "ownerPercentage", "pending", "marketCap", "ownerCount", "listedCount"];
                    readonly default: "floorPrice";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Column to sort the results by.";
                };
                readonly direction: {
                    readonly type: "string";
                    readonly enum: readonly ["asc", "desc"];
                    readonly default: "desc";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Direction of the sort ('asc' for ascending, 'desc' for descending).";
                };
                readonly walletAddress: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter results by a specific wallet address.";
                };
                readonly searchTerm: {
                    readonly type: "string";
                    readonly maxLength: 100;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter collections by a search term.";
                };
                readonly allCollections: {
                    readonly type: "boolean";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Include all collections in the results, regardless of activity.";
                };
            };
            readonly required: readonly ["window", "sort", "direction"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly runes: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly rune: {
                                readonly type: "string";
                            };
                            readonly etching: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly details: {
                                        readonly type: "string";
                                    };
                                };
                            };
                            readonly vol: {
                                readonly type: "number";
                            };
                            readonly totalVol: {
                                readonly type: "number";
                            };
                            readonly unitPriceSats: {
                                readonly type: "number";
                            };
                            readonly formattedUnitPriceSats: {
                                readonly type: "string";
                            };
                            readonly txnCount: {
                                readonly type: "number";
                            };
                            readonly imageURI: {
                                readonly type: "string";
                            };
                            readonly unitPriceChange: {
                                readonly type: "number";
                            };
                            readonly holderCount: {
                                readonly type: "number";
                            };
                            readonly pendingCount: {
                                readonly type: "number";
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetV2OrdBtcRunesMarketRuneInfo: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly rune: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Rune symbol";
                };
            };
            readonly required: readonly ["rune"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly rune: {
                    readonly type: "string";
                };
                readonly ticker: {
                    readonly type: "string";
                };
                readonly totalSupply: {
                    readonly type: "string";
                };
                readonly formattedTotalSupply: {
                    readonly type: "string";
                };
                readonly divisibility: {
                    readonly type: "integer";
                };
                readonly imageURI: {
                    readonly type: "string";
                };
                readonly description: {
                    readonly type: "string";
                };
                readonly discordLink: {
                    readonly type: "string";
                };
                readonly twitterLink: {
                    readonly type: "string";
                };
                readonly minOrderSize: {
                    readonly type: "integer";
                };
                readonly maxOrderSize: {
                    readonly type: "integer";
                };
                readonly pendingTxnCount: {
                    readonly type: "integer";
                };
                readonly floorUnitPrice: {
                    readonly type: "object";
                    readonly properties: {
                        readonly formatted: {
                            readonly type: "string";
                        };
                        readonly value: {
                            readonly type: "string";
                        };
                    };
                };
                readonly marketCap: {
                    readonly type: "integer";
                };
                readonly volume: {
                    readonly type: "object";
                    readonly properties: {
                        readonly "24h": {
                            readonly type: "integer";
                        };
                        readonly "7d": {
                            readonly type: "integer";
                        };
                        readonly "30d": {
                            readonly type: "integer";
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetV2OrdBtcRunesOrdersRune: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly rune: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The rune symbol for which orders are requested.";
                };
            };
            readonly required: readonly ["rune"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly side: {
                    readonly type: "string";
                    readonly enum: readonly ["sell"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter by order side, currently only 'sell' orders are supported.";
                };
                readonly sort: {
                    readonly type: "string";
                    readonly enum: readonly ["unitPriceAsc", "unitPriceDesc", "totalPriceAsc", "totalPriceDesc"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Sorting order of the results. Default is 'unitPriceAsc'.";
                };
                readonly offset: {
                    readonly type: "integer";
                    readonly minimum: 0;
                    readonly maximum: 2000;
                    readonly multipleOf: 100;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Pagination offset for the results. Default is 0, and increments of 100 are supported up to 2000.";
                };
                readonly includePending: {
                    readonly type: "boolean";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Whether to include pending orders in the results. Default is false.";
                };
            };
            readonly required: readonly ["side"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly orders: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly amount: {
                                readonly type: "number";
                            };
                            readonly formattedAmount: {
                                readonly type: "string";
                            };
                            readonly createdAt: {
                                readonly type: "string";
                                readonly format: "date-time";
                            };
                            readonly expiresAt: {
                                readonly type: "string";
                                readonly format: "date-time";
                            };
                            readonly id: {
                                readonly type: "string";
                            };
                            readonly rune: {
                                readonly type: "string";
                            };
                            readonly mempoolTxId: {
                                readonly type: "string";
                            };
                            readonly maker: {
                                readonly type: "string";
                            };
                            readonly makerReceiveAddress: {
                                readonly type: "string";
                            };
                            readonly makerFeeBps: {
                                readonly type: "number";
                            };
                            readonly price: {
                                readonly type: "number";
                            };
                            readonly side: {
                                readonly type: "string";
                            };
                            readonly status: {
                                readonly type: "string";
                            };
                            readonly unitPrice: {
                                readonly type: "number";
                            };
                            readonly formattedUnitPrice: {
                                readonly type: "string";
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetV2OrdBtcRunesUtxosWalletAddress: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly address: {
                    readonly oneOf: readonly [{
                        readonly pattern: "^(bc|tb)1q[023456789acdefghjklmnpqrstuvwxyz]{38,58}$";
                    }, {
                        readonly pattern: "^(bc|tb)1p[023456789acdefghjklmnpqrstuvwxyz]{58}$";
                    }, {
                        readonly pattern: "^[32][1-9A-HJ-NP-Za-km-z]{33,34}$";
                    }];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The Bitcoin address to fetch Rune UTXOs for.";
                };
            };
            readonly required: readonly ["address"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly rune: {
                    readonly type: "string";
                    readonly pattern: "^[A-Z]{1,26}$";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter UTXOs by rune symbol.";
                };
                readonly sort: {
                    readonly type: "string";
                    readonly enum: readonly ["balanceDesc", "balanceAsc"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Sorting order of the UTXOs based on their balance. Defaults to 'balanceAsc'.";
                };
                readonly includeListed: {
                    readonly type: "boolean";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Whether to include UTXOs that are currently listed in the marketplace. Defaults to false.";
                };
            };
            readonly required: readonly ["rune"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly utxos: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly location: {
                                readonly type: "string";
                            };
                            readonly address: {
                                readonly type: "string";
                            };
                            readonly rune: {
                                readonly type: "string";
                            };
                            readonly balance: {
                                readonly type: "number";
                            };
                            readonly formattedBalance: {
                                readonly type: "string";
                            };
                            readonly spent: {
                                readonly type: "boolean";
                            };
                            readonly pure: {
                                readonly type: "boolean";
                            };
                            readonly containsInscription: {
                                readonly type: "boolean";
                            };
                            readonly costSats: {
                                readonly type: "number";
                            };
                            readonly listing: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly orderId: {
                                        readonly type: "string";
                                        readonly format: "uuid";
                                    };
                                    readonly totalPriceSats: {
                                        readonly type: "number";
                                    };
                                    readonly unitPriceSats: {
                                        readonly type: "number";
                                    };
                                    readonly formattedUnitPriceSats: {
                                        readonly type: "string";
                                    };
                                    readonly expiresAt: {
                                        readonly type: "string";
                                        readonly format: "date-time";
                                    };
                                };
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetV2OrdBtcRunesWalletActivitiesAddress: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly address: {
                    readonly oneOf: readonly [{
                        readonly pattern: "^(bc|tb)1q[023456789acdefghjklmnpqrstuvwxyz]{38,58}$";
                    }, {
                        readonly pattern: "^(bc|tb)1p[023456789acdefghjklmnpqrstuvwxyz]{58}$";
                    }, {
                        readonly pattern: "^[32][1-9A-HJ-NP-Za-km-z]{33,34}$";
                    }];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The wallet address to fetch Rune activities for.";
                };
            };
            readonly required: readonly ["address"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly offset: {
                    readonly type: "integer";
                    readonly minimum: 0;
                    readonly maximum: 10000;
                    readonly multipleOf: 100;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Pagination offset for the list of activities. Defaults to 0, increments must be multiples of 100, up to 10,000.";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly activities: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "string";
                            };
                            readonly kind: {
                                readonly type: "string";
                            };
                            readonly oldOwner: {
                                readonly type: "string";
                            };
                            readonly newOwner: {
                                readonly type: "string";
                            };
                            readonly rune: {
                                readonly type: "string";
                            };
                            readonly amount: {
                                readonly type: "string";
                            };
                            readonly txValue: {
                                readonly type: "string";
                            };
                            readonly txId: {
                                readonly type: "string";
                            };
                            readonly txBlockTime: {
                                readonly type: "string";
                                readonly format: "date-time";
                            };
                            readonly txBlockHeight: {
                                readonly type: "integer";
                            };
                            readonly txBlockHash: {
                                readonly type: "string";
                            };
                            readonly deletedAt: {
                                readonly type: "string";
                                readonly format: "date-time";
                            };
                            readonly createdAt: {
                                readonly type: "string";
                                readonly format: "date-time";
                            };
                            readonly listedPrice: {
                                readonly type: "string";
                            };
                            readonly listedMakerFeeBp: {
                                readonly type: "integer";
                            };
                            readonly listedTakerFeeBp: {
                                readonly type: "integer";
                            };
                            readonly btcUsdPrice: {
                                readonly type: "string";
                            };
                            readonly sellerPaymentReceiverAddress: {
                                readonly type: "string";
                            };
                            readonly buyerPaymentAddress: {
                                readonly type: "string";
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetV2OrdBtcRunesWalletBalancesAddressRune: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly address: {
                    readonly oneOf: readonly [{
                        readonly pattern: "^(bc|tb)1q[023456789acdefghjklmnpqrstuvwxyz]{38,58}$";
                    }, {
                        readonly pattern: "^(bc|tb)1p[023456789acdefghjklmnpqrstuvwxyz]{58}$";
                    }, {
                        readonly pattern: "^[32][1-9A-HJ-NP-Za-km-z]{33,34}$";
                    }];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The wallet address to fetch Rune balances for.";
                };
                readonly rune: {
                    readonly type: "string";
                    readonly pattern: "^[A-Z]{1,26}$";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The specific Rune symbol whose balance is being queried.";
                };
            };
            readonly required: readonly ["address", "rune"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly balance: {
                    readonly type: "string";
                    readonly description: "The raw balance of the Rune, typically in its smallest unit.";
                };
                readonly formattedBalance: {
                    readonly type: "string";
                    readonly description: "The formatted balance of the Rune, adjusted for human readability according to divisibility.";
                };
                readonly ticker: {
                    readonly type: "string";
                    readonly description: "The symbol of the Rune whose balance is represented.";
                    readonly pattern: "^[A-Z]{1,26}$";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetV2OrdBtcStat: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly collectionSymbol: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Collection symbol";
                };
            };
            readonly required: readonly ["collectionSymbol"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly floorPrice: {
                    readonly type: "string";
                };
                readonly inscriptionNumberMin: {
                    readonly type: "string";
                };
                readonly inscriptionNumberMax: {
                    readonly type: "string";
                };
                readonly owners: {
                    readonly type: "string";
                };
                readonly pendingTransactions: {
                    readonly type: "string";
                };
                readonly supply: {
                    readonly type: "string";
                };
                readonly totalListed: {
                    readonly type: "string";
                };
                readonly totalVolume: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostV2OrdBtcRaresatsListing: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["listings", "signedCombinedPSBTBase64"];
        readonly properties: {
            readonly listings: {
                readonly type: "array";
                readonly items: {
                    readonly type: "object";
                    readonly required: readonly ["sellerReceiveAddress", "price", "utxoId", "satRangePrices", "signedListingPSBTBase64", "makerFee"];
                    readonly properties: {
                        readonly sellerReceiveAddress: {
                            readonly type: "string";
                        };
                        readonly price: {
                            readonly description: "The total price of the listed rare sats utxo. Must be equal to the sum of the price of each sat range";
                            readonly type: "number";
                        };
                        readonly utxoId: {
                            readonly type: "string";
                        };
                        readonly satRangePrices: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly required: readonly ["id", "from", "to", "parentFrom", "parentTo", "satributes"];
                                readonly properties: {
                                    readonly id: {
                                        readonly type: "string";
                                    };
                                    readonly from: {
                                        readonly type: "number";
                                    };
                                    readonly to: {
                                        readonly type: "number";
                                    };
                                    readonly parentFrom: {
                                        readonly type: "number";
                                    };
                                    readonly parentTo: {
                                        readonly type: "number";
                                    };
                                    readonly unitPrice: {
                                        readonly type: "number";
                                    };
                                    readonly satributes: {
                                        readonly type: "array";
                                        readonly items: {
                                            readonly type: "string";
                                            readonly enum: readonly ["Common", "Uncommon", "Rare", "Epic", "Legendary", "Black Uncommon", "Black Rare", "Black Epic", "Black Legendary", "Mythic", "Palindrome", "Uniform Palinception", "Perfect Palinception", "Paliblock Palindrome", "Vintage", "Nakamoto", "Block 9", "Block 9 450x", "Block 286", "Block 78", "Block 666", "First Transaction", "Pizza", "Taproot", "Alpha", "Omega", "JPEG", "Legacy", "Hitman"];
                                        };
                                    };
                                };
                            };
                        };
                        readonly signedListingPSBTBase64: {
                            readonly description: "Same as the signedCombinedPSBTBase64";
                            readonly type: "string";
                        };
                        readonly makerFee: {
                            readonly description: "Will be deprecated";
                            readonly type: "number";
                        };
                        readonly publicKey: {
                            readonly type: "string";
                        };
                    };
                };
            };
            readonly signedCombinedPSBTBase64: {
                readonly description: "The selling PSBT must be signed by the rare sats owner. The unsigned PSBT can be generated using the `POST /listing-psbt` endpoint";
                readonly type: "string";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly required: readonly ["ok", "listed", "failed"];
            readonly properties: {
                readonly ok: {
                    readonly type: "boolean";
                };
                readonly listed: {
                    readonly type: "number";
                };
                readonly failed: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostV2OrdBtcRaresatsListingPsbt: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["listings"];
        readonly properties: {
            readonly listings: {
                readonly type: "array";
                readonly items: {
                    readonly type: "object";
                    readonly required: readonly ["utxoId", "satRangePrices"];
                    readonly properties: {
                        readonly sellerReceiveAddress: {
                            readonly type: "string";
                            readonly description: "Default to the utxo owner address if not specified";
                        };
                        readonly publicKey: {
                            readonly type: "string";
                        };
                        readonly utxoId: {
                            readonly type: "string";
                        };
                        readonly satRangePrices: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly required: readonly ["id", "from", "to", "parentFrom", "parentTo", "satributes"];
                                readonly properties: {
                                    readonly id: {
                                        readonly type: "string";
                                    };
                                    readonly from: {
                                        readonly type: "number";
                                    };
                                    readonly to: {
                                        readonly type: "number";
                                    };
                                    readonly parentFrom: {
                                        readonly type: "number";
                                    };
                                    readonly parentTo: {
                                        readonly type: "number";
                                    };
                                    readonly unitPrice: {
                                        readonly type: "number";
                                    };
                                    readonly satributes: {
                                        readonly type: "array";
                                        readonly items: {
                                            readonly type: "string";
                                            readonly enum: readonly ["Common", "Uncommon", "Rare", "Epic", "Legendary", "Black Uncommon", "Black Rare", "Black Epic", "Black Legendary", "Mythic", "Palindrome", "Uniform Palinception", "Perfect Palinception", "Paliblock Palindrome", "Vintage", "Nakamoto", "Block 9", "Block 9 450x", "Block 286", "Block 78", "Block 666", "First Transaction", "Pizza", "Taproot", "Alpha", "Omega", "JPEG", "Legacy", "Hitman"];
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly required: readonly ["results", "failed", "unsignedCombinedPSBTBase64", "toSignInputs", "toSignSigHash"];
            readonly properties: {
                readonly results: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly required: readonly ["sellerReceiveAddress", "price", "utxoId", "unsignedListingPSBTBase64", "makerFee"];
                        readonly properties: {
                            readonly sellerReceiveAddress: {
                                readonly type: "string";
                            };
                            readonly price: {
                                readonly type: "number";
                            };
                            readonly utxoId: {
                                readonly type: "string";
                            };
                            readonly unsignedListingPSBTBase64: {
                                readonly type: "string";
                            };
                            readonly makerFee: {
                                readonly type: "number";
                            };
                            readonly publicKey: {
                                readonly type: "string";
                            };
                        };
                    };
                };
                readonly failed: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                };
                readonly unsignedCombinedPSBTBase64: {
                    readonly type: "string";
                    readonly description: "The PSBT to be signed by the owner of the rare sats";
                };
                readonly toSignInputs: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "number";
                    };
                };
                readonly toSignSigHash: {
                    readonly type: "number";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostV2OrdBtcRunesOrderCancel: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["signature", "orderIds", "makerAddress", "makerPublicKey", "token"];
        readonly properties: {
            readonly signature: {
                readonly type: "string";
                readonly description: "A BIP322 signed version of the message requested from /v2/ord/btc/runes/psbt/order/cancel";
            };
            readonly orderIds: {
                readonly type: "array";
                readonly items: {
                    readonly type: "string";
                    readonly format: "uuid";
                };
                readonly description: "Array of UUIDs of the orders to be cancelled; cannot be empty and maximum of 20.";
                readonly minItems: 1;
                readonly maxItems: 20;
            };
            readonly makerAddress: {
                readonly type: "string";
                readonly oneOf: readonly [{
                    readonly pattern: "^(bc|tb)1q[023456789acdefghjklmnpqrstuvwxyz]{38,58}$";
                }, {
                    readonly pattern: "^(bc|tb)1p[023456789acdefghjklmnpqrstuvwxyz]{58}$";
                }, {
                    readonly pattern: "^[32][1-9A-HJ-NP-Za-km-z]{33,34}$";
                }];
                readonly description: "Maker's Bitcoin address, supporting native segwit, Taproot, or P2SH formats.";
            };
            readonly makerPublicKey: {
                readonly type: "string";
                readonly oneOf: readonly [{
                    readonly pattern: "^([0-9a-f]){66}$";
                }, {
                    readonly pattern: "^([0-9a-f]){64}$";
                }];
                readonly description: "Maker's Bitcoin public key, either a standard or x-only format.";
            };
            readonly token: {
                readonly type: "string";
                readonly description: "JWT token of cancellation request from /v2/ord/btc/runes/psbt/order/cancel.";
            };
        };
        readonly additionalProperties: false;
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly required: readonly ["orderIds"];
            readonly properties: {
                readonly orderIds: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                        readonly format: "uuid";
                    };
                    readonly description: "Array of UUIDs for successfully cancelled orders.";
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostV2OrdBtcRunesOrderCreate: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["side", "signedPsbtBase64", "symbol", "makerRunesPublicKey", "makerRunesAddress", "makerReceiveAddress", "expiresAt"];
        readonly properties: {
            readonly side: {
                readonly type: "string";
                readonly enum: readonly ["sell"];
                readonly description: "Only 'sell' orders are currently supported.";
            };
            readonly signedPsbtBase64: {
                readonly type: "string";
                readonly description: "Base64-encoded signed PSBT (Partially Signed Bitcoin Transaction).";
            };
            readonly symbol: {
                readonly type: "string";
                readonly description: "Symbol representing the asset being transacted.";
            };
            readonly makerRunesPublicKey: {
                readonly type: "string";
                readonly oneOf: readonly [{
                    readonly pattern: "^([0-9a-f]){66}$";
                }, {
                    readonly pattern: "^([0-9a-f]){64}$";
                }];
                readonly description: "Maker's Bitcoin public key, either a standard or x-only format.";
            };
            readonly makerRunesAddress: {
                readonly type: "string";
                readonly oneOf: readonly [{
                    readonly pattern: "^(bc|tb)1q[023456789acdefghjklmnpqrstuvwxyz]{38,58}$";
                }, {
                    readonly pattern: "^(bc|tb)1p[023456789acdefghjklmnpqrstuvwxyz]{58}$";
                }, {
                    readonly pattern: "^[32][1-9A-HJ-NP-Za-km-z]{33,34}$";
                }];
                readonly description: "Maker's Bitcoin address, supporting native segwit, Taproot, or P2SH formats.";
            };
            readonly makerReceiveAddress: {
                readonly type: "string";
                readonly oneOf: readonly [{
                    readonly pattern: "^(bc|tb)1q[023456789acdefghjklmnpqrstuvwxyz]{38,58}$";
                }, {
                    readonly pattern: "^(bc|tb)1p[023456789acdefghjklmnpqrstuvwxyz]{58}$";
                }, {
                    readonly pattern: "^[32][1-9A-HJ-NP-Za-km-z]{33,34}$";
                }];
                readonly description: "Maker's Bitcoin receive address for the transaction, supporting native segwit, Taproot, or P2SH formats.";
            };
            readonly expiresAt: {
                readonly type: "string";
                readonly format: "date-time";
                readonly description: "Expiration date and time for the order.";
            };
        };
        readonly additionalProperties: false;
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly required: readonly ["orderIds"];
            readonly properties: {
                readonly orderIds: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                        readonly format: "uuid";
                    };
                    readonly description: "Array of UUIDs for successfully created orders.";
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostV2OrdBtcRunesPsbtOrderCancel: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["orderIds", "makerAddress", "makerPublicKey"];
        readonly properties: {
            readonly orderIds: {
                readonly type: "array";
                readonly items: {
                    readonly type: "string";
                    readonly format: "uuid";
                };
                readonly description: "Array of UUIDs of the orders to be cancelled; cannot be empty and maximum of 20.";
                readonly minItems: 1;
                readonly maxItems: 20;
            };
            readonly makerAddress: {
                readonly type: "string";
                readonly oneOf: readonly [{
                    readonly pattern: "^(bc|tb)1q[023456789acdefghjklmnpqrstuvwxyz]{38,58}$";
                }, {
                    readonly pattern: "^(bc|tb)1p[023456789acdefghjklmnpqrstuvwxyz]{58}$";
                }, {
                    readonly pattern: "^[32][1-9A-HJ-NP-Za-km-z]{33,34}$";
                }];
                readonly description: "Maker's Bitcoin address, supporting native segwit, Taproot, or P2SH formats.";
            };
            readonly makerPublicKey: {
                readonly type: "string";
                readonly oneOf: readonly [{
                    readonly pattern: "^([0-9a-f]){66}$";
                }, {
                    readonly pattern: "^([0-9a-f]){64}$";
                }];
                readonly description: "Maker's Bitcoin public key, either a standard or x-only format.";
            };
        };
        readonly additionalProperties: false;
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly required: readonly ["orderIds", "psbtBase64"];
            readonly properties: {
                readonly orderIds: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                        readonly format: "uuid";
                    };
                    readonly description: "Array of UUIDs for successfully cancelled orders.";
                };
                readonly token: {
                    readonly type: "string";
                    readonly description: "JWT token of cancellation request.";
                };
                readonly message: {
                    readonly type: "string";
                    readonly description: "Unsigned message of cancellation request.";
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostV2OrdBtcRunesPsbtOrderCreate: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["side", "rune", "makerRunesPublicKey", "makerRunesAddress", "makerReceiveAddress", "utxos", "expiresAt"];
        readonly properties: {
            readonly side: {
                readonly type: "string";
                readonly enum: readonly ["sell"];
                readonly description: "Currently only 'sell' orders are supported.";
            };
            readonly rune: {
                readonly type: "string";
                readonly pattern: "^[A-Z]{1,26}$";
                readonly description: "Rune symbol must contain only uppercase letters and be between 1 and 26 characters long.";
            };
            readonly makerRunesPublicKey: {
                readonly type: "string";
                readonly oneOf: readonly [{
                    readonly pattern: "^([0-9a-f]){66}$";
                }, {
                    readonly pattern: "^([0-9a-f]){64}$";
                }];
                readonly description: "Bitcoin public key, either a standard or x-only format.";
            };
            readonly makerRunesAddress: {
                readonly type: "string";
                readonly oneOf: readonly [{
                    readonly pattern: "^(bc|tb)1q[023456789acdefghjklmnpqrstuvwxyz]{38,58}$";
                }, {
                    readonly pattern: "^(bc|tb)1p[023456789acdefghjklmnpqrstuvwxyz]{58}$";
                }, {
                    readonly pattern: "^[32][1-9A-HJ-NP-Za-km-z]{33,34}$";
                }];
                readonly description: "Bitcoin address, supporting native segwit, Taproot, or P2SH formats.";
            };
            readonly makerReceiveAddress: {
                readonly type: "string";
                readonly oneOf: readonly [{
                    readonly pattern: "^(bc|tb)1q[023456789acdefghjklmnpqrstuvwxyz]{38,58}$";
                }, {
                    readonly pattern: "^(bc|tb)1p[023456789acdefghjklmnpqrstuvwxyz]{58}$";
                }, {
                    readonly pattern: "^[32][1-9A-HJ-NP-Za-km-z]{33,34}$";
                }];
                readonly description: "Bitcoin receive address for the transaction, supporting native segwit, Taproot, or P2SH formats.";
            };
            readonly utxos: {
                readonly type: "array";
                readonly maxItems: 100;
                readonly items: {
                    readonly type: "object";
                    readonly required: readonly ["location", "priceSats"];
                    readonly properties: {
                        readonly location: {
                            readonly type: "string";
                            readonly description: "Location identifier for the UTXO.";
                        };
                        readonly priceSats: {
                            readonly type: "integer";
                            readonly minimum: 10000;
                            readonly maximum: 3000000000;
                            readonly description: "Price in satoshis, within specified limits.";
                        };
                    };
                };
            };
            readonly expiresAt: {
                readonly type: "string";
                readonly format: "date-time";
                readonly description: "Expiration date and time of the order.";
            };
        };
        readonly additionalProperties: false;
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly required: readonly ["orderPsbtBase64"];
            readonly properties: {
                readonly orderPsbtBase64: {
                    readonly type: "string";
                    readonly description: "Base64-encoded unsigned PSBT (Partially Signed Bitcoin Transaction) of the sell order.";
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
export { GetActivities, GetActivitiesTrades, GetCollection, GetCollectionStats, GetPopularCollectionStats, GetTokens, GetV2OrdBtcBlockActivities, GetV2OrdBtcRaresatsListings, GetV2OrdBtcRaresatsWalletUtxos, GetV2OrdBtcRunesActivitiesRune, GetV2OrdBtcRunesCollectionStatsSearch, GetV2OrdBtcRunesMarketRuneInfo, GetV2OrdBtcRunesOrdersRune, GetV2OrdBtcRunesUtxosWalletAddress, GetV2OrdBtcRunesWalletActivitiesAddress, GetV2OrdBtcRunesWalletBalancesAddressRune, GetV2OrdBtcStat, PostV2OrdBtcRaresatsListing, PostV2OrdBtcRaresatsListingPsbt, PostV2OrdBtcRunesOrderCancel, PostV2OrdBtcRunesOrderCreate, PostV2OrdBtcRunesPsbtOrderCancel, PostV2OrdBtcRunesPsbtOrderCreate };
