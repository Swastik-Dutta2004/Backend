const express = require("express")
const multer = require("multer")
const uplodeFile = require("./services/storage.services")
const postModel = require("./models/post.model")
const cors = require("cors")

const app = express()
app.use(express.json())
app.use(cors())

const upload = multer({ storage: multer.memoryStorage() })

app.post("/create-post", upload.single("Image"), async (req, res) => {

    const result = await uplodeFile(req.file.buffer)

    const post = await postModel.create({
        Image: result.url,
        Caption: req.body.Caption
    })

    return res.status(201).json({
        message: "Post created successfully.",
        posts: post
    })

})


app.get("/post", async (req,res) => {
    const post = await postModel.find()

    return res.status(200).json({
        message: "All post are found.",
        posts: post
    })
})




module.exports = app