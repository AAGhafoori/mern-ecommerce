import express from 'express';
import Product from '../models/product.js';
import asyncHandler from 'express-async-handler';

const router = express.Router();

router.get(
  '/',
  asyncHandler(async (req, res, next) => {
    const products = await Product.find({});
    res.status(200).json(products);
  })
);

router.get(
  '/:productId',
  asyncHandler(async (req, res, next) => {
    const productId = req.params.productId;
    const product = await Product.findById(productId);

    if (product) {
      res.status(200).json(product);
    } else {
      console.log('...shit');
      res.status(404);
      throw new Error('Product not found');
    }
  })
);

export default router;
