const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/hogwarts')
    .then(() => console.log('MongoDB tilsluttet'))
    .catch(err => console.error('MongoDB fejl:', err));



app.listen(3000, () => console.log('Server klar på http://localhost:3000/api/'));