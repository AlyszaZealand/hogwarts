const Book = require('../models/book');

const initialBooks = [
    { title: 'Advanced Potion-Making', author: 'Libatius Borage', status: 'available' },
    { title: 'Hogwarts: A History', author: 'Bathilda Bagshot', status: 'available' },
    { title: 'The Standard Book of Spells', author: 'Miranda Goshawk', status: 'available' }
];

async function findAll() {
    return Book.find().select('-_id title author status').lean();
}

async function seedBooks() {
    if (await Book.countDocuments() === 0) {
        await Book.insertMany(initialBooks);
    }
}

module.exports = { findAll, seedBooks, initialBooks };
