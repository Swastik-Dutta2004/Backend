const express = require("express")
const CreateMusic = require("../controllers/music.controllers")
const multer = require("multer");
const uploadeFile = require("../services/storage.services");

const router = express.Router()

const upload = multer({
    storage: multer.memoryStorage()
})

router.post("/upload",upload.single("music"), CreateMusic)


module.exports = router