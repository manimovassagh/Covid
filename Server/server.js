'use strict';
const express = require('express');
// const fs = require('fs')
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys')
const app = express();

passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
}, (accessToken) => {
    console.log(accessToken)
})
);

app.get('/auth/google',passport.authenticate('google'),{
    scope:['profile','email']
})

//Define routers-------------------------

// app.get('/',(req,res)=>{
//     fs.readFile('test.json',(err,data)=>{
//         if(err) throw err;
//         else {
//             res.send(data.toString())
//         }
//     })

// })
// app.get('/greeting', (req, res) => {
//     res.send({ hi: 'there' })
// })
// app.get('/login', (req, res) => {
//     res.send({ userLogin: 'tried to login' })
// })
// app.get('/logout', (req, res) => {
//     res.send({ userLogout: 'tried to logout' })
// })
// app.get('/signup', (req, res) => {
//     res.send({ userSignup: 'Signup from this place' })
// })
// app.get('/*', (req, res) => {
//     res.send({ userSignup: 'Signup from this place' })
// })

// Define Ports and heroku settings--------------------
const PORT = process.env.PORT || 5000;
app.listen(PORT, (err) => console.log(err || 'Server Working Smooth!'));