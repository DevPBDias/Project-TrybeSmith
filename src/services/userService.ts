import jwt from 'jsonwebtoken';
import { User } from '../interfaces/userInterface';
import userModel from '../models/userModel';

const JWT_SECRET = 'JWT_SECRET';

async function create(user: User) {
  const { username } = await userModel.create(user);
  const token = jwt.sign({ username }, JWT_SECRET);
  return token;
}

export default { create };