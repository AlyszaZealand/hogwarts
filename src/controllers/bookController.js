const bookService = require('../services/bookService');

async function getBooks(req, res, next, service = bookService) {
    try {
        res.json(await service.listBooks());
    } catch (error) {
        next(error);
    }
}

module.exports = { getBooks };
