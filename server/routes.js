const express = require('express');
const router = express.Router();
const Joi = require('joi');
const { connectDB } = require('./db.js');
const User = require('./Schemas/userSchema.js');
const bounty = require('./Schemas/BountySchema.js');
const Comment = require('./Schemas/CommentSchema.js');
const Hactivity = require('./Schemas/HactivitySchema.js');
const units = require('./Schemas/UnitsSchema.js')

const validateLogin = Joi.object({
    fname: Joi.string().required(),
    lname: Joi.string(),
    mail: Joi.string().required(),
    password: Joi.string().required(),
});

const checkValidation = (input, schema) => {
    const { error } = schema.validate(input);
    return !error;
};

router.post('/register', async (req, res) => {
    const findUser = await user.findOne({ mail: req.body.mail })
    if (findUser) {
        return res.status(409).json({ Error: "User already exists" })
    }
    if (!checkValidation(req.body, validateLogin)) {
        return res.status(400).json({ "Error": "Data validation failed. Please add data as per the norms" });
    }
    const newUser = new User({
        fname: req.body.fname,
        lname: req.body.lname,
        mail: req.body.mail,
        password: req.body.password,
    });
    try {
        const savedUser = await newUser.save();
        res.status(201).json({ savedUser });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "An error occurred" });
    }
});

router.post('/comments', async (req, res) => {
    const { comment } = req.body;

    if (!comment) {
        return res.status(400).send('Comment is required');
    }

    try {
        const newComment = new Comment({ comment });
        await newComment.save();
        res.status(201).send(newComment);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

router.put('/bounties-update/:id', async (req, res)=>{
    try {
        const Id = req.params.id
        const newBounty = await bounty.findByIdAndUpdate(Id, req.body, { new: true });
        if (!newBounty) {
            return res.status(404).json({ error: "bounty Not Found"})
        }
        res.json(newBounty);
    } catch (err) {
        res.status(500).send('Error: ' + err);
    }
})

router.put('/update-user', async (req, res) => {
    if (!checkValidation(req.body, validateLogin)) {
        return res.status(401).json({ error: "Unauthorized Login" });
    }
    const userId = req.user.id;

    try {
        const updatedUser = await user.findByIdAndUpdate(userId, {
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

router.post('/login', async (req, res) => {
    const findUser = await user.findOne({ password: req.body.password })
    if (findUser) {
        return res.json({ Message: "Login Successful!", name: findUser.fname})
    }
    else {
        return res.status(401).json({ err })
    }
})

router.post('/logout', async (req, res) => {
    return res.json({ Message: "Logout successfull!" })
})

router.get('/bounties', async (req, res) => {
    try {
        const bounties = await bounty.find()
        res.json(bounties)
    }
    catch (err) {
        res.status(500).json(err)
    }
});

router.get('/units', async (req, res) => {
    try {
        const modUnits = await units.find()
        res.json(modUnits)
    }
    catch(err){
        res.status(500).json(err)
    }
})
router.post('/hactivity', async (req, res) => {
    try {
        const newHactivity = new Hactivity(req.body);
        const savedHactivity = await newHactivity.save();
        res.status(201).json(savedHactivity);
    } catch (error) {
        res.status(400).json({ error: error.message });
        console.log(error);
    }
});

connectDB();

module.exports = router;
