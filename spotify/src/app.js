const express = require("express")
const cookiesParser = require("cookie-parser")
const ConnectDB = require("./db/db")
const authRouter = require("./routes/auth.routes")

const app = express()
app.use(express.json())
app.use(cookiesParser())

app.use("/api/auth", authRouter)

ConnectDB()

module.exports = app