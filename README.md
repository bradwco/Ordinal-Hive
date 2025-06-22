# 🚀 BTC Ordinal Collection Stats API

A real-time API that fetches and returns collection statistics for Bitcoin Ordinal collections using the Magic Eden API. Built with Node.js, Express, and featuring a beautiful modern UI.

## 🎯 Features

- **Real-time Data**: Fetches live collection stats from Magic Eden BTC API
- **Smart Caching**: 30-minute in-memory cache for optimal performance
- **Filtering & Sorting**: Filter by minimum volume, sort by volume, floor price, or listings
- **Beautiful UI**: Modern, responsive web interface with interactive features
- **Comprehensive API**: RESTful endpoints with proper error handling
- **Health Monitoring**: Built-in health check endpoint

## 📊 API Endpoints

### GET `/collections`
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
      "slug": "bitcoin-frogs",
      "description": "A collection of unique Bitcoin frogs",
      "supply": 10000,
      "holders": 8500
    }
  ],
  "count": 1,
  "filters": {
    "min_volume": 0.1,
    "sort_by": "floor"
  }
}
```

### GET `/collections/:slug`
Returns detailed statistics for a specific collection.

**Example Request:**
```bash
curl "http://localhost:3000/collections/bitcoin-frogs"
```

**Example Response:**
```json
{
  "success": true,
  "data": {
    "collection_name": "Bitcoin Frogs",
    "floor_price": 0.015,
    "24h_volume": 3.5,
    "total_listings": 120,
    "image_url": "https://example.com/frogs.png",
    "slug": "bitcoin-frogs",
    "description": "A collection of unique Bitcoin frogs",
    "supply": 10000,
    "holders": 8500
  }
}
```

### GET `/rankings`
Returns top collections by volume or floor price.

**Query Parameters:**
- `sort_by` (optional): Sort by `volume` or `floor` (default: `volume`)
- `limit` (optional): Number of results (1-50, default: 10)

**Example Request:**
```bash
curl "http://localhost:3000/rankings?sort_by=volume&limit=5"
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
  "sort_by": "volume",
  "limit": 5,
  "total_collections": 15
}
```

### GET `/health`
Health check endpoint.

**Example Response:**
```json
{
  "status": "OK",
  "timestamp": "2024-01-15T10:30:00.000Z"
}
```

## 🛠 Tech Stack

- **Backend**: Node.js + Express
- **Data Source**: Magic Eden BTC API
- **Caching**: In-memory cache with 30-minute TTL
- **Frontend**: Vanilla JavaScript with modern CSS
- **Styling**: Custom CSS with responsive design
- **Icons**: Font Awesome

## 📦 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd ordinal_hive_project
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the server**
   ```bash
   npm start
   ```

4. **Access the application**
   - Web UI: http://localhost:3000
   - API Base: http://localhost:3000

### Environment Variables

The application uses the following environment variables (all optional):

- `PORT`: Server port (default: 3000)

## 🎨 UI Features

The web interface includes:

- **Real-time Data Display**: Live collection statistics with automatic refresh
- **Interactive Filtering**: Filter by minimum volume
- **Dynamic Sorting**: Sort by volume, floor price, or listings
- **Rankings View**: Top collections table with sortable columns
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Error Handling**: User-friendly error messages
- **Loading States**: Visual feedback during data fetching

## 🔧 Development

### Project Structure
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
│   └── index.html        # Web UI
└── package.json
```

### Available Scripts

- `npm start`: Start the development server
- `npm test`: Run tests (placeholder)

### Adding New Collections

To add new collections, edit the `COLLECTIONS` array in `services/fetchCollections.js`:

```javascript
const COLLECTIONS = [
  'bitcoin-frogs',
  'ordinal-cats',
  // Add your new collection slug here
  'your-new-collection'
];
```

## 🚀 Deployment

### Deploy to Vercel

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

### Deploy to Render

1. Connect your GitHub repository to Render
2. Create a new Web Service
3. Set build command: `npm install`
4. Set start command: `npm start`
5. Deploy!

### Deploy to Railway

1. Connect your GitHub repository to Railway
2. Railway will automatically detect Node.js
3. Deploy with one click!

## 📈 Performance

- **Caching**: 30-minute cache reduces API calls
- **Rate Limiting**: 1-second delay between requests to respect API limits
- **Error Handling**: Graceful fallbacks for failed requests
- **Memory Efficient**: In-memory cache with automatic cleanup

## 🔍 Error Handling

The API includes comprehensive error handling:

- **400 Bad Request**: Invalid query parameters
- **404 Not Found**: Collection not found
- **500 Internal Server Error**: Server or API issues
- **Graceful Degradation**: Fallback data for failed requests

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📝 Known Issues & Trade-offs

### Current Limitations
- **API Rate Limits**: Magic Eden API has rate limits, so we use 1-second delays
- **Data Freshness**: Cache is 30 minutes old at maximum
- **Collection Coverage**: Limited to predefined collection list
- **No Authentication**: Public API endpoints

### Trade-offs Made
- **In-memory Cache**: Fast but lost on server restart
- **Synchronous Fetching**: Sequential API calls for reliability
- **Fallback Data**: Shows placeholder data for failed requests

### Future Improvements
- [ ] Redis caching for persistence
- [ ] Parallel API requests with rate limiting
- [ ] Dynamic collection discovery
- [ ] WebSocket for real-time updates
- [ ] User authentication and favorites
- [ ] Historical data tracking

## 📄 License

This project is licensed under the ISC License.

## 🙏 Acknowledgments

- Magic Eden for providing the BTC Ordinal API
- The Bitcoin Ordinals community
- Font Awesome for icons

---

**Built with ❤️ for the Bitcoin Ordinals ecosystem** 