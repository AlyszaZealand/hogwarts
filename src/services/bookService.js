const bookRepository = require('../repositories/bookRepository');

async function listBooks() {
    return bookRepository.findAll();
}

module.exports = { listBooks };
