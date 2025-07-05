import { Request, Response } from 'express';

export const getUsers = (req: Request, res: Response) => {
  res.json({ message: 'Get all users' });
};

export const getUserById = (req: Request, res: Response) => {
  res.json({ message: `Get user with id ${req.params.id}` });
};

export const createUser = (req: Request, res: Response) => {
  res.json({ message: 'Create a new user', data: req.body });
};
