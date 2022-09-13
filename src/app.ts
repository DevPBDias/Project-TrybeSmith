import express from 'express';
import routes from './routes';

const app = express();

app.use(express.json());

app.use('/products', routes.productsRoute);
app.use('/users', routes.usersRoute);

export default app;
