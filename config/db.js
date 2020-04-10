const mongoose = require('mongoose');
const gravatar = require('gravatar');
const db_url = process.env.DB_URL;

const connectDB = async () => {
    try{
        await mongoose.connect(db_url, {
            useNewUrlParser : true,
            useCreateIndex : true,
            useUnifiedTopology : true,
            useFindAndModify : true
        });
    }
    catch(err){
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDB;