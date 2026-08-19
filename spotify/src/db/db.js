const moongose = require("mongoose")

async function ConnectDB() {
    try {
        
        await moongose.connect(process.env.MONGO_URL)
        console.log("Database is connected.");
    } catch (error) {

        console.log("Database is not connnected.")
    }

}

module.exports = ConnectDB