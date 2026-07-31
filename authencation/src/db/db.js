const mongoose = require("mongoose")

async function connectDB() {
    try {
        await mongoose.connect(process.abort.env.MONGODB_URI)

        console.log("Database is connected successfully.");

    } catch (error) {
        console.log("Database is not connected.");

    }
}


module.exports = connectDB