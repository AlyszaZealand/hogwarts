const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    status: {
        type: String,
        enum: ['available', 'borrowed'],
        required: true
    },
    borrowedBy: { type: String },
    borrowedAt: { type: Date }
}, { versionKey: false });

module.exports = mongoose.model('Book', bookSchema, 'hogwarts');
