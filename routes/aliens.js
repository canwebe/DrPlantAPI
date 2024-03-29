const express = require('express');
const router = express.Router();
const Alien = require('../models/alien');


//get request method

router.get('/', async (req, res) => {
    try {
        const aliens = await Alien.find()
        res.json(aliens)
    } catch (err) {
        res.send('Error ' + err)
    }
})
//get request by id
router.get('/:id', async (req, res) => {

    try {
        const alien = await Alien.findById(req.params.id)
        res.json(alien)
    } catch (err) {
        res.send('Error ' + err)
    }
})



//post request method ..
router.post('/', async (req, res) => {
    console.log(req.body)
    const alien = new Alien({
        name: req.body.name,
        desc: req.body.desc,
        cause: req.body.cause,
        remedy: req.body.remedy
    });

    try {
        const a1 = await alien.save()
        res.json(a1)
    } catch (err) {
        res.send('Error' + err)
    }
})
// post request method
router.patch('/:id', async (req, res) => {
    try {
        console.log(req.params.id)
        const alien = await Alien.findById(req.params.id)
        alien.remedy = req.body.remedy
        const a1 = await alien.save()
        res.json(a1)
    } catch (err) {
        res.send('Error')
    }

})
//search by name
router.get('/search/:key', async (req, res) => {
    try{
    let d = await Alien.find(
        {
            "$or":[
                {name:{$regex:req.params.key}}
            ]
        }
    )
    res.send(d);
}catch(err){
    res.send('error')
}
})


module.exports = router