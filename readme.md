# Tote

Tote is an Azure Functions starter kit.

## Features

- [TypeScript](https://www.typescriptlang.org) for writing code
- [Webpack](https://webpack.js.org) for bundling
- [Prettier](https://prettier.io) for code formatting

## Prerequisites

- [Docker](https://docs.docker.com/compose)
- [Node](https://nodejs.org)
- [Yarn](https://yarnpkg.com)

## Guide

1. `yarn` to install dependencies
2. `yarn start` to fire up Docker and Webpack
3. Open http://localhost:7071/api/hello in your browser or REST client

### Docker config

If you plan to use multiple instances of this project locally, rename the containers in `docker-compose.yml`.

### Adding functions

To create a function, duplicate the `./src/hello` directory, rename to what you want, and add an export in `./src/index.ts`.

You also need to update `./src/newFunc/function.json` with the new `entrypoint` and perhaps `methods` to refect what kind of function it is.

### Environment variables

Create a `.env` file at the project root and add your config there. You will have to restart Docker for the changes to reflect.

### Developing

Look at the [docs](http://github.com/alizahid/tote-lib) for `tote-lib` to find out more options about the `Func` class.
