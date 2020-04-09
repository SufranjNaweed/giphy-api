require('dotenv').config();

const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 9000;
const HOST = '0.0.0.0';
const cors = require("cors");

app.use(bodyParser.json());
// Init Middleware
app.use(express.json({ extended : false }));

// Permission CORS
app.use(cors());

app.get('/', (req, res) => {
    res.status(200).send(`- CLAPS API is Running -`);
});

app.use('/api/v1/gifs', require('./routes/api/gifs/gifs'));
app.use('/api/v1/stickers', require('./routes/api/stickers/stickers'));

// Initialize the app.
const server = app.listen(PORT, function () {
    const port = server.address().port;
    console.log("App now running on port", port);
});