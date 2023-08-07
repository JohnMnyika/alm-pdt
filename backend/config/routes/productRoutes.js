const express = require('express');
const router = express.Router();
const productModel = require('../models/productModel');

// GET product by ID
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const product = await productModel.getProductById(id);
    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Unable to fetch product details' });
  }
});

// GET similar products by category
router.get('/similar/:category/:id', async (req, res) => {
  const { category, id } = req.params;
  try {
    const similarProducts = await productModel.getSimilarProducts(category, id);
    res.json(similarProducts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Unable to fetch similar products' });
  }
});

module.exports = router;
