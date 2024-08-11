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
    let users = await db.users.find();
    let findAdminRole = await db.roles.findOne({ code: { $in: [process.env.ADMIN] } });
    let findAdminUser = await db.users.findOne({ role: { $in: [findAdminRole] } })
    if (!Array.isArray(roles) || roles.length == 0 || findAdminRole == null) {
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

      let adminRole = await db.roles.findOne({ code: { $in: [process.env.ADMIN] } });

      //security
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash("123456", salt);

      //create admin user
      const user = {
        username: 'admin',
        password: hashedPassword,
        email: 'admin.kent@gmail.com',
        firstName: 'admin',
        lastName: 'admin',
        role: adminRole._id,
      };
      await db.users.create(user);
    } else {
      if (!Array.isArray(users) || users.length == 0 || findAdminUser == null) {
        let adminRole = await db.roles.findOne({ code: { $in: [process.env.ADMIN] } });

        //security
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash("123456", salt);

        //create admin user
        const user = {
          username: 'admin',
          password: hashedPassword,
          email: 'admin.kent@gmail.com',
          firstName: 'admin',
          lastName: 'admin',
          role: adminRole._id,
        };
        await db.users.create(user);
      } else {
        console.log(`${users.length} user found`);
      }
      console.log(`${roles.length} role found`);
      console.log(`${users.length} user found`);
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