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
  'rare-sats',
  'bitcoin-punks',
  'ordinal-doodles',
  'bitcoin-bears',
  'ordinal-apes',
  'bitcoin-birds'
];

let cache = []; // In-memory cache
let lastUpdated = 0;
const TTL = 1000 * 60 * 30; // 30 minutes

async function sleep(ms) {
  return new Promise(res => setTimeout(res, ms));
}

function validateCollectionData(data) {
  return {
    collection_name: data.name || 'Unknown Collection',
    floor_price: parseFloat(data.floorPrice) || 0,
    '24h_volume': parseFloat(data.volume24h) || 0,
    total_listings: parseInt(data.listedCount) || 0,
    image_url: data.image || data.imageURI || null,
    slug: data.slug || 'unknown',
    description: data.description || null,
    supply: parseInt(data.supply) || null,
    holders: parseInt(data.holders) || null
  };
}

async function fetchCollectionsFromAPI() {
  const results = [];
  const errors = [];

  console.log(`🔄 Fetching data for ${COLLECTIONS.length} collections from Magic Eden...`);

  for (const slug of COLLECTIONS) {
    try {
      console.log(`📡 Fetching ${slug}...`);
      
      const metaRes = await axios.get(`https://api-mainnet.magiceden.dev/v2/ord/btc/collections/${slug}`, {
        timeout: 10000
      });
      
      const statsRes = await axios.get(`https://api-mainnet.magiceden.dev/v2/ord/btc/collections/${slug}/stats`, {
        timeout: 10000
      });

      const collectionData = {
        ...metaRes.data,
        ...statsRes.data,
        slug
      };

      const validatedData = validateCollectionData(collectionData);
      results.push(validatedData);

      console.log(`✅ ${slug}: Floor ${validatedData.floor_price} BTC, Volume ${validatedData['24h_volume']} BTC`);
      
      await sleep(1000); // Reduced wait time to 1 second per request
    } catch (err) {
      const errorMsg = `Failed to fetch ${slug}: ${err.message}`;
      console.error(`❌ ${errorMsg}`);
      errors.push({ slug, error: err.message });
      
      // Add fallback data for failed requests
      results.push({
        collection_name: slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
        floor_price: 0,
        '24h_volume': 0,
        total_listings: 0,
        image_url: null,
        slug,
        description: null,
        supply: null,
        holders: null
      });
    }
  }

  cache = results;
  lastUpdated = Date.now();
  
  console.log(`✅ Cache updated with ${results.length} collections`);
  if (errors.length > 0) {
    console.log(`⚠️  ${errors.length} collections failed to fetch:`, errors.map(e => e.slug).join(', '));
  }
}

async function fetchCollections() {
  if (Date.now() - lastUpdated > TTL || cache.length === 0) {
    console.log('🔄 Refreshing data from Magic Eden...');
    await fetchCollectionsFromAPI();
  } else {
    console.log('📦 Serving from cache...');
  }
  return cache;
}

module.exports = { fetchCollections };
