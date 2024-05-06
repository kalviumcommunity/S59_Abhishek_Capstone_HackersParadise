const express = require('express')
const router = express.Router();
const Joi = require('joi');
const { connectDB } = require('./db.js')
const user = require('./Schemas/userSchema.js')
const bounty = require('./Schemas/BountySchema.js')

const validateLogin = Joi.object({
    fname: Joi.string().required(),
    lname: Joi.string(),
    mail: Joi.string().required(),
    password: Joi.string().required(),
})

const checkValidation = (input, schema) => {
    const { error } = schema.validate(input)
    if (error) {
        return false
    }
    else {
        return true
    }
}

router.post('/register', async (req, res) => {
    if (!checkValidation(req.body, validateLogin)) {
        return res.status(400).json({ "Error": "Data validation failed. Please add data as per the norms" })
    }
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
        console.log(err)
        res.status(500).json({ error: "An error occurred" })
    }
})

router.put('/update-user', async (req, res) => {
    if (!checkValidation()) {
        return res.status(401).json({ error: "Unauthorized Login" });
    }
    const userId = req.user.id;

    try {
        const updatedUser = await User.findByIdAndUpdate(userId, {
            fname: req.body.fname,
            lname: req.body.lname,
            mail: req.body.mail
        }, { new: true }); 

        if (!updatedUser) {
            return res.status(404).json({ error: "User not found" });
        }

        res.status(200).json({ updatedUser });
    } catch (err) {
        res.status(500).json({ error: "An error occurred" });
    }
});

router.get('/bounties', async (req, res) => {
    try {
        const bounties = await bounty.find()
        res.json(bounties)
    }
    catch (err) {
        res.status(500).json(err)
    }
});
connectDB()

module.exports = router
