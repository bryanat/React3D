const express = require('express');
const cors = require('cors');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const path = require('path');

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
app.post('/instant', async (req, res) => {
    // init
    console.log('/instant route init');
    // console.log(req.body);
    
    // 1 write to json file with data from react app
    const uuid = uuidv4();
    // const filename = `data/${uuid}.json`;
    const filename = `/home/ubuntu/Reinforcement-Learning-Unity-3D-Packing/Assets/json/${uuid}.json`;
    fs.writeFile(filename, JSON.stringify(req.body), (err) => {
        if (err) throw err;
        console.log(`Data written to file ${uuid}.json`);
    });
    
    // // Run Unity
    // exec(`/home/bryanat/Unity/Hub/Editor/2022.2.12f1/Editor/Unity -projectPath /home/bryanat/Unity/05-Port -executeMethod EditorServer.Play inference path /home/bryanat/Unity/05-Port/Assets/json/dryrun13.json &`, (error, stdout, stderr) => {
    exec(`/home/ubuntu/Unity/Hub/Editor/2022.2.12f1/Editor/Unity -projectPath /home/ubuntu/Reinforcement-Learning-Unity-3D-Packing -executeMethod EditorServer.Play inference path /home/ubuntu/Reinforcement-Learning-Unity-3D-Packing/Assets/json/${uuid}.json &`, (error, stdout, stderr) => {
        if (error) { 
          console.error(`Error executing command: ${error}`);
          return;
        }
        // console.log(`Directory and file created at ${dirName}/${fileName}`);
        console.log('unity command run')
        res.send(`${uuid}.fbx`);
        console.log('fbx sent to client')

    });

    // 2 run bash command with json file: mlagents-learn ..
    // Run Unity ML-Agents
    // exec(`cd /home/bryanat/Unity/05-Port/Assets && mlagents-learn ML-Agents/packerhand/Models/HandPPO_curriculum.yaml --run-id=dryrun13 --resume --inference &`, (error, stdout, stderr) => {
    exec(`cd /home/ubuntu/Reinforcement-Learning-Unity-3D-Packing/Assets && mlagents-learn ML-Agents/packerhand/Models/HandPPO_curriculum.yaml --run-id=boxes30v2 --resume --inference &`, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error executing command: ${error}`);
        return;
      }
      // console.log(`Directory and file created at ${dirName}/${fileName}`);
      console.log('mlagents command run')
    });


    // /home/bryanat/Unity/05-Port/Assets/fbx/<uuid>.fbx
    
    // 3 send .fbx file path to  
    // res.send({fbxfilename: '/home/bryanat/Unity/05-Port/Assets/fbx/Boxes_30.fbx'});
    
  //   const filePath = '/home/bryanat/Unity/05-Port/Assets/fbx/Boxes_30.fbx';
  //   const fileName = 'Boxes_30.fbx';
  //   res.download(filePath, fileName, function(err) {
  //   if (err) {
  //     console.error(err);
  //     return res.status(500).send('Error downloading file');
  //   }

  //   const sourcePath = filePath;
  //   const destDir = path.join(__dirname, '../public');
  //   const destPath = path.join(destDir, fileName);

  //   // Copy the file to the public/ directory
  //   fs.copyFile(sourcePath, destPath, (err) => {
  //     if (err) {
  //       console.error(err);
  //       return res.status(500).send('Error copying file to public directory');
  //     }
      
  //     console.log('File downloaded and copied to public directory');
  //     res.status(200).send('File downloaded and copied to public directory');
  //   });
  // });

    // res.download('/home/bryanat/Unity/05-Port/Assets/fbx/Boxes_30.fbx')

    // res.send(`/home/bryanat/Unity/05-Port/Assets/fbx/Boxes_30.fbx`);
    // res.send(`/home/bryanat/Unity/05-Port/Assets/fbx/${uuid}.fbx`);

    // end
    console.log('/instant route end');
})


// 1 write to json file with data from react app
// 2 run mlagents-learn with json file
app.post('/enhanced', async (req, res) => {
    // init
    console.log('/enhanced route init');
    // console.log(req.body);
    
    // 1 write to json file with data from react app
    const uuid = uuidv4();
    // const filename = `data/${uuid}.json`;
    const filename = `/home/bryanat/Unity/05-Port/Assets/json/${uuid}.json`;
    fs.writeFile(filename, JSON.stringify(req.body), (err) => {
        if (err) throw err;
        console.log(`Data written to file ${uuid}.json`);
    });
    
    // 2 run bash command with json file: mlagents-learn ..
    
    // Run Unity
    exec(`/home/bryanat/Unity/Hub/Editor/2022.2.12f1/Editor/Unity -projectPath /home/bryanat/Unity/05-Port -executeMethod EditorServer.Play training time 1 path /home/bryanat/Unity/05-Port/Assets/json/${uuid}.json &`, (error, stdout, stderr) => {
      if (error) { 
          console.error(`Error executing command: ${error}`);
          return;
        }
        // console.log(`Directory and file created at ${dirName}/${fileName}`);
        console.log('unity command run')
    });

    // Run Unity ML-Agents
    exec(`cd /home/bryanat/Unity/05-Port/Assets &&  mlagents-learn ML-Agents/packerhand/Models/HandPPO_curriculum.yaml --run-id=${uuid} --force &`, (error, stdout, stderr) => {
      if (error) {
          console.error(`Error executing command: ${error}`);
          return;
        }
        // console.log(`Directory and file created at ${dirName}/${fileName}`);
        console.log('mlagents command run')
    });

    // /home/bryanat/Unity/05-Port/Assets/fbx/<uuid>.fbx
    
    // 3 send .fbx file path to  
    // res.send({fbxfilename: '/home/bryanat/Unity/05-Port/Assets/fbx/Boxes_30.fbx'});
    
  //   const filePath = '/home/bryanat/Unity/05-Port/Assets/fbx/Boxes_30.fbx';
  //   const fileName = 'Boxes_30.fbx';
  //   res.download(filePath, fileName, function(err) {
  //   if (err) {
  //     console.error(err);
  //     return res.status(500).send('Error downloading file');
  //   }

  //   const sourcePath = filePath;
  //   const destDir = path.join(__dirname, '../public');
  //   const destPath = path.join(destDir, fileName);

  //   // Copy the file to the public/ directory
  //   fs.copyFile(sourcePath, destPath, (err) => {
  //     if (err) {
  //       console.error(err);
  //       return res.status(500).send('Error copying file to public directory');
  //     }
      
  //     console.log('File downloaded and copied to public directory');
  //     res.status(200).send('File downloaded and copied to public directory');
  //   });
  // });

    // res.download('/home/bryanat/Unity/05-Port/Assets/fbx/Boxes_30.fbx')
    res.send(`Boxes_31.fbx`);

    // res.send(`/home/bryanat/Unity/05-Port/Assets/fbx/Boxes_30.fbx`);
    // res.send(`/home/bryanat/Unity/05-Port/Assets/fbx/${uuid}.fbx`);

    // end
    console.log('/enhanced route end');
})

app.post('/blank', async (req, res) => {
  console.log('blank route init')
  res.send('dryrun13.fbx')
})

// start express server on port 8080
app.listen(8080);