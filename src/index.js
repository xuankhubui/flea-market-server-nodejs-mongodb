const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');
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

//initial document admin in collection roles and document admin in collection users
const initialAdmin = async () => {
  try {
    //check role
    let roles = await db.roles.find();
    if (!Array.isArray(roles) || roles.length == 0) {
      //create admin
      /*  const admin = await db.roles.insertOne({
         name: "admin",
         code: process.env.ADMIN
       }); */
      const admin = {
        name: "admin",
        code: process.env.ADMIN
      }
      await db.roles.create(admin);
      console.log("Admin created");
    }
  } catch (error) {
    console.log(error);
  }
}

initialAdmin();

router(express);

app.listen(process.env.PORT, `${process.env.HOST}`, () => {
  console.log(`Server is running on ${process.env.PORT}`);
})