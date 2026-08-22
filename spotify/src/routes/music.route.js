const express = require("express")
const musicControler = require("../controllers/music.controllers")

const router = express.Router()
router.post("/upload", musicControler.CreateMusic)


module.exports = router