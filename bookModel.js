'use strict'


const mongoose = require('mongoose');
const bookSchema = require('./bookSchema');

// Create the Book model using the schema
const Book = mongoose.model('Book', bookSchema);

// Export the model so it can be used in other files
module.exports = Book;