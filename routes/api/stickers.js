const express           = require('express');
const router            = express.Router();

const api_key           = process.env.API_KEY;
const tools             = require('../../libs/tools');

// @route  api/v1/stickers/random
// @desc   Get a random stickers
// @access Public
router.get('/', async (req, res) => {
    const API_URL = `http://api.giphy.com/v1/stickers/random?&api_key=${api_key}`
    return res.send(await tools.fetcher(API_URL));
})

module.exports  = router;