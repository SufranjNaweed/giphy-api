const axios = require('axios');

module.exports = {
    fetcher : fetcher = async (url) => {
        try{
            let result = await axios.get(url)
            result = result.data
            return result;
        }
        catch(err){
            console.log(err);
        }
    }
}