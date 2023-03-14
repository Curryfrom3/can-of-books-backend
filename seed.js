'use strict'
require('dotenv').config();
const mongoose = require('mongoose');
const Book = require('./bookModel');

mongoose.connect(process.env.DB_URL);

const books = [
  {
    title: 'To Kill a Mockingbird',
    author: 'author',
    description: 'A Pulitzer Prize-winning novel about racism and injustice in a small Southern town during the Great Depression.',
    publicationDate: new Date('1960-07-11'),
    pageCount: 281,
    genre: ['Historical fiction', 'Southern Gothic']
  },
  {
    title: 'The Great Gatsby',
    author: 'author',
    description: 'A novel about the decadence and excess of the Roaring Twenties.',
    publicationDate: new Date('1925-04-10'),
    pageCount: 218,
    genre: ['Historical fiction', 'Tragedy']
  },
  {
    title: '1984',
    author: 'author',
    description: 'A dystopian novel about a totalitarian regime that controls every aspect of citizens\' lives.',
    publicationDate: new Date('1949-06-08'),
    pageCount: 328,
    genre: ['Dystopian', 'Political fiction']
  }
];

Book.create(books)
  .then(() => {
    console.log('Database seeded successfully');
    mongoose.connection.close();
  })
  .catch((err) => {
    console.error(err);
    mongoose.connection.close();
  });
