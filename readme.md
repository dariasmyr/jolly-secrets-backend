# Secret Santa Backend

## About The App

Welcome to the backend of Secret Santa - an application for secret gift exchange. This README provides a comprehensive guide to the backend structure, technologies, and performance considerations. Explore the innovative architecture, real-time communication features, and ways to contribute.

### Stack

- [**Nest JS**](https://nestjs.com/)
- [**Prisma**](https://www.prisma.io/)
- [**GraphQL**](https://graphql.org/)
- [**PostgreSQL**](https://www.postgresql.org/)
- [**Docker**](https://www.docker.com/)
- [**Telegraph**](https://telegra.ph/)
- [**Jest**](https://jestjs.io/)

### App Usage

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Set up the database using Prisma migrations.
4. Run the application using `npm run start`.
5. Access the GraphQL endpoint to interact with the API.

### Implemented Features

- **Real-time Communication:**
  - WebSocket-based chat system using Socket.IO library.
  - Enables instant messaging and notification delivery for a seamless user experience.

## Tech Details

### Architecture

#### Server Architecture

- Built on Nest JS framework with modular design for scalability.
- Each module represents a feature or entity, enhancing maintainability.

#### Database Architecture

- PostgreSQL for robust and relational data storage.
- Prisma ORM ensures seamless communication between Nest JS and PostgreSQL.

#### GraphQL API

- Flexible and efficient API for clients.
- Telegraph tool auto-generates GraphQL schema and resolvers based on Prisma schema.

#### Performance Considerations

- **Query Optimization:**
  - Prisma's type-safe query builder optimizes database queries.
  - Careful data selection minimizes unnecessary retrieval.
  
- **Caching Strategies:**
  - Implement caching for frequently requested data to reduce database queries.

- **Asynchronous Processing:**
  - Offload resource-intensive tasks to background jobs using tools like Bull.
  - Ensures critical processes do not impact immediate response time.

#### Real-time Communication Features

- **WebSocket Integration:**
  - Configured to handle WebSocket connections for bidirectional communication.

- **Instant Messaging:**
  - WebSocket-based chat system for instant message exchange.

- **Notification Delivery:**
  - Real-time communication extends to instant delivery of notifications.

## Used Materials

- List any external references, tutorials, or articles used during development.

## Configuration

- Set environment variables, including the database URL and WebSocket configuration.

## 📃 Get started (TL;DR)

```shell
# Init project
$ npx secret-santa-backend-cli new <project-name>

# Deploy database: 
$ npm run db:migrations:apply

# Seed DB: 
$ npm run db:seed

# Development run: 
$ npm run start:dev

# Production build: 
$ npm run build

# Production run: 
$ npm start:prod
```

## System endpoints
There are available debug endpoints for viewing project information (e.g., logs and DB data).

Logs
```shell
/logs/ # View logs
/logs/all # View all logs
/logs/error # View error logs
# Etc. See src/common/logger-serve/logger-serve.controller.ts
```

Database admin panel
```shell
/studio # Prisma Studio
```

## Docker-compose
```shell
# Launch
$ docker-compose up -d

# Rebuild and launch
$ docker-compose up -d --build
```

## Database workflow
```shell
# Edit schema: 
$ prisma/schema.prisma

# Format schema: 
$ npm run db:schema:format

# Create migration: 
$ npm run db:migrations:create

# Deploy migrations to database: 
$ npm run db:migrations:apply
```
More info about using Prisma: Prisma Documentation

## Tests
```shell
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

The project has ESLint configured, which checks the code for errors and warnings, and See also tsconfig.json for proper assembly and compilation of types. To check the code for errors and warnings - run the command npm run check. Prettier is also configured to format the code, run npm run format to format the code (but ESLint will still check it).

In addition, the project has a pre-commit hook configured to check the code for errors and warnings before each commit.
