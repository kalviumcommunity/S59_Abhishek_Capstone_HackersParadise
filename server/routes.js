const express = require('express')
const router = express.Router();
const { connectDB } = require('./db.js')
const user = require('./Schemas/userSchema.js')

router.post('/register', async (req, res) => {
    const newUser = new user({
        fname: req.body.fname,
        lname: req.body.lname,
        mail: req.body.mail,
        password: req.body.password,
    })
    try {
        const savedUser = await newUser.save()
        res.status(201).json({ savedUser })
    }
    catch (err) {
        res.status(500).json({ error: "An error occurred" })
    }
})
connectDB()

module.exports = router
