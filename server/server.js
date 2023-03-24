const express = require('express');
const cors = require('cors');

// create express app
const app = new express();

// use cors middleware
app.use(cors())

// use json middleware
app.use(express.json());

// test route
// app.post('/sendtounity', async (req, res) => {
app.post('/sendtounity', async (req, res) => {
    console.log('/sendtounity route hitt');
    console.log(req.body);
    res.send(req.body);

    // 1 get req from react app with json data
    // 2 save to json file
    // 3 run mlagents-learn with json file

})

// start express server on port 8080
app.listen(8080);