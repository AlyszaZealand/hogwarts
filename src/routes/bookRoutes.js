const express = require('express');
const { getBooks } = require('../controllers/bookController');

function createBookRoutes(bookService) {
    const router = express.Router();

    router.get('/', (req, res, next) => getBooks(req, res, next, bookService));

    return router;
}

module.exports = createBookRoutes;
