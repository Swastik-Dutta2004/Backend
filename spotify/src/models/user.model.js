const moongose = require("mongoose")

const userSchema = new moongose.Schema({
    username: {
        type: String,
        require: true,
        unique: true
    },

    email:{
        type: String,
        require: true,
        unique: true
    },

    password: {
        type: String,
        require: true,
    },
    
    role: {
        type: String,
        enum: ["user","artist"],
        default: "user"
    }
})

const userModel = moongose.model("user", userSchema)


module.exports = userModel