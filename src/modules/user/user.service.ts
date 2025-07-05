import { CreateUserInput, UpdateUserInput } from './user.validation';

const userService = {
  getAllUsers: async () => [],
  getUserById: async (id: string) => ({ id, name: 'John Doe', email: 'john.doe@example.com' }),
  createUser: async (data: CreateUserInput) => ({ id: 'new-id', ...data }),
  updateUser: async (id: string, data: UpdateUserInput) => ({ id, ...data }),
  deleteUser: async (id: string) => ({ id }),
};

export default userService;