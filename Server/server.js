const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys')
require('./services/passport');



//connect to MongoDB Atlas
mongoose.connect(keys.mongoURI)

//execute server
const app = express();

//grab routers module
require('./routes/authRoutes')(app);

//define port
const PORT = process.env.PORT || 5000;
app.listen(PORT);
