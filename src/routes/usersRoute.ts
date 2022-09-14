import { Router } from 'express';

import userControllers from '../controllers/userController';
import validateUser from '../middlewares/validateUser';

const router = Router();

router.post(
  '/', 
  validateUser.validateClasse, 
  validateUser.validateLevel,
  validateUser.validatePassword, 
  validateUser.validateUsername,
  userControllers.create,
);

export default router;