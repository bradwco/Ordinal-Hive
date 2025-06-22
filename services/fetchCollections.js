const axios = require('axios');

const COLLECTIONS = [
  'bitcoin-frogs',
  'ordinal-cats',
  'satoshi-punks',
  'taproot-wizards',
  'bitmap',
  'doge-ordinal',
  'ordinal-maxis',
  'inscribed-pepes',
  'btc-degens',
  'rare-sats'
];

let cache = []; // In-memory cache
let lastUpdated = 0;
const TTL = 1000 * 60 * 30; // 30 minutes

async function sleep(ms) {
  return new Promise(res => setTimeout(res, ms));
}

async function fetchCollectionsFromAPI() {
  const results = [];

  for (const slug of COLLECTIONS) {
    try {
      const metaRes = await axios.get(`https://api-mainnet.magiceden.dev/v2/ord/btc/collections/${slug}`);
      const statsRes = await axios.get(`https://api-mainnet.magiceden.dev/v2/ord/btc/collections/${slug}/stats`);

      results.push({
        collection_name: metaRes.data.name || slug,
        floor_price: statsRes.data.floorPrice || 0,
        '24h_volume': statsRes.data.volume24h || 0,
        total_listings: statsRes.data.listedCount || 0,
        image_url: metaRes.data.image || metaRes.data.imageURI,
        slug
      });

      await sleep(1500); // wait 1.5 seconds per request
    } catch (err) {
      console.error(`❌ Failed to fetch ${slug}:`, err.message);
    }
  }

  cache = results;
  lastUpdated = Date.now();
}

async function fetchCollections() {
  if (Date.now() - lastUpdated > TTL || cache.length === 0) {
    console.log('🔁 Refreshing data from Magic Eden...');
    await fetchCollectionsFromAPI();
  }
  return cache;
}

module.exports = { fetchCollections };
