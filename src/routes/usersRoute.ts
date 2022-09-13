import { Router } from 'express';

import userControllers from '../controllers/userController';

const router = Router();

router.post('/', userControllers.create);

export default router;