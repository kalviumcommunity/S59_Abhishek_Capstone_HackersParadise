const mongoose = require('mongoose')

const unitSchema = new mongoose.Schema({
    unitName: {
        type: String,
        required: true
    },
    units: {
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