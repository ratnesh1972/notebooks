const mongoose = require('mongoose');
const Book = require('../models/books');

//Mongoose DB Connection Section
mongoose.connect('mongodb://localhost:27017/notebooks', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("Database connected!");
});

const seeds = async () => {

    await Book.deleteMany({});

    await Book.insertMany([
        {
            title: 'Mrutyunjay',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            quote: 'You wont win, until you lose!',
            Image: 'https://images.unsplash.com/photo-1474366521946-c3d4b507abf2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
            rating: 3,
        },
        {
            title: 'Sita the warrior of mithila',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            quote: 'You wont win, until you lose!',
            Image: 'https://images.unsplash.com/photo-1474366521946-c3d4b507abf2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
            rating: 1,
        },
        {
            title: 'Half Girlfriend',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            quote: 'You wont win, until you lose!',
            Image: 'https://images.unsplash.com/photo-1474366521946-c3d4b507abf2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
            rating: 2,
        }
    ]);
}

seeds().then(() => {
    console.log("Seeds file complete!");
    mongoose.connection.close();
});
