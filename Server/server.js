const express = require('express');
require('./services/passport');

//execute server
const app = express();

//grab routers module
require('./routes/authRoutes')(app);

//define port
const PORT = process.env.PORT || 5000;
app.listen(PORT);
