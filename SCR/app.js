const express = require("express");
const cookieparser = require("cookie-parser");
const authRouter = require("./routes/user.routes");
const musicRouter = require("./routes/music.routes");




const app = express();
app.use(express.json());
app.use(cookieparser());



app.use('/api/auth',authRouter);
app.use('/api/artist',musicRouter);



module.exports = app;