const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const sequelize = require('./Database/Path_db');


// creating a server

const app = express();

// setting up the server port
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Running on port
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});