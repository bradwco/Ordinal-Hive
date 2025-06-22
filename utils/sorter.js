function filterCollections(collections, minVolume) {
  return collections.filter(c => (c['24h_volume'] || 0) >= parseFloat(minVolume));
}

function sortCollections(collections, sortBy) {
  const sorted = [...collections];
  
  switch (sortBy) {
    case 'floor':
      return sorted.sort((a, b) => (b.floor_price || 0) - (a.floor_price || 0));
    case 'listings':
      return sorted.sort((a, b) => (b.total_listings || 0) - (a.total_listings || 0));
    case 'volume':
    default:
      return sorted.sort((a, b) => (b['24h_volume'] || 0) - (a['24h_volume'] || 0));
  }
}

module.exports = { filterCollections, sortCollections };
