const express = require('express');
const connectDB = require('./db.js');
const BookRoute = require('./routes/api/book.js');
const cors = require('cors');

const app = express();

// Connect Database
connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

// use Routes
app.use('/api/books', BookRoute);

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));
