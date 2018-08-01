'use strict';

import Hapi from 'hapi';
import mongoose from 'mongoose';
const ItemController = require('./controllers/item');
const FibController = require('./controllers/fibonacci');

//dotenv.config();

// Create a server with a host and port
const server = Hapi.server({
  host: 'localhost',
  port: 3000
});

// Connect to database
// mongoose
//   .connect('mongodb://localhost:27017/hapi-item')
//   .then(() => console.log('MongoDB Connected'))
//   .catch(err => console.log(err));

// Add the route
server.route({
  method: 'GET',
  path: '/hello',
  handler: function(request, h) {
    return 'hello world';
  }
});

// Home route
server.route({
  method: 'GET',
  path: '/',
  handler: (request, h) => {
    return 'Test the first route';
  }
});

// @route   GET api/items/
// @desc    List all Items
// @access  Public
// @CRUD
server.route({
  method: 'GET',
  path: '/api/items',
  handler: ItemController.list
});

server.route({
  method: 'POST',
  path: '/api/items',
  handler: ItemController.create
});

// Fibonacci
server.route({
  method: 'GET',
  path: '/api/fibonacci',
  handler: FibController.fib
});

// Start the server
async function start() {
  try {
    await server.start();
    mongoose
      .connect(
        'mongodb://localhost:27017/hapi-item',
        {}
      )
      .then(
        () => {
          console.log(`Connected to Mongo server`);
        },
        err => {
          console.log(err);
        }
      );
    //registerRoutes();
    console.log(`Server running at: ${server.info.uri}`);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }

  //console.log(`Server running at: ${server.info.uri}`);
}

start();
