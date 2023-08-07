const pool = require('../index');

const productModel = {
  getProductById: async (id) => {
    try {
      const query = 'SELECT * FROM products WHERE id = $1';
      const { rows } = await pool.query(query, [id]);
      return rows[0];
    } catch (error) {
      throw error;
    }
  },
  getSimilarProducts: async (category, id) => {
    try {
      const query = 'SELECT * FROM products WHERE category = $1 AND id <> $2';
      const { rows } = await pool.query(query, [category, id]);
      return rows;
    } catch (error) {
      throw error;
    }
  },
};

module.exports = productModel;
