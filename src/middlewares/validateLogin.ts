import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import userModel from '../models/userModel';

async function validateLogin(req: Request, res: Response, next:NextFunction) {
  const { username, password } = req.body;
  const userLogin = await userModel.getByUsername(username);
  if (!username) {
    return res.status(StatusCodes.BAD_REQUEST).json({ message: '"username" is required' });
  }
  if (!password) {
    return res.status(StatusCodes.BAD_REQUEST).json({ message: '"password" is required' });
  }
  if (userLogin?.username !== username || userLogin?.password !== password) {
    return res.status(StatusCodes.UNAUTHORIZED).json({ message: 'Username or password invalid' });
  }
  next();
}

export default { validateLogin };
