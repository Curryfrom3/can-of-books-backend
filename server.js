'use strict'

// REQUIRE
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const BookModel = require('./bookModel');

// bring in mongoose
const mongoose = require('mongoose');

// add validation to confirm we are wired up to our mongo DB
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Mongoose is connected');
});

// connect Mongoose to our MongoDB
mongoose.connect(process.env.DB_URL);

// USE
// implement express
const app = express();

// middleware
app.use(cors());
app.use(express.json());

// define PORT validate env is working
const PORT = process.env.PORT || 3002;

// ROUTES
app.get('/', (req, res) => {
  res.send('Welcome to my bookstore API!');
});

// Get all books
app.get('/books', async (req, res, next) => {
  try {
    const books = await BookModel.find({});
    res.status(200).send(books);
  } catch (error) {
    next(error);
  }
});

// Create a new book
app.post('/books', async (req, res, next) => {
  try {
    const newBook = new BookModel(req.body);
    const savedBook = await newBook.save();
    res.status(201).send(savedBook);
  } catch (error) {
    next(error);
  }
});

// Get a specific book
app.get('/books/:id', async (req, res, next) => {
  try {
    const book = await BookModel.findById(req.params.id);
    if (!book) {
      return res.status(404).send('Book not found');
    }
    res.status(200).send(book);
  } catch (error) {
    next(error);
  }
});

// Update a book
app.patch('/books/:id', async (req, res, next) => {
  try {
    const book = await BookModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!book) {
      return res.status(404).send('Book not found');
    }
    res.status(200).send(book);
  } catch (error) {
    next(error);
  }
});

// Delete a book
app.delete('/books/:id', async (req, res, next) => {
  try {
    const book = await BookModel.findByIdAndDelete(req.params.id);
    if (!book) {
      return res.status(404).send('Book not found');
    }
    res.status(200).send('Book deleted successfully');
  } catch (error) {
    next(error);
  }
});

// ERROR
app.use((error, req, res, next) => {
  console.error(error.stack);
  res.status(500).send('Something broke!');
});

// LISTEN
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
