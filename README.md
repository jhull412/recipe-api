# Recipe API

This is the API project that supports the front-end React Project [Recipe-App](https://github.com/jhull412/recipe-app)

## Installation

`npm i`

## Usage

Locally, it utilizes a MySQL DB running in docker.

`docker-compose up`

To reset the database, run the following:

`npm run db:reset`

To start the service for development, run:

`npm run dev`

For production build, run the following:

`npm run build`
`npm start`

## Project Structure

- `src`: Contains TypeScript source files
  - `index.ts`: Configures and starts the Express application
- `dist`: Output directory created during build for compiled TypeScript files
- `package.json`: Project configuration and dependencies
- `tsconfig.json`: TypeScript configuration
