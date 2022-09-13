// import { Order } from '../interfaces/orderInterface';
import orderModel from '../models/orderModel';

async function getAllOrders() {
  const data = await orderModel.getAllOrders();
  return data;
}

export default { getAllOrders };