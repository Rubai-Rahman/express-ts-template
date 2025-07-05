import express from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';
import { userRoutes } from '@modules/user/user.route';
import errorHandler from '@middleware/errorHandler';



const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan('dev'));
app.use(cors());

// Routes
app.use('/api/users', userRoutes);

// Error handling middleware
app.use(errorHandler);

export default app;
