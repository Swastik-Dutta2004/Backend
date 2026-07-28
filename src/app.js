const express = require("express")
const multer = require("multer")
const uplodeFile = require("./services/storage.services")
const postModel = require("./models/post.model")

const app = express()
app.use(express.json())

const upload = multer({ storage: multer.memoryStorage() })

app.post("/create-post", upload.single("Image"), async (req, res) => {
    console.log(req.body);

    const result = await uplodeFile(req.file.buffer)


    const post = await postModel.create({
        Image: result.url,
        Caption: req.body.Caption
    })


    return res.status(201).json({
        message: "Post created  successfully.",
        post
    })

})


module.exports = app