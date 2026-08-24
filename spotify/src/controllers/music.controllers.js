const musicModel = require("../models/music.model")
const uploadeFile = require("../services/storage.services")
const albumModel = require("../models/album.model")
const jwt = require("jsonwebtoken")

async function CreateMusic(req, res) {

    const token = req.cookies.token

    if (!token) {
        return res.status(401).json({
            message: "Unauthorised"
        })
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        if (decoded.role !== "artist") {
            return res.status(403).json({
                message: "You have no access to create music"
            })
        }

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
            artist: decoded.id
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

    } catch (error) {
        console.error(error)

        return res.status(401).json({
            message: "Unauthorised"
        })
    }
}

async function CreateAlbum(req, res) {
    const token = req.cookies.token

    if (!token) {
        return res.status(401).json({
            message: "Unathorised"
        })
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        if (decoded.role !== "artist") {
            return res.status(401).json({
                message: "You have no accessed to create album."
            })
        }

        const { title, musicIds } = req.body

        const album = await albumModel.create({
            title,
            artist: decoded.id,
            music: musicIds
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

    } catch (error) {
        return res.status(401).json({
            message: "Unathorised"
        })
    }
}

module.exports = CreateMusic