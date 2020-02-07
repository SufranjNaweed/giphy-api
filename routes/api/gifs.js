const express           = require('express');
const router            = express.Router();

const axios             = require('axios');
const api_key           = process.env.API_KEY;
const tools             = require('../../libs/tools');

// TODO MAKE A AUTH SYSTEM 

// @route   GET api/v1/gifs
// @desc    Get 25 trend's Gif
// @access  Public
router.get('/',  async (req, res) => {
    const API_URL = `http://api.giphy.com/v1/gifs/trending?&api_key=${api_key}`;
    const data = await tools.fetcher(API_URL);
    if(data)
        return res.status(200).send(data);
    else
        return res.status(404).send('ressources not found');
});

// @route   GET api/v1/search
// @desc    search gifs by title
// @access  Public
router.get('/search/:wordSearch', async (req, res)=>{
    const search    = req.params.wordSearch;
    const API_URL = `http://api.giphy.com/v1/gifs/search?q=${search}&api_key=${api_key}`;
    const data = await tools.fetcher(API_URL);
    if(data)
        return res.status(200).send(data);
    else
        return res.status(404).send('ressources not found');
});

// @route   GET api/v1/gifs/random
// @desc    Get a random gif
// @access  Public
router.get('/random', async(req, res) =>{
    const API_URL = `http://api.giphy.com/v1/gifs/random?&api_key=${api_key}`;
    const data = await tools.fetcher(API_URL);
    if(data)
        return res.status(200).send(data);
    else
        return res.status(404).send('ressources not found');
});

// @route   GET api/v1/gifs/search?q=MY_SEARCH
// @desc    search gif by id
// @access  Public
router.get('/search/byID/:idSearch', async (req, res)=>{
    const id    = req.params.idSearch;
    const API_URL = `http://api.giphy.com/v1/gifs/${id}/&api_key=${api_key}`;
    console.log(API_URL);
    const data = await tools.fetcher(API_URL);
    if(data)
        return res.status(200).send(data);
    else
        return res.status(404).send('ressources not found');
});

module.exports  = router;