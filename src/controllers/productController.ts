import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import { Product } from '../interfaces/productInterface';
import productService from '../services/productService';

async function create(req: Request, res: Response) {
  const product = req.body as Product;
  const data = await productService.create(product);

  if (!data) {
    return res.status(StatusCodes.NOT_FOUND).json({ message: 'No product inserted' });
  }

  return res.status(StatusCodes.CREATED).json(data);
}

async function getAllProducts(_req: Request, res: Response) {
  const data = await productService.getAllProducts();
  
  if (!data) {
    return res.status(StatusCodes.NOT_FOUND).json({ message: 'No products found' });
  }
  
  return res.status(StatusCodes.OK).json(data);
}

export default { create, getAllProducts };