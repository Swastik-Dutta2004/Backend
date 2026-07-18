const mongoose = require("mongoose")

async function connectdb(){
    await mongoose.connect("mongodb+srv://backendLearning:KpLq29EtVrqxrUBG@learningbackend.jijgmsb.mongodb.net/jaggu")
    console.log("connect db");
    
}

module.exports = connectdb