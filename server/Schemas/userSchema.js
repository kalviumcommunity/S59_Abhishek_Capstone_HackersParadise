const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    fname : {
        type : String,
        required : true
    },
    lname : {
        type : String,
        required: false
    },
    mail : {
        type: String,
        required: true
    },
    password : {
        type : String,
        required : true
    },
    wishlist : {
        type: Array
    }
})

const User = mongoose.model('user', userSchema)
module.exports = User