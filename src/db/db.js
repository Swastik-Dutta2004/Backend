const mongoose = require("mongoose")

async function connectDB() {
    await mongoose.connect("mongodb+srv://backendLearning:KpLq29EtVrqxrUBG@learningbackend.jijgmsb.mongodb.net/jaggu")
    console.log("Connect to DB");
}

module.exports = connectDB