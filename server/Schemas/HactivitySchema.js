const mongoose = require('mongoose')

const HactivitySchema = new mongoose.Schema({
    topic:{
        type : String,
        required : true
    },
    level : {
        type: String,
        required : true
    },
    info : {
        type : String,
        required : true
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