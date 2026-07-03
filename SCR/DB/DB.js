const mongoose = require("mongoose");

async function connectDB(){
    try{
    await mongoose.connect(process.env.SERVER_KEY);
    console.log("database is now connect");
    }
    catch(error){
        console.error("connection failied can't connect database",error);
    }
}


module.exports = connectDB ;