// Importing the express module to create a web server
const express = require('express');
const app = express();

// Importing the axios library to make HTTP requests
const axios = require('axios')

// Importing the ioredis library to interact with a Redis database
const Redis = require('ioredis')

// Loading environment variables from a .env file
require('dotenv').config()

// Configuring the Redis client with connection details from environment variables
const redis = new Redis({
    host: process.env.HOST, // Redis server host
    port: process.env.PORT, // Redis server port
    password: process.env.PASSWORD // Redis server password
})

// Event listener for successful Redis connection
redis.on('connect', () => {
    console.log('redis connected') // Logs when Redis connection is established
})

// Setting up a route for the root endpoint
app.get('/', (req, res) => {
    res.send('hello world') // Responds with a simple message
})

// Setting up a route to handle requests to '/create-ride'
app.get('/create-ride', async (req, res) => {
    // Checking if the data is already cached in Redis with a specific key
    const isDataCached = await redis.get('indrapuri&MP')

    // If data is found in cache, return the cached data and exit
    if (isDataCached) return res.send(isDataCached);

    // If data is not in cache, make an HTTP request to fetch it
    const result = await axios.get('http://localhost:3001/distance')
    const data = result.data // Extracting the data from the response

    // Storing the fetched data in Redis with a specific key
    redis.set('indra&MP', JSON.stringify(data))
    //For setting expiration time of 5 sec
    // redis.setEx('indra&MP',5, JSON.stringify(data))


    // Sending the fetched data as the response
    res.send(data);   
})

// Starting the server on port 3000 and logging the server URL
app.listen(3000, () => {
    console.log('Server is running http://localhost:3000');
});
