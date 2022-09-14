import { ResultSetHeader } from 'mysql2';

import connection from './connection';
import { User } from '../interfaces/userInterface';

async function create(user: User): Promise<User> {
  const { username, classe, level, password } = user;

  const q = 'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?)';
  const values = [username, classe, level, password];

  const [result] = await connection.execute<ResultSetHeader>(q, values);
  const { insertId: id } = result;

  const newUser: User = { id, username, classe, level, password };
  return newUser;
}

async function getByUsername(username: string): Promise<User | null> {
  const query = 'SELECT * FROM Trybesmith.Users WHERE username = ?';
  const values = [username];

  const [data] = await connection.execute(query, values);
  const [user] = data as User[];

  return user || null;
}

export default { create, getByUsername };
