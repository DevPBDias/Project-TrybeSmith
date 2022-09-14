import { Router } from 'express';

import loginControllers from '../controllers/loginController';
// import validateUser from '../middlewares/validateUser';

const router = Router();

router.post('/', loginControllers.login);

export default router;