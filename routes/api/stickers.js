// @route  api/v1/stickers/random
// @desc   Get a random stickers
// @access Public
router.get('/', async(req, res) => {
    try{
        const data =  await(`http://api.giphy.com/v1/stickers/random?&api_key=${api_key}`)
                            .then(res => data)
                            .catch(err => console.log(err))
        return res.send(data);
    }
    catch(err){
        console.log(err);
    }
})