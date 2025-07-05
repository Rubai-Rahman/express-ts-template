import { Router } from 'express';
import { UserController } from './user.controller';

const router = Router();

router.get('/', UserController.getAllUsers);
// router.get('/:id', validate(getUserSchema), userController.getUserById);
// router.post('/', validate(createUserSchema), userController.createUser);
// router.put('/:id', validate(updateUserSchema), userController.updateUser);
// router.delete('/:id', validate(getUserSchema), userController.deleteUser);

export const userRoutes = router;
