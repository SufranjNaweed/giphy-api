require('dotenv').config();
// 3 tabs for const required
const express           = require('express');
const app               = express();

const cors              = require("cors");
const PORT              = process.env.PORT || 5555;

// Init Middleware
app.use(express.json({ extended : false }));

// Permission CORS
app.use(cors());

app.get('/', (req, res) => {
    res.send('Giphy Fetcher API is Running');
});

app.use('/api/v1/gifs', require('./routes/api/gifs'));
 
app.listen(PORT, () => {
    console.log(`server running on ${PORT}`)
});