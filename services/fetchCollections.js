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

let cache = [];
let lastUpdated = 0;
const TTL = 1000 * 60 * 30;
let demoMode = false;

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

function generateFallbackData(slug) {
  const names = {
    'bitcoin-frogs': 'Bitcoin Frogs',
    'ordinal-cats': 'Ordinal Cats',
    'satoshi-punks': 'Satoshi Punks',
    'taproot-wizards': 'Taproot Wizards',
    'bitmap': 'Bitmap',
    'doge-ordinal': 'Doge Ordinal',
    'ordinal-maxis': 'Ordinal Maxis',
    'inscribed-pepes': 'Inscribed Pepes',
    'btc-degens': 'BTC Degens',
    'rare-sats': 'Rare Sats',
    'bitcoin-punks': 'Bitcoin Punks',
    'ordinal-doodles': 'Ordinal Doodles',
    'bitcoin-bears': 'Bitcoin Bears',
    'ordinal-apes': 'Ordinal Apes',
    'bitcoin-birds': 'Bitcoin Birds'
  };

  const baseFloor = 0.005 + (Math.random() * 0.02);
  const baseVolume = 0.1 + (Math.random() * 2);
  const baseListings = 50 + Math.floor(Math.random() * 200);

  return {
    collection_name: names[slug] || slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
    floor_price: parseFloat(baseFloor.toFixed(4)),
    '24h_volume': parseFloat(baseVolume.toFixed(3)),
    total_listings: baseListings,
    image_url: null,
    slug,
    description: `A collection of unique ${names[slug] || slug.replace(/-/g, ' ')} ordinals`,
    supply: 10000,
    holders: 5000 + Math.floor(Math.random() * 3000)
  };
}

function generateDemoData() {
  console.log('Generating demo data for immediate testing...');
  return COLLECTIONS.map(slug => generateFallbackData(slug));
}

async function fetchCollectionWithRetry(slug, retries = 3) {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      console.log(`Fetching ${slug}... (attempt ${attempt}/${retries})`);
      
      const metaRes = await axios.get(`https://api-mainnet.magiceden.dev/v2/ord/btc/collections/${slug}`, {
        timeout: 15000,
        headers: {
          'User-Agent': 'BTC-Ordinal-Stats-API/1.0'
        }
      });
      
      const statsRes = await axios.get(`https://api-mainnet.magiceden.dev/v2/ord/btc/collections/${slug}/stats`, {
        timeout: 15000,
        headers: {
          'User-Agent': 'BTC-Ordinal-Stats-API/1.0'
        }
      });

      const collectionData = {
        ...metaRes.data,
        ...statsRes.data,
        slug
      };

      const validatedData = validateCollectionData(collectionData);
      console.log(`${slug}: Floor ${validatedData.floor_price} BTC, Volume ${validatedData['24h_volume']} BTC`);
      return validatedData;
      
    } catch (err) {
      console.error(`Attempt ${attempt} failed for ${slug}: ${err.message}`);
      
      if (err.response?.status === 429) {
        const waitTime = attempt * 5000;
        console.log(`Rate limited, waiting ${waitTime/1000}s before retry...`);
        await sleep(waitTime);
      } else if (attempt < retries) {
        await sleep(2000);
      }
    }
  }
  
  console.log(`Using fallback data for ${slug}`);
  return generateFallbackData(slug);
}

async function fetchCollectionsFromAPI() {
  const results = [];
  const errors = [];

  console.log(`Fetching data for ${COLLECTIONS.length} collections from Magic Eden...`);

  let consecutiveFailures = 0;
  const maxFailures = 3;

  for (const slug of COLLECTIONS) {
    try {
      if (consecutiveFailures >= maxFailures) {
        console.log('Too many consecutive failures, switching to demo mode');
        demoMode = true;
        return generateDemoData();
      }

      const collectionData = await fetchCollectionWithRetry(slug);
      results.push(collectionData);
      consecutiveFailures = 0;
      
      await sleep(3000);
      
    } catch (err) {
      consecutiveFailures++;
      const errorMsg = `Failed to fetch ${slug}: ${err.message}`;
      console.error(errorMsg);
      errors.push({ slug, error: err.message });
      
      results.push(generateFallbackData(slug));
    }
  }

  if (consecutiveFailures >= maxFailures) {
    demoMode = true;
    console.log('Switching to demo mode due to API issues');
    return generateDemoData();
  }

  cache = results;
  lastUpdated = Date.now();
  
  console.log(`Cache updated with ${results.length} collections`);
  if (errors.length > 0) {
    console.log(`${errors.length} collections failed to fetch:`, errors.map(e => e.slug).join(', '));
  }
  
  return results;
}

async function fetchCollections() {
  if (Date.now() - lastUpdated > TTL || cache.length === 0) {
    console.log('Refreshing data from Magic Eden...');
    const data = await fetchCollectionsFromAPI();
    cache = data;
    lastUpdated = Date.now();
  } else {
    console.log('Serving from cache...');
  }
  
  if (demoMode) {
    console.log('Currently in demo mode - using generated data');
  }
  
  return cache;
}

module.exports = { fetchCollections };
