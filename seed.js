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
  },
  {
    title: 'Who Moved My Cheese?',
    author: 'Spencer Johnson',
    description: 'A motivational book that tells a parable about dealing with change in life and work.',
    publicationDate: new Date('1998-09-08'),
    pageCount: 96,
    genre: ['Self-help', 'Business']
  },
  {
    title: 'Rich Dad Poor Dad',
    author: 'Robert Kiyosaki',
    description: 'A personal finance book that promotes financial independence through investing, real estate, and entrepreneurship.',
    publicationDate: new Date('1997-04-01'),
    pageCount: 207,
    genre: ['Personal finance', 'Business']
  },
  {
    title: 'The Subtle Art of Not Giving a F*ck',
    author: 'Mark Manson',
    description: 'A self-help book that challenges readers to focus on what truly matters in life and let go of things that don\'t.',
    publicationDate: new Date('2016-09-13'),
    pageCount: 212,
    genre: ['Self-help', 'Motivational']
  },
  {
    title: 'Coding For Dummies',
    author: 'Nikhil Abraham',
    description: 'A beginner\'s guide to programming that covers basics of coding, web development and software engineering.',
    publicationDate: new Date('2015-08-10'),
    pageCount: 384,
    genre: ['Computer Science', 'Programming']
  },
  {
    title: 'Everything is F*cked: A Book About Hope',
    author: 'Mark Manson',
    description: 'A book that explores the tension between hope and despair in modern society and offers a new perspective on life.',
    publicationDate: new Date('2019-05-14'),
    pageCount: 288,
    genre: ['Self-help', 'Motivational']
  }
  
    {
    title: 'The Lovely Bones',
    author: 'Alice Sebold',
    description: 'A novel about a teenage girl who is raped and murdered and watches from her personal Heaven as her family and community struggle to move on without her.',
    publicationDate: new Date('2002-07-03'),
    pageCount: 328,
    genre: ['Fiction', 'Suspense']
  },
  {
    title: 'I Know Why the Caged Bird Sings',
    author: 'Maya Angelou',
    description: 'An autobiography about the early years of African-American writer and poet Maya Angelou.',
    publicationDate: new Date('1969-01-01'),
    pageCount: 304,
    genre: ['Autobiography', 'Memoir']
  },
  {
    title: 'Invisible Man',
    author: 'Ralph Ellison',
    description: 'A novel about a nameless African-American man navigating his way through America’s prejudice and racism in the mid-twentieth century.',
    publicationDate: new Date('1952-04-14'),
    pageCount: 608,
    genre: ['Fiction', 'African-American literature']
  },
  {
    title: 'The Power of Habit',
    author: 'Charles Duhigg',
    description: 'A self-help book that teaches readers how to create good habits and break bad ones.',
    publicationDate: new Date('2012-02-28'),
    pageCount: 416,
    genre: ['Self-help', 'Psychology']
  },
  {
    title: 'Predictably Irrational',
    author: 'Dan Ariely',
    description: 'A book about human decision-making and how people often make irrational choices.',
    publicationDate: new Date('2008-02-19'),
    pageCount: 384,
    genre: ['Non-fiction', 'Psychology']
  },
  {
    title: 'The Holy Bible',
    author: 'Various',
    description: 'A collection of religious texts revered by Christians as the inspired word of God.',
    publicationDate: new Date('400 AD'),
    pageCount: 1200,
    genre: ['Religious', 'Spiritual']
  },
  {
    title: 'How Not to Die',
    author: 'Michael Greger',
    description: 'A book about the benefits of a plant-based diet and how it can help prevent and reverse chronic diseases.',
    publicationDate: new Date('2015-12-08'),
    pageCount: 576,
    genre: ['Health', 'Nutrition']
  },
  {
    title: 'Being Mortal',
    author: 'Atul Gawande',
    description: 'A book about the importance of end-of-life care and how it can improve the lives of both patients and their families.',
    publicationDate: new Date('2014-10-07'),
    pageCount: 304,
    genre: ['Non-fiction', 'Medicine']
  },
  {
    title: 'The Daily Stoic',
    author: 'Ryan Holiday and Stephen Hanselman',
    description: 'A book that offers a year-long program of daily Stoic meditations and exercises.',
    publicationDate: new Date('2016-10-18'),
    pageCount: 416,
    genre: ['Philosophy', 'Self-help']
  },

  {
    title: 'Charlotte\'s Web',
    author: 'E.B. White',
    description: 'A children\'s novel about the friendship between a pig named Wilbur and a spider named Charlotte.',
    publicationDate: new Date('1952-10-15'),
    pageCount: 184,
    genre: ['Children\'s literature', 'Fiction']
  },
  {
    title: 'The Lion, The Witch and The Wardrobe',
    author: 'C.S. Lewis',
    description: 'A children\'s novel about four siblings who enter a magical world called Narnia, where they meet talking animals and battle the evil White Witch.',
    publicationDate: new Date('1950-10-16'),
    pageCount: 206,
    genre: ['Children\'s literature', 'Fantasy']
  },
  {
    title: 'Brown Girl Dreaming',
    author: 'Jacqueline Woodson',
    description: 'A memoir in verse about growing up as an African American girl in the 1960s and 1970s.',
    publicationDate: new Date('2014-08-28'),
    pageCount: 336,
    genre: ['Memoir', 'Poetry']
  },
  {
    title: 'The Giving Tree',
    author: 'Shel Silverstein',
    description: 'A children\'s picture book about the relationship between a tree and a young boy throughout his life.',
    publicationDate: new Date('1964-01-01'),
    pageCount: 64,
    genre: ['Children\'s literature', 'Fiction']
  },
  {
    title: 'The Kama Sutra',
    author: 'Vatsyayana',
    description: 'An ancient Indian text on human sexual behavior and pleasure.',
    publicationDate: new Date('2nd century CE'),
    pageCount: 240,
    genre: ['Non-fiction', 'Sexuality']
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
