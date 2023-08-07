// backend/index.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Add your database configuration
const pool = require('./config/dbConfig');

// Add your product routes
const productRoutes = require('./routes/productRoutes');
app.use('/api/products', productRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
