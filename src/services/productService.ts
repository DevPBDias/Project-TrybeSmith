import { Product } from '../interfaces/productInterface';
import productModel from '../models/productModel';

async function create(product: Product) {
  const data = await productModel.create(product);
  return { status: 201, data };
}

export default { create };