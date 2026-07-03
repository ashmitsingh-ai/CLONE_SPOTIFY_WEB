const app = require("./SCR/app");
const connectDB = require("./SCR/DB/DB");
require('dotenv').config();


app.listen(3000, () =>{
    console.log("server is live now");
});

connectDB();

