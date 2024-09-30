const mongoose = require('mongoose')

const HactivitySchema = new mongoose.Schema({
    company: {
        type: String,
        required : true
    },
    topic:{
        type : String,
    },
    level : {
        type: String,
    },
    info : {
        type : String,
    },
    tags : {
        type : String
    },
    bountyreward : {
        type: String
    }
})

const Hactivity = mongoose.model('Hactivity', HactivitySchema)

module.exports = Hactivity