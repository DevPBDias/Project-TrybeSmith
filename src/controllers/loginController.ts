import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { Login } from '../interfaces/loginInterface';
import loginService from '../services/loginService';

async function login(req: Request, res: Response) {
  const { username } = req.body as Login;
  const token = await loginService.login(username);

  if (!token) {
    return res.status(StatusCodes.NOT_FOUND).json({ message: 'No token created' });
  }

  return res.status(StatusCodes.CREATED).json({ token });
}

export default { login };