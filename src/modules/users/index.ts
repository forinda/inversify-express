import { Router } from 'express';
import globalDependencies from '@/inversify.config';
import { UserController } from './controllers/user-controller';

const router = Router();
const userController = globalDependencies.resolve(UserController);

router.get('/:id', (req, res) => userController.getUserById(req, res));

// Other routes

export { router as userRouter };
