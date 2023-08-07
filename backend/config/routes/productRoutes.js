// routes/productRoutes.js
const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.getById(id);
    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Unable to fetch product details' });
  }
});

router.get('/similar/:category/:id', async (req, res) => {
  const { category, id } = req.params;
  try {
    const similarProducts = await Product.getSimilarProducts(category, id);
    res.json(similarProducts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Unable to fetch similar products' });
  }
});

module.exports = router;
