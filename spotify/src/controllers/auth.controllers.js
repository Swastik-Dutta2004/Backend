const userModel = require("../modules/user.modules")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")

async function register(req, res) {
    const { username, email, password, role = "user" } = req.body

    const isUserAlreadyExit = await userModel.findOne({
        $or: [
            { username },
            { email }
        ]
    })

    const hash = await bcrypt.hash(password, 10)

    if (isUserAlreadyExit) {
        return res.status(401).json({
            message: "User is already exit."
        })
    }

    const newUser = await userModel.create({
        username,
        email,
        password: hash,
        role
    })

    const token = jwt.sign({
        id: newUser._id,
        role: newUser.role
    }, process.env.JWT_SECRET)

    res.cookie("token", token)

    res.status(201).json({
        message: "User has been logged successfully. ",
        newUser: {
            id: newUser._id,
            username: newUser.username,
            email: newUser.email,
            role: newUser.role
        }
    })
}