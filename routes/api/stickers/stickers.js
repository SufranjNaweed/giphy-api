const express = require('express');
const router = express.Router();

const api_key = process.env.API_KEY;
const base_url_api = process.env.BASE_URL_API;
const tools = require('../../../libs/tools');

// @route   GET api/v1/stickers
// @desc    Get 25 trend's Stickers
// @access  Public
router.get('/',  async (req, res) => {
    const API_URL = `${base_url_api}stickers/trending?&api_key=${api_key}`;
    const data = await tools.fetcher(API_URL);
    if(data)
        return res.status(200).send(data);
    else
        return res.status(404).send('ressources not found');
});

// @route  api/v1/stickers/random
// @desc   Get a random sticker
// @access Public
router.get('/random', async (req, res) => {
    const API_URL = `${base_url_api}stickers/random?&api_key=${api_key}`
    const data = await tools.fetcher(API_URL);
    if(data)
        return res.status(200).send(data);
    else
        return res.status(404).send('ressources not found');
})

// @route   GET api/v1/stickers/search?q=MY_SEARCH
// @desc    search stickers by title
// @access  Public
router.get('/search/:wordSearch', async (req, res)=>{
    const search    = req.params.wordSearch;
    const API_URL = `${base_url_api}stickers/search?q=${search}&api_key=${api_key}`;
    const data = await tools.fetcher(API_URL);
    if(data)
        return res.status(200).send(data);
    else
        return res.status(404).send('ressources not found');
});

module.exports = router;