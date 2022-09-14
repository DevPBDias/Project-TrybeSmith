import jwt from 'jsonwebtoken';
import userModel from '../models/userModel';

const JWT_SECRET = 'JWT_SECRET';

export async function login(userLogin: string) {
  const data = await userModel.getByUsername(userLogin);
  const token = jwt.sign({ data }, JWT_SECRET);
  const result = { data, token };
  return result;
}

export default { login };