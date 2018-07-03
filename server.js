'use strict';

import Hapi from 'hapi';
import mongoose from 'mongoose';
//import dotenv from 'dotenv';

//dotenv.config();

// Create a server with a host and port
const server = Hapi.server({
  host: 'localhost',
  port: 3000
});

// Connect to database
mongoose
  .connect('mongodb://localhost/hapi-item')
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Add the route
server.route({
  method: 'GET',
  path: '/hello',
  handler: function(request, h) {
    return 'hello world';
  }
});

// Start the server
async function start() {
  try {
    await server.start();
  } catch (err) {
    console.log(err);
    process.exit(1);
  }

  console.log('Server running at:', server.info.uri);
}

start();
