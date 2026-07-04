require('dotenv').config();
const app = require("./SCR/app");
const connectDB = require("./SCR/DB/DB");


app.listen(3000, () =>{
    console.log("server is live now");
});

connectDB();


