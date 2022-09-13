import { Request, Response } from 'express';

import { Product } from '../interfaces/productInterface';
import productService from '../services/productService';

async function create(req: Request, res: Response) {
  const product = req.body as Product;
  const { status, data } = await productService.create(product);

  if (!product) {
    return res.status(404).json({ message: 'No product inserted' });
  }

  return res.status(status).json(data);
}

export default { create };