import express from 'express';
import productSchema from '../schema/productSchema';
import type { IProduct } from '../schema/productSchema';
import { connectToDatabase } from '../connectTodb';

const router = express();

router.put('/add-product', async (req, res) => {
  connectToDatabase();

  try {
    const productData: Partial<IProduct> = req.body;
    const newProduct = new productSchema(productData);

    await newProduct.save();
    res.status(201).json();
  } catch (error) {
    res.status(500).json({ message: 'Error adding products', error });
  }
});

export default router;
