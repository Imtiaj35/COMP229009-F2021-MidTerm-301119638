/*++++++++++++++++++++++++++++++++++++++++++++++++++
     * File name: book.js
     * Student Name: Imtiaj Hossain
     * StudentID: 301119638
     * Web App name: COMP229-F2021-MidTerm-301119638
+++++++++++++++++++++++++++++++++++++++++++++++++++++*/
let mongoose = require('mongoose');

// Create a model class
let bookModel = mongoose.Schema(
    {
        Title: String,
        Description: String,
        Price: Number,
        Author: String,
        Genre: String
    },
    {
        collection: "books"
    }
);

module.exports = mongoose.model('Book', bookModel);