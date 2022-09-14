import { Router } from 'express';

import loginControllers from '../controllers/loginController';
import validateLogin from '../middlewares/validateLogin';

const router = Router();

router.post('/', validateLogin.validateLogin, loginControllers.loginUser);

export default router;