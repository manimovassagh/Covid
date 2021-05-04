'use strict';
const express = require('express');
let cors = require('cors')
const app = express();

app.use(cors())

app.get('/', (req,res)=>{
    res.send({hi:'there'})
    console.log('request made')
   })
app.get('/login', (req,res)=>{
    res.send({user:'tried to login'})
})
app.get('/logout', (req,res)=>{
    res.send({user:'tried to logout'})
})
app.listen(5000, err => console.log(err || 'Server läuft'));