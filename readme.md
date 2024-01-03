<img src="docs/logo.png"
     alt="Logo"
     style="float: left; margin-right: 0px;" />

# Jolly Secrets Backend

## About The App

[**Jolly Secrets**](https://jollysecrets-api.uxna.me/graphql) - a TypeScript application for secret gift exchange, written on [**Nest JS**](https://nestjs.com/). [**Prisma.io**](https://www.prisma.io/) and [**PostgreSQL**](https://www.postgresql.org/) for data storage. This app uses [**GraphQL**](https://graphql.org/) API to interact with [**Jolly Secrets Frondend**](https://github.com/dariasmyr/secret-santa-frontend)

### Stack

- [**Nest JS**](https://nestjs.com/)
- [**Prisma**](https://www.prisma.io/)
- [**GraphQL**](https://graphql.org/)
- [**PostgreSQL**](https://www.postgresql.org/)
- [**Docker**](https://www.docker.com/)
- [**Telegraph**](https://telegra.ph/)
- [**Jest**](https://jestjs.io/)

## Prerequisites
Before you begin, ensure you have the following installed on your machine:

`Node.js (version >= 14)`

`npm (usually comes with Node.js installation)`

## Getting Started

Clone the repository:

```bash
npx degit dariasmyr/secret-santa-backend my-backend-app
```

Install Dependencies:

```bash
npm install
```

### Development Mode:

To run the project in development mode with automatic restarts (using Nodemon), use:

```bash
npm run start:dev
```

### Production Mode:

To run the project in production mode, use:

```bash
npm run start:prod
```

This command will build the project using the TypeScript compiler and then start the application.

### Testing:

Run unit tests using:

```bash
npm test
```
The project has ESLint configured, which checks the code for errors and warnings, and See also tsconfig.json for proper assembly and compilation of types. To check the code for errors and warnings - run the command npm run check. Prettier is also configured to format the code, run npm run format to format the code (but ESLint will still check it).

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

### Linting:

To check your code for linting errors:

```bash
npm run lint
```

To automatically fix linting errors:

```bash
npm run lint:fix
```

Additional Scripts

`npm run ts:check`: Run TypeScript type checking without emitting files.
`npm run check`: Run TypeScript type checking and linting.
`npm run test:e2e`: Run end-to-end tests using Jest with a custom configuration.
`npm run test:debug`: Run tests in debug mode.

### Updating Dependencies
To update project dependencies, you can use the following command to check for updates and update your package.json:

```bash
npm run update
```

In addition, the project has a pre-commit hook configured to check the code for errors and warnings before each commit.
