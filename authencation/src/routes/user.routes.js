const express = require("express")
const authController =  require("../controllers/auth.comtrollers")

const router = express.Router()

router.post("/resgister", authController.registerUser)

module.exports = router