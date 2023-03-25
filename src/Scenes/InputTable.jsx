import React, { useContext, useState } from 'react';
import { Box, TextField, Button } from '@mui/material';
import InputRow from './InputRow';
import colors from '../colors';
import axios from 'axios';
import { FbxContext } from "./FbxContext";
   


export default function InputTable() {


  ///////////////////////////////////////
  // state data to send as json
  const [boxWidth, setboxWidth] = useState(0);
  const [boxLength, setboxLength] = useState(0);
  const [boxHeight, setboxHeight] = useState(0);
  const [boxCount, setboxCount] = useState(0);

  const { fbxfilename, setfbxfilename } = useContext(FbxContext);

  // perform any logic before setting new box width
  const handleboxWidthChange = (event) => {
    setboxWidth(event.target.value);
  };

  // perform any logic before setting new box length
  const handleboxLengthChange = (event) => {
    setboxLength(event.target.value);
  };

  // perform any logic before setting new box height
  const handleboxHeightChange = (event) => {
    setboxHeight(event.target.value);
  };

  // perform any logic before setting new box count
  const handleboxCountChange = (event) => {
    setboxCount(event.target.value);
  };

  const handleboxCountIncrement = () => {
    setboxCount(boxCount + 1);
  };

  /////////////////////////////




  const [rowCount, setrowCount] = useState(0);

  const handleClick = () => {
    setrowCount(rowCount + 1);
  };

  const components = [...Array(rowCount)].map((_, index) => {
    const reindex = index % 9;
    // const keyname = Object.keys(colors)[0]; // 'one'
    const colorkey = Object.keys(colors)[0 + reindex]; // 'one'
    return(
      <InputRow color={colors[colorkey].main} />
    )
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://192.168.1.87:8080/sendtounity', {   
      "Container": [
          {
              "Length": 590,
              "Width": 239, 
              "Height": 235
          }
      ],
      "Items": [
          {
              "Product_id": 0,
              "Length": 14.70,
              "Width": 23.45,
              "Height": 23.85,
              "Quantity": 1,
              "Color": "#ff0000"
          },
          {
              "Product_id": 1,
              "Length": 14.70,
              "Width": 11.70,
              "Height": 11.90,
              "Quantity": 4,
              "Color": "#00ff00"
          },
          {
              "Product_id": 2,
              "Length": 14.70,
              "Width": 7.78,
              "Height": 7.88,
              "Quantity": 9,
              "Color": "#0000ff"
          },
          {
              "Product_id": 3,
              "Length": 14.70,
              "Width": 5.825,
              "Height": 5.925,
              "Quantity": 16,
              "Color": "#ffff00"
          }
      ]
  })
    .then(async function (response) {
      // await ...
      console.log(response.data)
      setfbxfilename(response.data)

      // 1 wait for fbx file in response 
      // 2 display fbx file in <OutputScene3D fbxfile='filename.fbx' />
    })
    .catch( function (error) {
      console.log(error)
    })

    // console.log(`boxId:0 boxWidth:${boxWidth} boxLength:${boxLength} boxHeight:${boxHeight} boxCount:${boxCount} `)
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ '& .MuiTextField-root': { m: 1, width: '19vw' } }}>
      <Box>{fbxfilename}</Box>
      <Button variant="contained" onClick={handleClick}>
        Add Box Type
      </Button>


      <Box sx={{ bgcolor: '#ff0000' }}>
        <TextField
          required
          id="boxWidth"
          label="Width"
          value={boxWidth}
          onChange={handleboxWidthChange}
        />
        <TextField
          required
          id="boxLength"
          label="Length"
          value={boxLength}
          onChange={handleboxLengthChange}
        />
        <TextField
          required
          id="boxHeight"
          label="Height"
          value={boxHeight}
          onChange={handleboxHeightChange}
        />
        <TextField
          required
          id="boxCount"
          label="Count"
          value={boxCount}
          onChange={handleboxCountChange}
        />
        <Button onClick={handleboxCountIncrement} variant="contained">+</Button>
      </Box>


      {/* <InputRow color="#181a1b"/>
      {components} */}
      <Button type="submit" variant="contained" color="primary">Submit (Send to Unity backend)</Button>
    </Box>
  );
}
