# Backend Template

A comprehensive TypeScript Node.js backend template with Express, MongoDB, and Mongoose following a modular architecture pattern.

## Features

- **TypeScript**: Full TypeScript support with strict type checking
- **Express.js**: Web framework with middleware support
- **MongoDB & Mongoose**: Database integration with ODM
- **Input Validation**: Request validation using Zod
- **Error Handling**: Centralized error handling middleware
- **Logging**: Structured logging with different levels
- **Security**: Helmet, CORS, rate limiting, and password hashing
- **Testing**: Jest testing framework setup
- **Code Quality**: ESLint configuration
- **Development**: Hot reload with tsx

## Project Structure

```
src/
├── config/          # Configuration files
├── controllers/     # Route controllers
├── middleware/      # Custom middleware
├── models/         # Mongoose models
├── routes/         # API routes
├── services/       # Business logic
├── types/          # TypeScript type definitions
├── utils/          # Utility functions
├── app.ts          # Express app setup
└── index.ts        # Entry point
```

## Quick Start

1. **Clone and install dependencies**:
   ```bash
   git clone <your-repo-url>
   cd backend-template
   yarn install
   ```

2. **Set up environment variables**:
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

3. **Start development server**:
   ```bash
   yarn dev
   ```

4. **Build for production**:
   ```bash
   yarn build
   yarn start
   ```

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `PORT` | Server port | 8000 |
| `NODE_ENV` | Environment | development |
| `MONGODB_URI` | MongoDB connection string | Required |
| `JWT_SECRET` | JWT secret key | Required |
| `JWT_EXPIRES_IN` | JWT expiration time | 7d |
| `CORS_ORIGIN` | CORS origin | http://localhost:3000 |

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login
- `GET /api/auth/profile` - Get user profile (protected)
- `PUT /api/auth/profile` - Update user profile (protected)
- `POST /api/auth/change-password` - Change password (protected)
- `POST /api/auth/logout` - Logout user (protected)

### Users (Admin only)
- `GET /api/users` - Get all users with pagination
- `GET /api/users/:id` - Get user by ID
- `PATCH /api/users/:id/status` - Update user status
- `DELETE /api/users/:id` - Delete user

### Health Check
- `GET /health` - Health check endpoint

## Scripts

```bash
# Development
yarn dev          # Start development server with hot reload
yarn build        # Build for production
yarn start        # Start production server

# Code Quality
yarn lint         # Run ESLint
yarn lint:fix     # Fix ESLint errors

# Testing
yarn test         # Run tests
yarn test:watch   # Run tests in watch mode

# Utilities
yarn clean        # Clean build directory
yarn setup        # Install dependencies and build
```

## Authentication Flow

1. User registers with email, password, firstName, lastName
2. User logs in with email and password
3. Server returns JWT token
4. Client includes token in Authorization header: `Bearer <token>`
5. Protected routes verify token and extract user info

## Modular Architecture

The template follows a modular pattern:

- **Controllers**: Handle HTTP requests and responses
- **Services**: Contain business logic and data processing
- **Models**: Define database schemas and validations
- **Middleware**: Handle cross-cutting concerns (auth, validation, errors)
- **Routes**: Define API endpoints and link to controllers
- **Utils**: Shared utility functions
- **Types**: TypeScript type definitions

## Security Features

- Password hashing with bcrypt
- JWT token authentication
- Request rate limiting
- CORS configuration
- Helmet for security headers