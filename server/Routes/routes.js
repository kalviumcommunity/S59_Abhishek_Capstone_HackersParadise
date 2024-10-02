const express = require('express');
const router = express.Router();
const Joi = require('joi');
const jwt = require('jsonwebtoken')
const { connectDB } = require('../config/db.js');
const User = require('../Schemas/userSchema.js');
const bounty = require('../Schemas/BountySchema.js');
const Comment = require('../Schemas/CommentSchema.js');
const Hactivity = require('../Schemas/HactivitySchema.js');
const units = require('../Schemas/UnitsSchema.js')
const otpModel = require('../Schemas/otpSchema.js')
const otpGenerator = require('otp-generator')
const SECRET = process.env.SECRET

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
    const findUser = await User.findOne({ mail: req.body.mail })
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

router.post('/send-otp', async (req, res) => {
    try {
        const { email } = req.body
        const findUser = await User.findOne({ email: email })
        console.log(findUser)
        if (findUser) return res.status(401).json({ message: "User already exists" })
        let otp = otpGenerator.generate(6, {
            upperCaseAlphabets: false,
            lowerCaseAlphabets: false,
            specialChars: false,
            digits: true,
        })
        let maxAttempts = 5;
        let attempts = 0;
        let result = await otpModel.findOne({ otp: otp })
        while (result && attempts < maxAttempts) {
            otp = otpGenerator.generate(6, {
                upperCaseAlphabets: false,
                lowerCaseAlphabets: false,
                specialChars: false,
                digits: true,
            })
            result = await otpModel.findOne({ otp: otp })
            attempts++;
        }
        const otpPayLoad = new otpModel({ email, otp })
        await otpPayLoad.save()
        res.status(200).json({ otp: otp })
    }
    catch (error) {
        console.log("Error occurred sending the otp:", error)
        return res.status(500).json({ message: "Failed to generate OTP" })
    }
})
router.post('/verify-otp',  async (req, res) => {
    try {
        const otp = req.body.otp
        const email = req.body.email
        if (!otp || !email) {
            return res.status(400).json({ message: "Email and OTP are both required" })
        }
        const latest = await otpModel.find({ email }).sort({ createdAt: -1 }).limit(1)
        const expTime = new Date(latest[0].createdAt.getTime() + (10 * 60 * 1000))
        const currTime = new Date()
        if (currTime > expTime) {
            return res.status(401).json({ message: "OTP has expired" })
        }
        if (!latest || latest[0].otp !== otp) {
            console.log("OTP is invalid");
            return res.status(400).json({ message: "The OTP is invalid" });
        }
        return res.status(200).json({ message: "Success!" })
    }
    catch (error) {
        console.log("Error verifying OTP:", error)
        return res.status(500).json({ message: "Failed to verify otp" })
    }
})

router.put('/update-user', async (req, res) => {
    if (!checkValidation(req.body, validateLogin)) {
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

router.post('/login', async (req, res) => {
    try {
        const findUser = await User.findOne({ mail: req.body.mail });
        if (findUser) {
            const token = jwt.sign({ userId: findUser._id }, SECRET, { expiresIn: '6h' });
            return res.json({
                Message: "Login Successful!",
                name: findUser.fname,
                accessToken: token
            });
        } else {
            return res.status(401).json({ message: "Invalid email or password" });
        }
    } catch (error) {
        return res.status(500).json({ message: "Server error", error });
    }
});

router.post('/logout', async (req, res) => {
    return res.json({ Message: "Logout successfull!" })
})

router.get('/user/:id', async (req, res) => {
    const { id } = req.params;
  
    const user = await User.findById(id);
  
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  });

  router.post('/user/wishlist/:id', async (req, res) => {
    const { id } = req.params;
    const { wishlist } = req.body;
    try {
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        const moduleExists = user.wishlist.some(
            (module) => module.name === wishlist[0].name
        );
        if (!moduleExists) {
            user.wishlist.push({
                name: wishlist[0].name,
                progress: "0%",
                difficulty: "Fundamental"
            });
            await user.save();
            res.status(200).json({ message: 'Wishlist updated successfully', user });
        } else {
            res.status(400).json({ message: 'Module already in wishlist' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error updating wishlist', error });
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

router.get('/units', async (req, res) => {
    try {
        const modUnits = await units.find()
        res.json(modUnits)
    }
    catch(err){
        res.status(500).json(err)
    }
})

router.get('/hactivity', async (req, res) => {
    try {
      const hactivities = await Hactivity.find();
      res.json(hactivities);
    } catch (error) {
      console.error("Error fetching hactivities:", error);
      res.status(500).json({ error: "Failed to fetch hactivities." });
    }
  });

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


router.post('/hacktivity/comment', async (req, res) => {
    if (error) {
        return res.status(400).send('Invalid data');
    }

    try {
        const { comment, date } = req.body;
        const newComment = new Comment({ comment, date });
        await newComment.save();
        res.status(201).send(newComment);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error'); 
    }  res.status(500).send(error.message);
});

connectDB();

module.exports = router;
