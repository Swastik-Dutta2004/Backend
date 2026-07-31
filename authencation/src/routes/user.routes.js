const express = require("express")

const router = express.Router()

router.post("/resgister", (req, res) => {
    const {username, email, password} = req.body
})