import { Request, Response } from 'express';
import { UserValidationSchema} from './user.validation';
import { UserServices } from './user.service';
import { z } from 'zod';

const createUser = async (req: Request, res: Response) => {
  try {
    // const { user: userData } = req.body;
    const zodParsedData = UserValidationSchema.parse(req.body);
    const result = await UserServices.createUserIntoDB(zodParsedData);
    res.status(201).json({
      success: true,
      message: 'User is created successfully',
      data: result,
    });
  } catch (error) {
    //handle zodError
    if (error instanceof z.ZodError) {
      res.status(400).json({
        success: false,
        message: error.errors,
        error: error,
      });
    } else {
      res.status(500).json({
        success: false,
        message:
          error instanceof Error ? error.message : 'Something went wrong',
        error: error instanceof Error ? error : 'Unknown error',
      });
    }
  }
};

export const UserController = {
  createUser,
};
