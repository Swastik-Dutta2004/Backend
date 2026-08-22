const musicModel = require("../models/music.model");
const {uploadeFile} = require("../services/storage.services")
const jwt = require("jsonwebtoken")

async function CreateMusic(req, res) {
    const token = req.body

    if (!token) {
        return res.status(401).json({
            message: "Unauthorized"
        })
    }

    try {
        const decoded = jwt.sign(token, process.env.JWT_SECRET)

        if (decoded.role !== "artist") {
            return res.status(410).json({
                message: "You have no access to create musics"
            })
        }

    } catch (error) {
        return res.status(401).json({
            message: "Unauthorized"
        })
    }

    const title = req.body
    const file = req.file

    const result = await uploadeFile(file.buffer.toString("base64"))

    const music = await musicModel.create({
        uri: result.uri,
        title,
        artist: decode.id
    })
    
    return res.status(200).json({
        message:"Music has been created successfully.",
        music:{
            id: music._id,  
            uri: music.uri,
            title: music.title,
            artist: music.artist
        }
    })
    
}

module.exports = CreateMusic    