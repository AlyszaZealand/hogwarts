const mongoose = require('mongoose');
const bookRepository = require('../repositories/bookRepository');

function createHttpError(statusCode, message) {
    const error = new Error(message);
    error.statusCode = statusCode;
    return error;
}

async function listBooks() {
    return bookRepository.findAll();
}

async function createBook(book) {
    if (!book || !book.title || !book.author) {
        throw createHttpError(400, 'Title and author are required');
    }

    return bookRepository.createBook({
        title: book.title,
        author: book.author
    });
}

async function borrowBook(id, studentName) {
    if (!studentName || typeof studentName !== 'string' || !studentName.trim()) {
        throw createHttpError(400, 'Student name is required');
    }
    if (!mongoose.isValidObjectId(id)) {
        throw createHttpError(404, 'Book not found');
    }

    const borrowedBook = await bookRepository.borrowBook(id, studentName.trim());
    if (borrowedBook) {
        return borrowedBook;
    }

    const existingBook = await bookRepository.findById(id);
    if (!existingBook) {
        throw createHttpError(404, 'Book not found');
    }

    throw createHttpError(409, 'Book is already borrowed');
}

module.exports = { listBooks, createBook, borrowBook };
