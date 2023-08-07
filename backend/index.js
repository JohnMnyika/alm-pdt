const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Database configuration
const pool = new Pool({
  user: 'spike',     
  host: 'localhost',            
  database: 'almonproduct',     
  password: 'spike123', 
  port: 5432,                   
});

// Define your API endpoints here

// Example endpoint for testing
app.get('/api/test', (req, res) => {
  res.json({ message: 'Hello, World!' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
