const mongoose = require('mongoose')


const alienSchema = mongoose.Schema({



    // name: '',
    // desc: '',
    // cause: '',
    // remedy: '',


    name: {
        type: String,
        // required: true,

    },
    desc: {
        type: String,
        // required: true,
        trim: true
    },
    cause: {
        type: String,
        // required: true,

    },
    remedy: {
        type: String,
        // required: true,

    }


})

module.exports = mongoose.model('Alien', alienSchema)