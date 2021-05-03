'use strict';

const express = require('express');
let cors = require('cors')
let app = express();

app.use(express.static('../public'));

app.use(cors())

app.listen(80, err => console.log(err || 'Server läuft'));
app.get('./', (req, res) => {
    res.send('this is my server')
  
})