const express = require('express');
const router = express.Router();
const { fetchCollections } = require('../services/fetchCollections');
const { filterCollections, sortCollections } = require('../utils/sorter');

router.get('/', async (req, res) => {
  const { min_volume = 0, sort_by = 'volume' } = req.query;
  try {
    let collections = await fetchCollections();
    collections = filterCollections(collections, min_volume);
    collections = sortCollections(collections, sort_by);
    res.json(collections);
  } catch (err) {
    res.status(500).json({ error: 'Could not fetch collections' });
  }
});

router.get('/rankings/top', async (req, res) => {
  const { sort_by = 'volume' } = req.query;
  try {
    let collections = await fetchCollections();
    collections = sortCollections(collections, sort_by);
    res.json(collections.slice(0, 10));
  } catch (err) {
    res.status(500).json({ error: 'Error generating rankings' });
  }
});

router.get('/:slug', async (req, res) => {
  const { slug } = req.params;
  try {
    const collections = await fetchCollections();
    const found = collections.find(c => c.slug === slug);
    if (!found) {
      return res.status(404).json({ error: 'Collection not found' });
    }
    res.json(found);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching collection' });
  }
});

module.exports = router;
