const { default: mongoose } = require("mongoose");
const musicMoldules = require("mongoose")

const musicSchema = new musicMoldules.Sch({
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