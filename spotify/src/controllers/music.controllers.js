const musicModel = require("../models/music.model")
const albumModel = require("../models/album.model")
const uploadeFile = require("../services/storage.services")

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
    const allMusic = await musicModel.find().populate("artist")

    return res.status(200).json({
        message: "Music featched successfully.",
        musis: allMusic,
    })

}


async function getAllAlbum(req, res) {
    try {
        const allAlbum = await albumModel
            .find()
            .select("title artist")
            .populate("artist", "username")

        return res.status(200).json({
            message: "Albums are fetched successfully.",
            album: allAlbum
        })

    } catch (error) {
        console.log(error)

        return res.status(500).json({
            message: error.message
        })
    }
}


async function getAlbumById(req, res) {
    const albumId = req.params.albumId

    const album = await albumModel.findById(albumId).populate("artist", "username email")

    return res.status(200).json({
        message: "Album fetched successfully.",
        album: album
    })
    
}

module.exports = { CreateMusic, CreateAlbum, getAllMusic, getAllAlbum, getAlbumById } 