const express = require("express")
const musicCreate = require("../controllers/music.controllers")
const multer = require("multer");
const authMiddelWare = require("../middleware/auth.middleware")
const uploadeFile = require("../services/storage.services");

const router = express.Router()

const upload = multer({
    storage: multer.memoryStorage()
})

router.post("/upload", authMiddelWare.authArtist, upload.single("music"), musicCreate.CreateMusic)
router.post("/album", authMiddelWare.authArtist, musicCreate.CreateAlbum)
router.post("/",musicCreate.getAllMusic)



module.exports = router