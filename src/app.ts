import express, { Express } from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import connectDB from './config/database';
import { PORT } from './config/environment';
import logger from './utils/logger';
import userRoutes from './routes/user.routes';
import { errorHandler } from './middleware';

const app: Express = express();

// Connect to the database
connectDB();

// Middleware
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/users', userRoutes);

// Error Handler
app.use(errorHandler);

// Start the server
app.listen(PORT, () => {
  logger.info(`Server is running on port ${PORT}`);
});
