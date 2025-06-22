const express = require('express');
const router = express.Router();
const { fetchCollections } = require('../services/fetchCollections');
const { sortCollections } = require('../utils/sorter');

// GET /rankings - Returns top 10 collections by volume or floor price
router.get('/', async (req, res) => {
  const { sort_by = 'volume', limit = 10 } = req.query;
  
  try {
    // Validate sort_by parameter
    const validSortOptions = ['volume', 'floor'];
    if (!validSortOptions.includes(sort_by)) {
      return res.status(400).json({ 
        error: 'Invalid sort_by parameter. Must be one of: volume, floor' 
      });
    }

    // Validate limit parameter
    const limitNum = parseInt(limit);
    if (isNaN(limitNum) || limitNum < 1 || limitNum > 50) {
      return res.status(400).json({ 
        error: 'limit must be a number between 1 and 50' 
      });
    }

    let collections = await fetchCollections();
    collections = sortCollections(collections, sort_by);
    const topCollections = collections.slice(0, limitNum);
    
    res.json({
      success: true,
      data: topCollections,
      count: topCollections.length,
      sort_by,
      limit: limitNum,
      total_collections: collections.length
    });
  } catch (err) {
    console.error('Error generating rankings:', err);
    res.status(500).json({ 
      error: 'Error generating rankings',
      message: err.message 
    });
  }
});

module.exports = router; 