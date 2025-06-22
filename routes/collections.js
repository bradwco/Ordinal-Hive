const express = require('express');
const router = express.Router();
const { fetchCollections } = require('../services/fetchCollections');
const { filterCollections, sortCollections } = require('../utils/sorter');

// GET /collections - Returns a list of collections with filtering and sorting
router.get('/', async (req, res) => {
  const { min_volume = 0, sort_by = 'volume' } = req.query;
  
  try {
    // Validate sort_by parameter
    const validSortOptions = ['volume', 'floor', 'listings'];
    if (!validSortOptions.includes(sort_by)) {
      return res.status(400).json({ 
        error: 'Invalid sort_by parameter. Must be one of: volume, floor, listings' 
      });
    }

    // Validate min_volume parameter
    const minVolume = parseFloat(min_volume);
    if (isNaN(minVolume) || minVolume < 0) {
      return res.status(400).json({ 
        error: 'min_volume must be a non-negative number' 
      });
    }

    let collections = await fetchCollections();
    collections = filterCollections(collections, minVolume);
    collections = sortCollections(collections, sort_by);
    
    res.json({
      success: true,
      data: collections,
      count: collections.length,
      filters: { min_volume: minVolume, sort_by }
    });
  } catch (err) {
    console.error('Error fetching collections:', err);
    res.status(500).json({ 
      error: 'Could not fetch collections',
      message: err.message 
    });
  }
});

// GET /collections/:slug - Returns detailed stats for a single collection
router.get('/:slug', async (req, res) => {
  const { slug } = req.params;
  
  if (!slug || slug.trim() === '') {
    return res.status(400).json({ error: 'Collection slug is required' });
  }

  try {
    const collections = await fetchCollections();
    const found = collections.find(c => c.slug === slug);
    
    if (!found) {
      return res.status(404).json({ 
        error: 'Collection not found',
        slug: slug,
        available_slugs: collections.map(c => c.slug)
      });
    }
    
    res.json({
      success: true,
      data: found
    });
  } catch (err) {
    console.error('Error fetching collection:', err);
    res.status(500).json({ 
      error: 'Error fetching collection',
      message: err.message 
    });
  }
});

module.exports = router;
