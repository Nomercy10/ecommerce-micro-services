# Ecommerce micro-services demo
## _A demo to showcase micro-services build using NodeJs, Express & MongoDB_

This repo currently, has two micro-services
- Users : A micro-service which has basic user features/functionalities like CRUD and order CRUD
- Orders : A micro-service which has basic order features/functionalities like CRUD order

## Features

- GET all orders for a user
- GET single order for a user
- GET single user
- GET all users
- GET all orders for an user
- GET an order for a user
- Create an order for a user
- Create new user
- Create new order for a user
- DEL a single order
- DEL all orders for a user
- DEL user by userId
- DEL all the orders for an user


## Tech

- [node.js] - evented I/O for the backend
- [Express] - fast node.js network app framework [@tjholowaychuk]
- [Mongo DB] - great UI boilerplate for modern web apps

And of course this repo itself is open source on GitHub.

## Installation

### Postman
- Requires Postman to run the APIs
- Use `ecommerce microservice demo.postman_collection.json` from the repo root and import in your postman.

#### Users
Requires [Node.js](https://nodejs.org/) v10+ to run.

Install the dependencies and devDependencies and start the server.

```sh
cd Users
npm i --save express mongoose body-parser axios nodemon
nodemon Users.js
```

#### Orders
Requires [Node.js](https://nodejs.org/) v10+ to run.

Install the dependencies and devDependencies and start the server.

```sh
cd Orders
npm i --save express mongoose body-parser axios nodemon
nodemon Orders.js
```



## License

MIT

**Free Software, Hell Yeah!**

   [node.js]: <http://nodejs.org>
   [Mongo DB]: <https://www.mongodb.com//>
   [express]: <http://expressjs.com>
