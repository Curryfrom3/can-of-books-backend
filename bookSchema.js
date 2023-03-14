'use strict'

const mongoose = require('mongoose');

// Define the schema for your book data
const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  description: String,
  publicationDate: Date,
  pageCount: Number,
  genre: [String]
});

// Export the schema so it can be used in other files
module.exports = bookSchema;
