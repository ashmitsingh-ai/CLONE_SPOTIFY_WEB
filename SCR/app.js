const express = require("express");
const cookieparser = require("cookie-parser");





const app = express();
app.use(expres.json());
app.use(cookieparser());






module.exports = app;