import { ResultSetHeader } from 'mysql2';

import connection from './connection';
import { Product } from '../interfaces/productInterface';

async function create(product: Product): Promise<Product> {
  const { name, amount } = product;

  const query = 'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)';
  const values = [name, amount];

  const [result] = await connection.execute<ResultSetHeader>(query, values);
  const { insertId: id } = result;

  const newProduct: Product = { id, name, amount };
  return newProduct;
}

async function getAllProducts(): Promise<Product[]> {
  const query = 'SELECT * FROM Trybesmith.Products';

  const [result] = await connection.execute(query);
  
  return result as Product[];
}

export default { create, getAllProducts };
