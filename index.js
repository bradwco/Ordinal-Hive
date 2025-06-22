const express = require('express');
const cors = require('cors');
const collectionsRouter = require('./routes/collections');

const app = express();
app.use(cors());
app.use('/collections', collectionsRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

const { fetchCollections } = require('./services/fetchCollections');
fetchCollections(); // Prime the cache at startup
