# Express blog with hexagonal architecture

## Why ?

This project exists, because I train in hexagonal architecture and the theory is good, but the practice is better, that's why I created this little project which uses the hexagonal architecture for a CRUD article creation system and database save.

Of course the project is very small and just allows you to see how the hexagonal architecture works.

## How ?

The project and under docker and docker compose that you can launch with the command "npm run docker" that will allow you to have everything to launch in an isolated way without installing anything, either on your machine (except docker).

For the database, you can use MongoDB or Mysql with Mongoose or Sequelize, the adapters are already created you just have to interchange them in the main.ts file as easily thanks to the hexagonal architecture.

I used the "UseCase" system in order to have the business logic split by case.
Each class in UseCase corresponds to its logic

The classes are very short with an "execute" function because we respect the unique responsibility of each case.

## Install

- Create an .env file that takes env.sample, you can keep the same values if you use docker compose and don't touch the docker-compose file. **If you don't want docker you will need to install dotenv in order to load the environment variables into the application**

- If you are using docker simply launch "npm run docker"

- You have access to phpmyadmin if you are using mysql: http://localhost:8080

- The express application runs on port 3000

## Use

Go to [application/api/APIAdapter](https://github.com/juliendu11/express-blog-hexagonal-architecture/blob/main/src/application/api/APIAdapter.ts) to see the call endpoints

## Test

I did not do all the tests only the use cases in the domain (in TDD)


:thinking: I am not 100% sure that I have respected the hexagonal architecture, I am starting in there, I am particularly not sure for the APIAdapter which must inject 3 interfaces which correspond to the 3 use cases, I wonder if it will not take just 1 as for the output port.

:thinking: I'm not even sure that the express application should be in "application" but rather in "infrastructure"

**If you are experienced in hexagonal architecture feel free to create an issue to tell me what is wrong :blush:**