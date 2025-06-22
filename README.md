# BTC Ordinal Collection Stats API

A real-time API that fetches and returns collection statistics for Bitcoin Ordinal collections using the Magic Eden API.

## Features

- Real-time data from Magic Eden BTC API
- 30-minute in-memory cache
- Filtering and sorting capabilities
- Clean web interface
- RESTful API endpoints
- Health monitoring

## API Endpoints

### GET /collections
Returns a list of all collections with optional filtering and sorting.

**Query Parameters:**
- `min_volume` (optional): Filter collections with minimum 24h volume (in BTC)
- `sort_by` (optional): Sort by `volume`, `floor`, or `listings` (default: `volume`)

**Example Request:**
```bash
curl "http://localhost:3000/collections?min_volume=0.1&sort_by=floor"
```

**Example Response:**
```json
{
  "success": true,
  "data": [
    {
      "collection_name": "Bitcoin Frogs",
      "floor_price": 0.015,
      "24h_volume": 3.5,
      "total_listings": 120,
      "image_url": "https://example.com/frogs.png",
      "slug": "bitcoin-frogs"
    }
  ],
  "count": 1,
  "filters": {
    "min_volume": 0.1,
    "sort_by": "floor"
  }
}
```

### GET /collections/:slug
Returns detailed statistics for a specific collection.

**Example Request:**
```bash
curl "http://localhost:3000/collections/bitcoin-frogs"
```

### GET /rankings
Returns top collections by volume or floor price.

**Query Parameters:**
- `sort_by` (optional): Sort by `volume` or `floor` (default: `volume`)
- `limit` (optional): Number of results (1-50, default: 10)

### GET /health
Health check endpoint.

## Tech Stack

- Backend: Node.js + Express
- Data Source: Magic Eden BTC API
- Caching: In-memory cache with 30-minute TTL
- Frontend: Vanilla JavaScript with minimal CSS

## Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Setup

1. Clone the repository
   ```bash
   git clone <your-repo-url>
   cd ordinal_hive_project
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start the server
   ```bash
   npm start
   ```

4. Access the application
   - Web UI: http://localhost:3000
   - API Base: http://localhost:3000

## Project Structure

```
├── index.js              # Main server file
├── routes/
│   ├── collections.js    # Collections API routes
│   └── rankings.js       # Rankings API routes
├── services/
│   └── fetchCollections.js # Data fetching service
├── utils/
│   └── sorter.js         # Sorting and filtering utilities
├── public/
│   ├── index.html        # Web UI
│   └── styles.css        # CSS styles
└── package.json
```

## Development

### Available Scripts

- `npm start`: Start the development server
- `npm test`: Run tests (placeholder)

### Adding New Collections

Edit the `COLLECTIONS` array in `services/fetchCollections.js`:

```javascript
const COLLECTIONS = [
  'bitcoin-frogs',
  'ordinal-cats',
  'your-new-collection'
];
```

## Deployment

### Vercel
```bash
npm i -g vercel
vercel
```

### Render
1. Connect GitHub repository to Render
2. Create new Web Service
3. Set build command: `npm install`
4. Set start command: `npm start`

### Railway
1. Connect GitHub repository to Railway
2. Deploy with one click

## Performance

- 30-minute cache reduces API calls
- 3-second delay between requests to respect rate limits
- Graceful fallbacks for failed requests
- In-memory cache with automatic cleanup

## Error Handling

- 400 Bad Request: Invalid query parameters
- 404 Not Found: Collection not found
- 500 Internal Server Error: Server or API issues
- Graceful degradation with fallback data

## Known Issues

- API rate limits from Magic Eden
- Data freshness limited to 30 minutes
- Collection coverage limited to predefined list
- No authentication on public endpoints

## Future Improvements

- Redis caching for persistence
- Parallel API requests with rate limiting
- Dynamic collection discovery
- WebSocket for real-time updates
- User authentication and favorites
- Historical data tracking

## License

ISC License

## Acknowledgments

- Magic Eden for providing the BTC Ordinal API
- The Bitcoin Ordinals community 