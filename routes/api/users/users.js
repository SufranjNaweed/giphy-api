const express = require('express');
const router = express.Router();

router.get('/', async(req, res) => {

    return res.status(200).send('give the list of users')
})

router.get('/:id', async(req, res) =>{

    return res.send(200).send("give a user's data");
})

router.post('/login', async (req, res) => {
    const {email, password} =  req.body;
    console.log("password", password)
    console.log("email", email)
    

    return res.status(200).send(email);
})

module.exports = router;