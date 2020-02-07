const axios             = require('axios');

module.exports = {
    fetcher : fetcher = async (url) => {
        const data = await axios.get(url).then(res => res.data).catch(err => console.log(err));
        return data;
    }
}