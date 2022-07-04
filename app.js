const express = require('express');
const bodyParser = require('body-parser');
var session = require('express-session');
const router = require('./routes/userRoutes');
const flash = require('express-flash');
const cookieParser = require('cookie-parser');
const app = express();

app.use(
  session({
    secret: 'jahsdjh651a6s51dae',
    resave: false,
    saveUninitialized: false,
    httpOnly: true, //prevent js from accessing cookies
    secure: true, // only set cookies over https
    ephemeral: true, //destroy cookies when browser closes
    sameSite: 'none',
  })
);
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(cookieParser());
app.use(flash());
app.use(express.json());
app.use('/', router);

const port = process.env.port || 8000;
app.listen(port, (err) => {
  if (err) console.log(err);
});
