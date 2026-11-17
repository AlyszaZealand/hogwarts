const express = require('express');
const { getBooks, postBook, postBorrowBook } = require('../controllers/bookController');

function createBookRoutes(bookService) {
    const router = express.Router();

    router.get('/', (req, res, next) => getBooks(req, res, next, bookService));
    router.post('/', (req, res, next) => postBook(req, res, next, bookService));
    router.post('/:id/borrow', (req, res, next) => postBorrowBook(req, res, next, bookService));

    return router;
}

module.exports = createBookRoutes;
