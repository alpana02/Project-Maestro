import express from "express"
import cors from "cors"
import mongoose from "mongoose"

const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())


mongoose.connect("mongodb+srv://paoli2121:paoli2121@cluster0.ckidv.mongodb.net/users?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("DB Connected")
})
// User schema
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const User = new mongoose.model("User", userSchema)

// Routes

app.post("/login", (req, res) => {
    const { email, password } = req.body
    User.findOne({ email: email }, (err, user) => {
        if (user) {
            if (password === user.password) {
                res.send({ message: "Login success", user: user })
            }
            else {
                res.send({ message: "Password didn't match" })
            }
        }
        else {
            res.send({ message: "User not found" })
        }
    })
})

app.post("/register", (req, res) => {
    const { name, email, password } = req.body
    User.findOne({ email: email }, (err, user) => {
        if (user) {
            res.send({ message: "User already exist" })
        }
        else {
            console.log("Testing1")
            const user = new User({
                name: name,
                email: email,
                password: password
            })
            user.save(err => {
                if (err) {
                    res.send(err)
                }
                else {
                    res.send({ message: "Successfully Registered" })
                }
            })
        }
    })

})
app.listen(9002, () => {
    console.log("listening on port http://localhost:9002")
})

