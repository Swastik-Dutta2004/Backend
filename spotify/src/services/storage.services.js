const {ImageKit} = require("@imagekit/nodejs")

const ImageKitClient = new ImageKit({
    privateKey: process.env.IMAGEKIY_PRIVATE_KEY
})
async function uploadeFile(file) {
    const result = ImageKitClient.files.upload({
        file,
        filename: "music_" + Date.now(),
        folder: "complete_backend/music"
    })

    return result
}

module.exports = uploadeFile