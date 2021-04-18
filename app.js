const express = require('express');
const app = express();
const ejsMate = require('ejs-mate');
const path = require('path');
const mongoose = require('mongoose');
const Book = require('./models/books');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

//Mongoose DB Connection Section
mongoose.connect('mongodb://localhost:27017/notebooks', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("Database connected!");
});

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/books', async (req, res) => {
    const books = await Book.find({});
    res.render('books/show.ejs', { books: books });
});

app.get('/books/new', (req, res) => {
    res.render('books/new');
})

app.post('/books/new', async (req, res) => {
    const book = new Book(req.body.book);
    await book.save();
    res.redirect('/books');
})

app.get('/books/:id', (req, res) => {
    res.render('books/book');
});

app.get('/books/edit/:id', (req, res) => {
    res.render('books/edit');
});




app.listen(3000, () => {
    console.log("Listning to port number 3000");
});