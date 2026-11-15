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
