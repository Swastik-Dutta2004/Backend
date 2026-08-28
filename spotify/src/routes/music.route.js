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
router.get("/", authMiddelWare.authUser, musicCreate.getAllMusic)
router.get("/album", authMiddelWare.authUser, musicCreate.getAllAlbum)


module.exports = router