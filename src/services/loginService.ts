import jwt from 'jsonwebtoken';
import userModel from '../models/userModel';

const JWT_SECRET = 'JWT_SECRET';

export async function login(username: string) {
  const token = jwt.sign({ username }, JWT_SECRET);
  const data = await userModel.getByUsername(username);
  if (!data) return null;
  return token;
}

export default { login };