const mongoose = require('mongoose')

const unitSchema = new mongoose.Schema({
    unitName: {
        type: String,
        required: true
    },
    names: {
        type: Array,
        required: true
    },
    info: {
        type: String,
        required: true
    }
})

const units = mongoose.model('unit', unitSchema)
module.exports = units