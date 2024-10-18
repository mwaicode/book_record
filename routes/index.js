// index.js

require('dotenv').config(); // Load environment variables from .env

const express = require('express');
const bodyParser = require('body-parser');
const db = require('./models'); // Sequelize models
const booksRouter = require('./routes/books'); // Import books routes

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Basic route
app.get('/', (req, res) => {
  res.send('Welcome to the Book Record API!');
});

// Use Books Routes
app.use('/api/books', booksRouter);

// Test Database Connection
db.sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

// Sync database and start server
db.sequelize.sync()
  .then(() => {
    console.log('Database synchronized.');
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.error('Unable to sync database:', err);
  });
