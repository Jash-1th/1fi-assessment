import express from 'express';
import Product from '../models/Product.js';

const router = express.Router();

// GET /api/products
// Gets all products (for a future product list page)
router.get('/', async (req, res) => {
  try {
    const products = await Product.find({}, 'name slug price image');
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET /api/products/:slug
// Gets a single product by its unique slug
router.get('/:slug', async (req, res) => {
  try {
    const product = await Product.findOne({ slug: req.params.slug });
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;