const express = require('express');
const cors = require('cors');
const path = require('path');
const collectionsRouter = require('./routes/collections');
const rankingsRouter = require('./routes/rankings');

const app = express();
app.use(cors());
app.use(express.json());

// Serve static files from public directory
app.use(express.static(path.join(__dirname, 'public')));

// API routes
app.use('/collections', collectionsRouter);
app.use('/rankings', rankingsRouter);

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Serve the main page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`BTC Ordinal Collection Stats API running at http://localhost:${PORT}`);
  console.log(`API endpoints:`);
  console.log(`   GET /collections - List all collections`);
  console.log(`   GET /collections/:slug - Get single collection`);
  console.log(`   GET /rankings - Top 10 collections`);
  console.log(`   GET /health - Health check`);
});

const { fetchCollections } = require('./services/fetchCollections');
fetchCollections(); // Prime the cache at startup
