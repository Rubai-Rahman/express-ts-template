import { Router } from 'express';
import { userController } from './user.controller';
import validate from '../../middleware/validation.middleware';
import { createUserSchema, updateUserSchema, getUserSchema } from './user.validation';

const router = Router();

router.get('/', userController.getAllUsers);
router.get('/:id', validate(getUserSchema), userController.getUserById);
router.post('/', validate(createUserSchema), userController.createUser);
router.put('/:id', validate(updateUserSchema), userController.updateUser);
router.delete('/:id', validate(getUserSchema), userController.deleteUser);

export const userRoutes = router;
