const express = require('express');
const cors = require('cors');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

// create express app
const app = new express();

// use cors middleware
app.use(cors())

// use json middleware
app.use(express.json());


// 1 write to json file with data from react app
// 2 run mlagents-learn with json file
app.post('/sendtounity', async (req, res) => {
    // init
    console.log('/sendtounity route init');
    // console.log(req.body);
    
    // 1 write to json file with data from react app
    const uuid = uuidv4();
    const filename = `data/${uuid}.json`;
    fs.writeFile(filename, JSON.stringify(req.body), (err) => {
        if (err) throw err;
        console.log(`Data written to file ${uuid}.json`);
    });
    
    // 2 run bash command with json file: mlagents-learn ..
    // exec()
    
    // 3 send .fbx file path to  
    res.download(filename)
    // res.send({fbxfilename: 'Bins.fbx'});

    // end
    console.log('/sendtounity route end');
})

app.post('/finetuned', async (req, res) => {
    // run mla with training for x time
})

// start express server on port 8080
app.listen(8080);