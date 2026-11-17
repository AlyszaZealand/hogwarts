const assert = require('node:assert/strict');
const http = require('node:http');
const test = require('node:test');
const { createApp } = require('../../src/app');
const { initialBooks } = require('../../src/repositories/bookRepository');

test('GET /api/books returns the books as JSON', async () => {
    const server = http.createServer(createApp({
        listBooks: async () => initialBooks
    }));

    await new Promise(resolve => server.listen(0, resolve));
    const { port } = server.address();

    const response = await fetch(`http://127.0.0.1:${port}/api/books`);
    const body = await response.json();

    await new Promise(resolve => server.close(resolve));

    assert.equal(response.status, 200);
    assert.deepEqual(body, initialBooks);
});

test('POST /api/books creates a book', async () => {
    const createdBook = { _id: 'book-1', title: 'Quidditch Through the Ages', author: 'Kennilworthy Whisp', status: 'available' };
    const server = http.createServer(createApp({
        listBooks: async () => initialBooks,
        createBook: async book => ({ _id: 'book-1', ...book, status: 'available' })
    }));

    await new Promise(resolve => server.listen(0, resolve));
    const { port } = server.address();
    const response = await fetch(`http://127.0.0.1:${port}/api/books`, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ title: createdBook.title, author: createdBook.author })
    });
    const body = await response.json();

    await new Promise(resolve => server.close(resolve));

    assert.equal(response.status, 201);
    assert.deepEqual(body, createdBook);
});

test('POST /api/books/:id/borrow borrows a book', async () => {
    const borrowedBook = { _id: 'book-1', title: 'A Book', author: 'An Author', status: 'borrowed', borrowedBy: 'Hermione Granger' };
    const server = http.createServer(createApp({
        listBooks: async () => initialBooks,
        borrowBook: async (id, studentName) => ({ _id: id, title: borrowedBook.title, author: borrowedBook.author, status: 'borrowed', borrowedBy: studentName })
    }));

    await new Promise(resolve => server.listen(0, resolve));
    const { port } = server.address();
    const response = await fetch(`http://127.0.0.1:${port}/api/books/book-1/borrow`, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ studentName: 'Hermione Granger' })
    });
    const body = await response.json();

    await new Promise(resolve => server.close(resolve));

    assert.equal(response.status, 200);
    assert.deepEqual(body, borrowedBook);
});

test('borrowing without a student name returns 400', async () => {
    const server = http.createServer(createApp({
        listBooks: async () => initialBooks,
        borrowBook: async () => {
            const error = new Error('Student name is required');
            error.statusCode = 400;
            throw error;
        }
    }));

    await new Promise(resolve => server.listen(0, resolve));
    const { port } = server.address();
    const response = await fetch(`http://127.0.0.1:${port}/api/books/book-1/borrow`, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({})
    });
    const body = await response.json();

    await new Promise(resolve => server.close(resolve));

    assert.equal(response.status, 400);
    assert.equal(body.error, 'Student name is required');
});

test('borrowing an unknown book returns 404', async () => {
    const server = http.createServer(createApp({
        listBooks: async () => initialBooks,
        borrowBook: async () => {
            const error = new Error('Book not found');
            error.statusCode = 404;
            throw error;
        }
    }));

    await new Promise(resolve => server.listen(0, resolve));
    const { port } = server.address();
    const response = await fetch(`http://127.0.0.1:${port}/api/books/unknown/borrow`, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ studentName: 'Harry Potter' })
    });
    const body = await response.json();

    await new Promise(resolve => server.close(resolve));

    assert.equal(response.status, 404);
    assert.equal(body.error, 'Book not found');
});

test('borrowing an already borrowed book returns 409', async () => {
    const server = http.createServer(createApp({
        listBooks: async () => initialBooks,
        borrowBook: async () => {
            const error = new Error('Book is already borrowed');
            error.statusCode = 409;
            throw error;
        }
    }));

    await new Promise(resolve => server.listen(0, resolve));
    const { port } = server.address();
    const response = await fetch(`http://127.0.0.1:${port}/api/books/book-1/borrow`, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ studentName: 'Ron Weasley' })
    });
    const body = await response.json();

    await new Promise(resolve => server.close(resolve));

    assert.equal(response.status, 409);
    assert.equal(body.error, 'Book is already borrowed');
});

test('unexpected server errors return 500 and the server stays available', async () => {
    let requestCount = 0;
    const server = http.createServer(createApp({
        listBooks: async () => {
            requestCount += 1;
            if (requestCount === 1) {
                throw new Error('database connection failed');
            }
            return initialBooks;
        }
    }));

    await new Promise(resolve => server.listen(0, resolve));
    const { port } = server.address();

    const firstResponse = await fetch(`http://127.0.0.1:${port}/api/books`);
    const firstBody = await firstResponse.json();
    const secondResponse = await fetch(`http://127.0.0.1:${port}/api/books`);
    const secondBody = await secondResponse.json();

    await new Promise(resolve => server.close(resolve));

    assert.equal(firstResponse.status, 500);
    assert.equal(firstBody.error, 'Internal server error');
    assert.equal(secondResponse.status, 200);
    assert.deepEqual(secondBody, initialBooks);
});
