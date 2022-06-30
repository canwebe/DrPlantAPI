const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb+srv://kaushikd:database@cluster0.r90ag.mongodb.net/?retryWrites=true&w=majority'
const bodyParser = require("body-parser")
const app = express()

mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => {
    console.log('connection successful');
}).catch((err) => {
    console.log('no connection')
})
const con = mongoose.connection

con.on('open', () => {
    console.log('connected...')
})

app.use(express.json())

const alienRouter = require('./routes/aliens')
app.use('/disease', alienRouter)



app.use(bodyParser.urlencoded({ extended: true }));

app.listen(5000, () => {
    console.log("Server is running");
})
