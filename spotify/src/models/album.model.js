const mongoose = require("mongoose")

const albumSchema = new mongoose.Schema({
    title:{
        type: String,
        require: true,
    },

    music: [{
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref : "music"
    }],
    
    artist: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: "user"
    }
})

const albumModel = mongoose.model("album", albumSchema)

module.exports = albumModel