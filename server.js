const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb+srv://disease:database@cluster0.ucprhxb.mongodb.net/?retryWrites=true&w=majority'


const bodyParser = require("body-parser")
const app = express()

mongoose.connect(url, {
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



app.use(bodyParser.urlencoded({ extended: true }));

app.listen(5000, () => {
    console.log("Server is running");
})
