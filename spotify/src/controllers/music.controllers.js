const musicModel = require("../models/music.model")
const uploadeFile = require("../services/storage.services")
const albumModel = require("../models/album.model")

async function CreateMusic(req, res) {

    const { title } = req.body
    const file = req.file

    if (!file) {
        return res.status(400).json({
            message: "Music file is required"
        })
    }

    const result = await uploadeFile(
        file.buffer.toString("base64")
    )

    const music = await musicModel.create({
        uri: result.url,
        title,
        artist: req.user.id
    })

    return res.status(201).json({
        message: "Music has been created successfully.",
        music: {
            id: music._id,
            uri: music.uri,
            title: music.title,
            artist: music.artist
        }
    })
}

async function CreateAlbum(req, res) {

    const { title, musics } = req.body

    const album = await albumModel.create({
        title,
        artist: req.user.id,
        music: musics
    })

    return res.status(200).json({
        message: "Album created successfully.",
        album: {
            id: album._id,
            title: album.title,
            artist: album.artist,
            music: album.music
        }
    })
}

async function getAllMusic(req, res) {
    const allMusic = await musicModel.find()

    return res.status(200).json({
        message: "Music featched successfully.",
        musis: allMusic,
    })
    
}

module.exports = { CreateMusic, CreateAlbum, getAllMusic } 