const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
var bcrypt = require("bcryptjs");

const app = express();

let corsOptions = {
  origin: "http://localhost:3000"
};

app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const db = require("./app/models");

const User = db.user;
const Account = db.account;

db.sequelize.sync({force: true}).then(() => {
  console.log('Drop and Resync Database with { force: true }');
  initial();
});

app.get("/", (req,res)=> {
  res.json({message: "hola amiguitos XD"});
});

require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);
require('./app/routes/account.routes')(app);
require('./app/routes/item.routes')(app);
const PORT = process.env.PORT || 3001;

app.listen(PORT, ()=>{
  console.log(`Servidor puerto ${PORT}`);
});

function initial() {
  User.create({
    username: "admin@unsa.com",
    email: "admin@unsa.com",
    password: bcrypt.hashSync("12345678", 8)
  });
  User.create({
    username: "ubhvvnjskdj@unsa.com",
    email: "ubhvvnjskdj@unsa.com",
    password: bcrypt.hashSync("6698cdygc0989cdsuguyg", 8)
  });
  Account.create({
    id: 1,
    firstname: "",
    lastname: "",
    email: "",
    phonenumber: "",
    country: "",
    estado: ""
  });
}
