const { default: mongoose } = require("mongoose");
const musicModel = require("mongoose")

const musicSchema = new musicModel.Schema({
    uri: {
        type: String,
        require: true
    },

    title: {
        type: String,
        require: true
    },

    artist: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        require: true  
    }
})

const musicModel = mongoose.model("music", musicSchema)

module.exports = musicModel