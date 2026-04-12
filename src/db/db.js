const mongoose  = require("mongoose");
require("dotenv").config();
async function connectDB(req,res) {
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log("DB connected");
    }
    catch(error){
        console.log(error);
    }
}

module.exports = connectDB