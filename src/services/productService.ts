import { Product } from '../interfaces/productInterface';
import productModel from '../models/productModel';

async function create(product: Product) {
  const data = await productModel.create(product);
  return data;
}

async function getAllProducts() {
  const data = await productModel.getAllProducts();
  return data;
}

export default { create, getAllProducts };