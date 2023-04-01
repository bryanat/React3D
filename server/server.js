const express = require('express');
const cors = require('cors');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

const { exec } = require('child_process');

const dirName = 'example-directory';
const fileName = 'example-file.txt';


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
    exec(`cd /home/bryanat/Unity/05-Port/Assets &&  mlagents-learn ML-Agents/packerhand/Models/HandPPO_curriculum.yaml --run-id=dryrun13 --resume --inference`, (error, stdout, stderr) => {
        if (error) {
          console.error(`Error executing command: ${error}`);
          return;
        }
      
        // console.log(`Directory and file created at ${dirName}/${fileName}`);
        console.log('mlagents command run')
    });
    exec(`/home/bryanat/Unity/Hub/Editor/2022.2.12f1/Editor/Unity -projectPath /home/bryanat/Unity/05-Port -executeMethod EditorServer.Play inference path /home/bryanat/Unity/05-Port/Assets/json/Boxes_30.json`, (error, stdout, stderr) => {
        if (error) {
          console.error(`Error executing command: ${error}`);
          return;
        }
      
        // console.log(`Directory and file created at ${dirName}/${fileName}`);
        console.log('unity command run')
    });
    // /home/bryanat/Unity/05-Port/Assets/fbx/<uuid>.fbx
    
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