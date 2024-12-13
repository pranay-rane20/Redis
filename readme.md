# Redis Integration Example

This repository demonstrates how to integrate Redis into a Node.js application using the `ioredis` client. Redis is an in-memory data structure store commonly used as a database, cache, and message broker.

## Prerequisites

- **Node.js**: Ensure that Node.js is installed on your system. You can download it from the [official website](https://nodejs.org/).
- **Redis Server**: A running instance of Redis is required. You can download it from the [official website](https://redis.io/download) and follow the installation instructions.

## Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/pranay-rane20/Redis.git
   cd Redis
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

   This will install the required packages listed in `package.json`, including `ioredis`.

3. **Integrate Redis with Node.js**:

   - Install the Redis client library for Node.js using the following command:

     ```bash
     npm install ioredis
     ```

   - Use the following code snippet in your `app.js` file to create a Redis connection:

     ```javascript
     const Redis = require('ioredis');
     const redis = new Redis({
       host: 'localhost',
       port: 6379
     });

     redis.set("key", "value");
     redis.get("key", (err, result) => {
       if (err) console.error(err);
       console.log(result);
     });
     ```

4. **Create a Redis Account**:

   - Visit the [Redis Cloud](https://redis.com/try-free/) website.
   - Sign up for a free account by providing your details.
   - Once logged in, create a new Redis database instance.
   - Note down the connection details, such as host, port, and password, for later use.

5. **Install RedisInsight**:

   - Download RedisInsight from the [RedisInsight Download Page](https://redis.com/redis-enterprise/redis-insight/).
   - Install RedisInsight on your system and launch it.
   - Add your Redis server details in RedisInsight to monitor and manage your Redis database visually.

## Configuration

The application connects to Redis using default settings (localhost:6379). If your Redis server is running on a different host or port, or requires authentication, update the connection settings in `app.js`:

```javascript
const Redis = require('ioredis');
const redis = new Redis({
  host: 'your_redis_host',
  port: your_redis_port,
  password: 'your_redis_password',
});
```

## Usage

1. **Start the Application**:

   ```bash
   node app.js
   ```

2. **Application Functionality**:

   The application performs the following operations:

   - **Set a Key-Value Pair**: Stores a key-value pair in Redis.
   - **Retrieve the Value**: Fetches the value associated with the key from Redis.
   - **Delete the Key**: Removes the key-value pair from Redis.

   Check the console output to see the results of these operations.

## Project Structure

```
Redis/
├── maps/
├── .gitignore
├── app.js
├── package-lock.json
├── package.json
└── readme.md
```

- `maps/`: Directory for storing map-related data or configurations.
- `.gitignore`: Specifies files and directories to be ignored by Git.
- `app.js`: Main application file containing the Redis integration logic.
- `package-lock.json` & `package.json`: Manage project dependencies.
- `readme.md`: Provides information about the project.

## Dependencies

The project relies on the following npm package:

- [`ioredis`](https://www.npmjs.com/package/ioredis): A robust Redis client for Node.js.

To install it, run:

```bash
npm install ioredis
```

## Resources

- [Redis Official Website](https://redis.io/)
- [ioredis GitHub Repository](https://github.com/luin/ioredis)

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## Acknowledgements

Special thanks to the contributors of [ioredis](https://github.com/luin/ioredis) for providing a reliable Redis client for Node.js.

---

*Note: Ensure that your Redis server is properly secured, especially if it's accessible over a network. Use strong passwords and configure appropriate firewall rules to protect your data.*
