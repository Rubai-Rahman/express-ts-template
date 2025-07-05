import { Request, Response, NextFunction } from 'express';
import {
  CreateUserInput,
  UpdateUserInput,
  GetUserInput,
} from './user.validation';

import userService from './user.service';

export async function getAllUsers(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const users = await userService.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
}

export async function getUserById(
  req: Request<GetUserInput>,
  res: Response,
  next: NextFunction,
) {
  try {
    const { id } = req.params;
    const user = await userService.getUserById(id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
}

export async function createUser(
  req: Request<any, any, CreateUserInput>,
  res: Response,
  next: NextFunction,
) {
  try {
    const newUser = await userService.createUser(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    next(error);
  }
}

export async function updateUser(
  req: Request<GetUserInput, any, UpdateUserInput>,
  res: Response,
  next: NextFunction,
) {
  try {
    const { id } = req.params;
    const updatedUser = await userService.updateUser(id, req.body);
    res.status(200).json(updatedUser);
  } catch (error) {
    next(error);
  }
}

export async function deleteUser(
  req: Request<GetUserInput>,
  res: Response,
  next: NextFunction,
) {
  try {
    const { id } = req.params;
    await userService.deleteUser(id);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
}

export const UserController = {
  createUser,
  getAllUsers,
};