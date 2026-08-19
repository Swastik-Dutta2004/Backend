const express = require("express")
const cookiesParser = require("cookie-parser")

const app = express()
app.use(express.json())
app.use(cookiesParser())

module.exports = app