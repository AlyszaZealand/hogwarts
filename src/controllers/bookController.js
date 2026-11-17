const bookService = require('../services/bookService');

async function getBooks(req, res, next, service = bookService) {
    try {
        res.json(await service.listBooks());
    } catch (error) {
        next(error);
    }
}

async function postBook(req, res, next, service = bookService) {
    try {
        res.status(201).json(await service.createBook(req.body));
    } catch (error) {
        next(error);
    }
}

async function postBorrowBook(req, res, next, service = bookService) {
    try {
        res.json(await service.borrowBook(req.params.id, req.body && req.body.studentName));
    } catch (error) {
        next(error);
    }
}

module.exports = { getBooks, postBook, postBorrowBook };
