/*++++++++++++++++++++++++++++++++++++++++++++++++++
     * File name: book.js
     * Student Name: Imtiaj Hossain
     * StudentID: 301119638
     * Web App name: COMP229-F2021-MidTerm-301119638
+++++++++++++++++++++++++++++++++++++++++++++++++++++*/
// create a reference to the model
let Book = require("../models/book");

// Gets all books from the Database and renders the page to list all books.
module.exports.bookList = function (req, res, next) {
  Book.find((err, bookList) => {
    // console.log(bookList);
    if (err) {
      return console.error(err);
    } else {
      res.render("book/list", {
        title: "Book List",
        books: bookList,
      });
    }
  });
};

// Gets a book by id and renders the details page.
module.exports.details = (req, res, next) => {
  let id = req.params.id;

  Book.findById(id, (err, bookToShow) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      //show the edit view
      res.render("book/details", {
        title: "Book Details",
        book: bookToShow,
      });
    }
  });
};

// Renders the Add form using the add_edit.ejs template
module.exports.displayAddPage = (req, res, next) => {

  // ADD YOUR CODE HERE 
    //Render details to Add a new book view
  res.render("book/add_edit", {
    title: "Add a new book Page",
    url: "/book/add",
    book: {
      _id: "",
      Title: "",
      Price: "",
      Description: "",
      Author: "",
      Genre: "",
    },
  });
};

// Processes the data submitted from the Add form to create a new book
module.exports.processAddPage = (req, res, next) => {
  // ADD YOUR CODE HERE
  let { id, ...body } = req.body;
  let book = new Book(body);
  book.addBook((err, books) => {
    if (err) {
      console.log(err);
      res.end(error);
    } 
    //refresh the books page
    else {
      res.redirect("/book/list");
    }
  });
};

// Gets a book by id and renders the Edit form using the add_edit.ejs template
module.exports.displayEditPage = (req, res, next) => {
  // ADD YOUR CODE HERE
       //get id from body parameter 
    
      // Get the reference
  let id = req.params.id;
  //  Show the edit book details view
  Book.findById(id, (err, books) => {
    if (err){
      console.log(err);
      res.end(error);
    } else{
    res.render("book/add_edit", {
      title: "Edit book",
      url: "/book/edit/" + books._id,
      book: books,
    });}
  });
};

// Processes the data submitted from the Edit form to update a book
module.exports.processEditPage = (req, res, next) => {
  let { id, ...body } = req.body;
  Book.findByIdAndEdit(id, body, (err, books) => {
      if(err) {
        console.log(err);
        res.end(error);
      }
       // Refresh the books list
      else {
        res.redirect("/book/list");
      }
  })
};

// Deletes a book based on its id.
module.exports.performDelete = (req, res, next) => {
  // ADD YOUR CODE HERE
  let id = req.params.id;
  Book.findByIdAndDelete(id, (err, books) => {
      if(err) {
        console.log(err);
        res.end(error);
      }
      // Refresh the books list
      else {
        res.redirect("/book/list");
      }
  })
};
