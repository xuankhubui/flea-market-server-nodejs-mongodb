const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');
// CROS middleware 
/*
app.use(function(req, res, next) {
    // Mọi domain
    res.header("Access-Control-Allow-Origin", "*");
   
    // Domain nhất định
    // res.header("Access-Control-Allow-Origin", "https://freetuts.net");
   
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
*/
const cookieParser = require('cookie-parser');
const db = require('./models');
const bcrypt = require('bcrypt');
const router = require('./routers');
dotenv.config();

app.listen(8080,"127.0.0.1", () => {
    console.log(`Server is running on port`);
} )