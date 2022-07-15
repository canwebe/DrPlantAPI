const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require("body-parser");
const dotenv = require('dotenv').config()

const app = express()

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,

}).then(() => {
    console.log('connection successful');
}).catch((err) => {
    console.log(err)
})
const con = mongoose.connection

con.on('open', () => {
    console.log('connected...')
})

app.use(express.json())

const alienRouter = require('./routes/aliens')
app.use('/disease', alienRouter)

const PORT = process.env.PORT || 5000

app.use(bodyParser.urlencoded({ extended: true }));

app.listen(PORT, () => {
    console.log("Server is running");
})
