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
├── app.ts          # Express app setup
├── server.ts       # Server entry point
├── config/         # Configuration files (database, env)
├── middleware/     # Custom middleware (error handling, validation)
├── modules/        # Feature modules
│   └── user/       # User module example
│       ├── user.controller.ts
│       ├── user.interface.ts
│       ├── user.model.ts
│       ├── user.route.ts
│       ├── user.service.ts
│       └── user.validation.ts
└── utils/          # Utility functions (AppError, logger, response)
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

### User
- `POST /api/users` - Create a new user

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
yarn format       # Format code with Prettier
```



## Modular Architecture

The template follows a modular pattern:

- **user.controller.ts**: Handles HTTP requests and responses for the user module.
- **user.service.ts**: Contains business logic and data processing for the user module.
- **user.model.ts**: Defines the database schema and validation for the user module.
- **user.route.ts**: Defines API endpoints and links to the user controller.
- **Middleware**: Handles cross-cutting concerns (auth, validation, errors)
- **Utils**: Shared utility functions

## Security Features

- Password hashing with bcrypt
- Request rate limiting
- CORS configuration
- Helmet for security headers