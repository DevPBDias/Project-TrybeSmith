import { Router } from 'express';

import productControllers from '../controllers/productController';

const router = Router();

router.post('/', productControllers.create);

export default router;