const express = require('express')
const router = express.Router();
const { connectDB } = require('./db.js')
const user = require('./Schemas/userSchema.js')

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
        res.status(500).json({ error: "An error occurred" })
    }
})
connectDB()

module.exports = router
