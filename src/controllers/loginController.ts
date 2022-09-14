import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { login } from '../services/loginService';

async function loginUser(req: Request, res: Response) {
  const user = req.body;
  const token = await login(user.username);

  if (!token) {
    return res.status(StatusCodes.NOT_FOUND).json({ message: 'No token created' });
  }

  return res.status(StatusCodes.OK).json({ token });
}

export default { loginUser };