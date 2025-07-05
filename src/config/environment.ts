import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env') });
export const environment = {
  port: process.env.PORT,
  mongoUri: process.env.MONGO_URI,
  bycrypt_salt_rounds: process.env.BCRYPT_SALT_ROUNDS,
};
