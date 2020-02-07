const axios             = require('axios');

export const fetcher = async(url) => {
    try{
        const data = await axios.get(url).then(res => res.data).catch(err => console.log(err));
        return data;
    }
    catch(error){
        console.log(err);
    }
}