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

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

db.connect(`${process.env.DB_URL}`);

app.get("/", (req, res) => {
  console.log("Cookies: ", req.cookies);
  console.log("Signed Cookies: ", req.signedCookies);
  return res.send({
    connect: "connect success!"
  })
})

app.listen(process.env.PORT, `${process.env.HOST}`, () => {
  console.log(`Server is running on ${process.env.PORT}`);
})