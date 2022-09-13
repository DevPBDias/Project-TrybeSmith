import { Router } from 'express';

import orderControllers from '../controllers/orderController';

const router = Router();

router.get('/', orderControllers.getAllOrders);

export default router;