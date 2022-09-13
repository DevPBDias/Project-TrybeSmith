import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { User } from '../interfaces/userInterface';
import userService from '../services/userService';

async function create(req: Request, res: Response) {
  const user = req.body as User;
  const token = await userService.create(user);

  if (!token) {
    return res.status(StatusCodes.NOT_FOUND).json({ message: 'No token created' });
  }

  return res.status(StatusCodes.CREATED).json({ token });
}

export default { create };