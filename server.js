const express = require('express');
const app = express();

const cors = require("cors");

const PORT = 9000;

// Init Middleware
app.use(express.json({ extended : false }));
// Permission CORS
app.use(cors());

app.get('/', function (req, res) {
  res.send('Hello World')
});
 
app.listen(PORT, () => {
    console.log(`server running on ${PORT}`)
});