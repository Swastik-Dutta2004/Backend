const mongoose = require("mongoose")

async function connectDB(){
    await mongoose.connect("mongodb+srv://backendLearning:KpLq29EtVrqxrUBG@learningbackend.jijgmsb.mongodb.net/project-1")

    console.log("DB is connected.");
    
}

module.exports = connectDB()