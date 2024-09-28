const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes/todoRoute');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;  // Capitalized PORT for environment variable

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose
  .connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB...'))
  .catch((err) => console.log(err));

// Use Routes with a prefix
app.use('/api/todos', routes);  // Adding '/api/todos' as the route prefix

// Start server
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
