const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
    comment : {
        type: String,
        required : true
    },
    date : {
        type : Date,
        required : true
    }
})

const Comment = mongoose.model('comment', commentSchema)

module.exports = Comment