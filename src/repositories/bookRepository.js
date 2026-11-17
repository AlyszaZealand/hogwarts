const Book = require('../models/book');

const initialBooks = [
    { title: 'Advanced Potion-Making', author: 'Libatius Borage', status: 'available' },
    { title: 'Hogwarts: A History', author: 'Bathilda Bagshot', status: 'available' },
    { title: 'The Standard Book of Spells', author: 'Miranda Goshawk', status: 'available' }
];

async function findAll() {
    return Book.find().select('-_id title author status').lean();
}

async function createBook(book) {
    return Book.create({ ...book, status: 'available' });
}

async function findById(id) {
    return Book.findById(id).lean();
}

async function borrowBook(id, studentName) {
    return Book.findOneAndUpdate(
        { _id: id, status: 'available' },
        { $set: { status: 'borrowed', borrowedBy: studentName, borrowedAt: new Date() } },
        { new: true, runValidators: true }
    ).lean();
}

async function seedBooks() {
    if (await Book.countDocuments() === 0) {
        await Book.insertMany(initialBooks);
    }
}

module.exports = { findAll, createBook, findById, borrowBook, seedBooks, initialBooks };
