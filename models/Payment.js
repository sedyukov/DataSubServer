const { Schema, model } = require('mongoose')

const schema = new Schema({
    CardNumber: {type: Number},
    Amount: {type: Number},
    ExpDate: {type: String},
    Cvv: {type: Number}
})

module.exports = model('Payment', schema)

