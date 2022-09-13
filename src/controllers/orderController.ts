import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

// import { Order } from '../interfaces/orderInterface';
import orderService from '../services/orderService';

async function getAllOrders(_req: Request, res: Response) {
  const data = await orderService.getAllOrders();
  
  if (!data) {
    return res.status(StatusCodes.NOT_FOUND).json({ message: 'No orders found' });
  }
  
  return res.status(StatusCodes.OK).json(data);
}

export default { getAllOrders };