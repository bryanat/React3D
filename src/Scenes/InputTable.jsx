import React, { useContext, useState } from 'react';
import { Box, TextField, Button } from '@mui/material';
import InputRow from './InputRow';
import colors from '../colors';
import axios from 'axios';
import { FbxContext } from "./FbxContext";
import { saveAs } from 'file-saver';

export default function InputTable() {

  ///////////////////////////////////////
  // state data to send as json
  const [boxLength0, setboxLength0] = useState(0);
  const [boxWidth0, setboxWidth0] = useState(0);
  const [boxHeight0, setboxHeight0] = useState(0);
  const [boxCount0, setboxCount0] = useState(0);
  
  const [boxLength1, setboxLength1] = useState(0);
  const [boxWidth1, setboxWidth1] = useState(0);
  const [boxHeight1, setboxHeight1] = useState(0);
  const [boxCount1, setboxCount1] = useState(0);
  
  const [boxLength2, setboxLength2] = useState(0);
  const [boxWidth2, setboxWidth2] = useState(0);
  const [boxHeight2, setboxHeight2] = useState(0);
  const [boxCount2, setboxCount2] = useState(0);
  
  const [boxLength3, setboxLength3] = useState(0);
  const [boxWidth3, setboxWidth3] = useState(0);
  const [boxHeight3, setboxHeight3] = useState(0);
  const [boxCount3, setboxCount3] = useState(0);

  const { fbxfilename, setfbxfilename } = useContext(FbxContext);

  //// 0: red default ////
  // perform any logic before setting new box length
  const handleboxLengthChange0 = (event) => {
    setboxLength0(event.target.value);
  };
  // perform any logic before setting new box width
  const handleboxWidthChange0 = (event) => {
    setboxWidth0(event.target.value);
  };
  // perform any logic before setting new box height
  const handleboxHeightChange0 = (event) => {
    setboxHeight0(event.target.value);
  };
  // perform any logic before setting new box count
  const handleboxCountChange0 = (event) => {
    setboxCount0(event.target.value);
  };
  const handleboxCountIncrement0 = () => {
    setboxCount0(boxCount0 + 1);
  };

  //// 1: green default ////
  // perform any logic before setting new box length
  const handleboxLengthChange1 = (event) => {
    setboxLength1(event.target.value);
  };
  // perform any logic before setting new box width
  const handleboxWidthChange1 = (event) => {
    setboxWidth1(event.target.value);
  };
  // perform any logic before setting new box height
  const handleboxHeightChange1 = (event) => {
    setboxHeight1(event.target.value);
  };
  // perform any logic before setting new box count
  const handleboxCountChange1 = (event) => {
    setboxCount1(event.target.value);
  };
  const handleboxCountIncrement1 = () => {
    setboxCount1(boxCount1 + 1);
  };

  //// 2: blue default ////
  // perform any logic before setting new box length
  const handleboxLengthChange2 = (event) => {
    setboxLength2(event.target.value);
  };
  // perform any logic before setting new box width
  const handleboxWidthChange2 = (event) => {
    setboxWidth2(event.target.value);
  };
  // perform any logic before setting new box height
  const handleboxHeightChange2 = (event) => {
    setboxHeight2(event.target.value);
  };
  // perform any logic before setting new box count
  const handleboxCountChange2 = (event) => {
    setboxCount2(event.target.value);
  };
  const handleboxCountIncrement2 = () => {
    setboxCount2(boxCount2 + 1);
  };

  //// 3: yellow default ////
  // perform any logic before setting new box length
  const handleboxLengthChange3 = (event) => {
    setboxLength3(event.target.value);
  };
  // perform any logic before setting new box width
  const handleboxWidthChange3 = (event) => {
    setboxWidth3(event.target.value);
  };
  // perform any logic before setting new box height
  const handleboxHeightChange3 = (event) => {
    setboxHeight3(event.target.value);
  };
  // perform any logic before setting new box count
  const handleboxCountChange3 = (event) => {
    setboxCount3(event.target.value);
  };
  const handleboxCountIncrement3 = () => {
    setboxCount3(boxCount3 + 1);
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
    return (
      <InputRow color={colors[colorkey].main} />
    )
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    axios({
      method: 'post',
      url: 'http://192.168.1.87:8080/sendtounity',
      responseType: 'blob',
      data:
      {   
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
                "Length": boxLength0,
                "Width": boxWidth0,
                "Height": boxHeight0,
                "Quantity": boxCount0,
                "Color": "#ff0000"
                
            },
            {
                "Product_id": 1,
                "Length": boxLength1,
                "Width": boxWidth1,
                "Height": boxHeight1,
                "Quantity": boxCount1,
                "Color": "#00ff00"
            },
            {
                "Product_id": 2,
                "Length": boxLength2,
                "Width": boxWidth2,
                "Height": boxHeight2,
                "Quantity": boxCount2,
                "Color": "#0000ff"
    
            },
            {
                "Product_id": 3,
                "Length": boxLength3,
                "Width": boxWidth3,
                "Height": boxWidth3,
                "Quantity": boxCount3,
                "Color": "#ffff00"
            }
        ]
    }
    })
      .then((response) => {
        // console.log(response)
        const reader = new FileReader();
        reader.readAsText(new Blob([response.data]));
        reader.onload = () => console.log(reader.result);

        
        // const filename = `Boxes_30.fbx`;
        // const blob = new Blob([response.data]);
        // saveAs(blob, filename, { type: 'application/octet-stream' });

        setfbxfilename('Boxes_30.fbx');

        // const url = window.URL.createObjectURL(new Blob([response.data]));
        // const link = document.createElement('a');
        // link.href = url;
        // link.setAttribute('download', 'example.txt');
        // document.body.appendChild(link);
        // link.click();
      });

    // console.log(`boxId:0 boxWidth:${boxWidth} boxLength:${boxLength} boxHeight:${boxHeight} boxCount:${boxCount} `)
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ '& .MuiTextField-root': { m: 1, width: '19vw' } }}>
      <Box>{fbxfilename}</Box>
      <Button variant="contained" onClick={handleClick}>
        Add Box Type
      </Button>

      {/* 0: red default */}
      <Box sx={{ bgcolor: '#ff0000' }}>
        <TextField
          required
          id="boxLength"
          label="Length"
          value={boxLength0}
          onChange={handleboxLengthChange0}
        />
        <TextField
          required
          id="boxWidth"
          label="Width"
          value={boxWidth0}
          onChange={handleboxWidthChange0}
        />
        <TextField
          required
          id="boxHeight"
          label="Height"
          value={boxHeight0}
          onChange={handleboxHeightChange0}
        />
        <TextField
          required
          id="boxCount"
          label="Count"
          value={boxCount0}
          onChange={handleboxCountChange0}
        />
        <Button onClick={handleboxCountIncrement0} variant="contained">+</Button>
      </Box>

      {/* 1: green default */}
      <Box sx={{ bgcolor: '#00ff00' }}>
        <TextField
          required
          id="boxLength"
          label="Length"
          value={boxLength1}
          onChange={handleboxLengthChange1}
        />
        <TextField
          required
          id="boxWidth"
          label="Width"
          value={boxWidth1}
          onChange={handleboxWidthChange1}
        />
        <TextField
          required
          id="boxHeight"
          label="Height"
          value={boxHeight1}
          onChange={handleboxHeightChange1}
        />
        <TextField
          required
          id="boxCount"
          label="Count"
          value={boxCount1}
          onChange={handleboxCountChange1}
        />
        <Button onClick={handleboxCountIncrement1} variant="contained">+</Button>
      </Box>      

      {/* 2: blue default */}
      <Box sx={{ bgcolor: '#0000ff' }}>
        <TextField
          required
          id="boxLength"
          label="Length"
          value={boxLength2}
          onChange={handleboxLengthChange2}
        />
        <TextField
          required
          id="boxWidth"
          label="Width"
          value={boxWidth2}
          onChange={handleboxWidthChange2}
        />
        <TextField
          required
          id="boxHeight"
          label="Height"
          value={boxHeight2}
          onChange={handleboxHeightChange2}
        />
        <TextField
          required
          id="boxCount"
          label="Count"
          value={boxCount2}
          onChange={handleboxCountChange2}
        />
        <Button onClick={handleboxCountIncrement2} variant="contained">+</Button>
      </Box>      

      {/* 3: yellow default */}
      <Box sx={{ bgcolor: '#ffff00' }}>
        <TextField
          required
          id="boxLength"
          label="Length"
          value={boxLength3}
          onChange={handleboxLengthChange3}
        />
        <TextField
          required
          id="boxWidth"
          label="Width"
          value={boxWidth3}
          onChange={handleboxWidthChange3}
        />
        <TextField
          required
          id="boxHeight"
          label="Height"
          value={boxHeight3}
          onChange={handleboxHeightChange3}
        />
        <TextField
          required
          id="boxCount"
          label="Count"
          value={boxCount3}
          onChange={handleboxCountChange3}
        />
        <Button onClick={handleboxCountIncrement3} variant="contained">+</Button>
      </Box>      

      {/* <InputRow color="#181a1b"/>
      {components} */}
      <Button type="submit" variant="contained" color="primary">Submit (Send to Unity backend)</Button>
    </Box>
  );
}
