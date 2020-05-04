

## Introduction
This is just a boilerplate project to feature some Node and React related technologies.

## Tech Stack
- Docker
- Node/Express
- Mongoose
- Logging (winston/morgan)
- JWT authentication using Passport.JS
- Sentry
- React (React Context to deal with state management)
- Material UI
- Jest + Enzyme

## Summary

- [Run](#run)
- [Project Structure](#Project-Structure)
- [Set up Express and React](#Set-up-Express-and-React)
- [Dockerize client and server](#Dockerize-client-and-server)
- [Logging](#Logging)

## Run
Project is executed using this command:

$ docker-compose up --build
or
$ docker-compose -f ./docker-compose.yml up --build

## Project Structure
What we mostly are trying to achieve is:
1. Provide a separate section for server initialization stage (db, routes, logger, etc)
2. Have our project logic divided into components/modules

Here are some guides I based project structure on:

- https://github.com/goldbergyoni/nodebestpractices/blob/master/sections/projectstructre/breakintcomponents.md
- https://blog.risingstack.com/node-hero-node-js-project-structure-tutorial/

## Set up Express and React
https://medium.com/@ABiasedHypocrite/simplest-and-fastest-react-express-app-setup-8497ed8db0d1

## Dockerize client and server
https://medium.com/@xiaolishen/develop-in-docker-a-node-backend-and-a-react-front-end-talking-to-each-other-5c522156f634

## Logging
https://www.digitalocean.com/community/tutorials/how-to-use-winston-to-log-node-js-applications

## VSC Debug configuration
You may want to add this configuration into VSC to debug server code:

```` javascript
  {
    "name": "Docker: My Project",
    "type": "node",
    "request": "attach",
    "port": 9229,
    "address": "localhost",
    "protocol": "inspector",
    "restart": false,
    "sourceMaps": false,
    "outFiles": [],
    "localRoot": "${workspaceFolder}/app",
    "remoteRoot": "/opt/app/myproject-app"
  }
````
