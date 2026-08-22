const musisModel = require("../routes/music.route")
const jwt = require("jsonwebtoken")

async function createMusic(req, res) {
    const token = req.cookies.token
    
    if (!token) {
        return re.status(401).json({
            message: "Unauthorized."
        })
    }

    try {
       const deoode =  jwt.verify(token, process.env.JWT_SECRET)

        if (deoode.role !== "artist") {
            return res.status(401).json({
                message: "You have no access to create music."
            })
        }

    } catch (error) {
        return res.status(401).json({
            message: "Unthorized"
        })        
    }

    const title = req.body
    const file = req.file
}