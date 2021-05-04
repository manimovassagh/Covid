'use strict';
const express = require('express');
let cors = require('cors')
let app = express();

console.log('this is server')
app.use(cors())

app.listen(80, err => console.log(err || 'Server läuft'));
app.get('/', function (req, res) {
    res.send('GET request to the homepage')
})