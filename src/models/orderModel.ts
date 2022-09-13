import connection from './connection';
import { Order } from '../interfaces/orderInterface';

async function getAllOrders(): Promise<Order[]> {
  // Referencia: https://dev.mysql.com/doc/refman/5.7/en/aggregate-functions.html#function_json-arrayagg
  const query = `SELECT 
        A.id AS id, A.userId AS userId, JSON_ARRAYAGG(B.id) AS productsIds
    FROM
        Trybesmith.Orders AS A
      INNER JOIN
        Trybesmith.Products AS B 
      ON A.id = B.orderId
      GROUP BY A.id
      ORDER BY A.userId`;

  const [result] = await connection.execute(query);
  // console.log(result);

  return result as Order[];
}

export default { getAllOrders };
