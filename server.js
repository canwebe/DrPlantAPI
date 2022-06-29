const express = require('express')
const app = express()


app.get("/", (req, res) => {
    res.status(200).json({ messege: "Hello server is running" })
})












app.listen(5000, () => {
    console.log("Server is running");
})
