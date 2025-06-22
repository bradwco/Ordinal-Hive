function filterCollections(collections, minVolume) {
  return collections.filter(c => (c['24h_volume'] || 0) >= parseFloat(minVolume));
}

function sortCollections(collections, sortBy) {
  if (sortBy === 'floor') return collections.sort((a, b) => b.floor_price - a.floor_price);
  return collections.sort((a, b) => b['24h_volume'] - a['24h_volume']);
}

module.exports = { filterCollections, sortCollections };
