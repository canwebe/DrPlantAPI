const mongoose = require('mongoose')


const alienSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    remedy: {
        type: String,
        required: true
    }
 

})

module.exports = mongoose.model('Alien', alienSchema)