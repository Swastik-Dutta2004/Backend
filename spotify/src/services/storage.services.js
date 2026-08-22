const {ImageKit} = require("@imagekit/nodejs")

const ImageKitCllient = new ImageKit({
    privateKey: process.env.IMAGEKIY_PRIVATE_KEY
})
async function uploade(file) {
    const result = ImageKitCllient.files.upload({
        file,
        filename: "music_" + Date.now(),
        folder: "complete_backend/music"
    })

    return result
}

module.exports = uploade