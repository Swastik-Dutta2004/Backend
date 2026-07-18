const app = require("./src/app")

const connecteddDB = require("./src/db/db")

connecteddDB()

app.listen(6969, () => {
    console.log("Fuck off")
})