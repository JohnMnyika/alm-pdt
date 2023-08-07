// models/Product.js
const pool = require('../config/dbConfig');

const Product = {
  getById: async (id) => {
    try {
      const query = 'SELECT * FROM products WHERE id = $1';
      const { rows } = await pool.query(query, [id]);
      return rows[0];
    } catch (error) {
      throw error;
    }
  },
  getSimilarProducts: async (category, productId) => {
    try {
      const query = 'SELECT * FROM products WHERE category = $1 AND id <> $2';
      const { rows } = await pool.query(query, [category, productId]);
      return rows;
    } catch (error) {
      throw error;
    }
  },
};

module.exports = Product;
