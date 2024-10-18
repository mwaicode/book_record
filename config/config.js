// config/config.js

require('dotenv').config(); // Load environment variables from .env

module.exports = {
  development: {
    username: process.env.DB_USERNAME || 'book_user',
    password: process.env.DB_PASSWORD || 'password123',
    database: process.env.DB_DATABASE || 'book_db',
    host: process.env.DB_HOST || '127.0.0.1',
    port: process.env.DB_PORT || 5432,
    dialect: process.env.DB_DIALECT || 'postgres',
  },
  test: {
    username: process.env.DB_USERNAME || 'book_user',
    password: process.env.DB_PASSWORD || 'password123',
    database: process.env.DB_DATABASE_TEST || 'book_db_test',
    host: process.env.DB_HOST || '127.0.0.1',
    port: process.env.DB_PORT || 5432,
    dialect: process.env.DB_DIALECT || 'postgres',
  },
  production: {
    username: process.env.DB_USERNAME || 'book_user',
    password: process.env.DB_PASSWORD || 'password123',
    database: process.env.DB_DATABASE || 'book_db',
    host: process.env.DB_HOST || '127.0.0.1',
    port: process.env.DB_PORT || 5432,
    dialect: process.env.DB_DIALECT || 'postgres',
  },
};
