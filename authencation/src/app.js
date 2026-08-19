const express = require("express")
const authRouter = require("./routes/user.routes")
const postRouter = require("./routes/test.routes")
const cookieParser = require("cookie-parser")

const app = express()
app.use(express.json())
app.use(cookieParser())


app.use("/api/auth", authRouter)
app.use("/api/auth",postRouter)

module.exports = app