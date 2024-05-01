const mongoose = require('mongoose')

const bountySchema = new mongoose.Schema({
    company : {
        type: String,
        required : true
    },
    reward : {
        type: String,
        required: true
    }
})

const bounty = mongoose.model('bounty', bountySchema)
module.exports = bounty