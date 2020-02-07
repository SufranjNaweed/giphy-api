require('dotenv').config();

const express           = require('express');
const app               = express();
const PORT              = process.env.PORT;
const HOST              = '0.0.0.0';
const cors              = require("cors");

// Init Middleware
app.use(express.json({ extended : false }));

// Permission CORS
app.use(cors());

app.get('/', (req, res) => {
    res.status(200).send(`Giphy Fetcher API is Running - http://${HOST}:${PORT}`);
});

app.use('/api/v1/gifs', require('./routes/api/gifs'));
app.use('/api/v1/stickers', require('./routes/api/stickers'));
 

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);