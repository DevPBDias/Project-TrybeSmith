import { Router } from 'express';

import productControllers from '../controllers/productController';
import validateProduct from '../middlewares/validateProduct';

const router = Router();

router.post(
  '/', 
  validateProduct.validateAmount, 
  validateProduct.validateName,
  productControllers.create,
);

router.get('/', productControllers.getAllProducts);

export default router;