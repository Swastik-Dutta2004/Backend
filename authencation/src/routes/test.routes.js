const express = require("express")
const jwt = require("jsonwebtoken")
const userModel = require("../models/user.model")

const routes = express.Router()

routes.post('/create', async (req, res) => {
    
    const token = req.cookies.token

    console.log("token: ",req.cookies);

    if (!token) {
        return res.status(401).json({
            message: "unauthorised"
        })
    }

    try {
       const decoded = jwt.verify(token, process.env.JWT_SECRET)

        const user = await userModel.findOne({
            _id: decoded.id
        })

        console.log(user);
        

    } catch (error) {
        
        res.status(401).json({
            maessage: "Token is invalid."
        })
        
    }
    res.send("Post has created successfully")
})


module.exports = routes