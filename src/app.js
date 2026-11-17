const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const { seedBooks } = require('./repositories/bookRepository');
const createBookRoutes = require('./routes/bookRoutes');

function createApp(bookService) {
    const app = express();

    app.use(express.json());
    app.use(morgan('dev'));
    app.use('/api/books', createBookRoutes(bookService));
    app.use((error, req, res, next) => {
        if (res.headersSent) {
            return next(error);
        }

        const statusCode = Number.isInteger(error.statusCode)
            && error.statusCode >= 400
            && error.statusCode < 600
            ? error.statusCode
            : 500;
        const message = statusCode === 500
            ? 'Internal server error'
            : error.message;

        res.status(statusCode).json({ error: message });
    });

    return app;
}

async function startServer() {
    await mongoose.connect('mongodb://127.0.0.1:27017/hogwarts');
    await seedBooks();
    console.log('MongoDB tilsluttet');

    const app = createApp();
    app.listen(3000, () => console.log('Server klar på http://localhost:3000/api/'));
}

if (require.main === module) {
    startServer().catch(err => {
        console.error('MongoDB fejl:', err);
        process.exitCode = 1;
    });
}

module.exports = { createApp };