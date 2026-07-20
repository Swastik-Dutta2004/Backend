const app = require("./src/app")
const connectDB = require("./src/db/db")

connectDB()

app.listen(6969 , () =>{
    console.log("Server running on post no. 6969");
})