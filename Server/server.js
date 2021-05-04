'use strict';
const express = require('express');
const fs = require('fs')
let cors = require('cors')
const app = express();
app.use(cors())



//define routers
app.get('/', (req, res) => {
    fs.readFile('test.json', (err, data) => {
        if (err) throw err;
        else
        res.send(data.toString())
        
    });
    // console.log('request made')
})
app.get('/login', (req, res) => {
    res.send({ user: 'tried to login' })
})
app.get('/logout', (req, res) => {
    res.send({ user: 'tried to logout' })
})
app.get('/signup', (req, res) => {
    res.send({ user: 'Signup from this place' })
})

// define Ports and heroku settings
const PORT = process.env.PORT || 5000;
app.listen(PORT);