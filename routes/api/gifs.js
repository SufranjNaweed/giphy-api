const express           = require('express');
const router            = express.Router();
const axios             = require('axios');

// TODO MAKE A AUTH SYSTEM 

// @route   GET api/v1/gifs
// @desc    Get 25 trend's Gif
// @access  Public
router.get('/', async (req, res) => {
    const api_key = process.env.API_KEY;

    try{
        const data = await axios.get(`http://api.giphy.com/v1/gifs/trending?&api_key=${api_key}`)
                .then(res => res.data)
                .catch(err => console.log(err));
        return res.send(data);
    }
    catch(err){
        console.log(err)
    }
});

router.get('/search/:wordSearch', async (req, res)=>{
    const api_key   = process.env.API_KEY;
    const search    = req.params.wordSearch;

    try{
        const data  = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${search}&api_key=${api_key}`)
                    .then(res => res.data)
                    .catch(err => console.log(err));
        return res.send(data);
    }
    catch(err){
        console.log(err)
    }
});

module.exports  = router;