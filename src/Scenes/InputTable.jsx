import React, { useContext, useState } from 'react';
import { Box, TextField, Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Grid, CircularProgress } from '@mui/material';
import InputRow from './InputRow';
import colors from '../colors';
import axios from 'axios';
import { FbxContext } from "./FbxContext";

export default function InputTable() {
  const [open, setOpen] = useState(false);
  const [enhancepercent, setEnhancepercent] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const hostIP = 'http://ec2-35-88-208-198.us-west-2.compute.amazonaws.com';
  
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
    if (!isNaN(event.target.value)) {
      setboxLength0(event.target.value);
    }
  };
  // perform any logic before setting new box width
  const handleboxWidthChange0 = (event) => {
    if (!isNaN(event.target.value)) {
      setboxWidth0(event.target.value);
    }
  };
  // perform any logic before setting new box height
  const handleboxHeightChange0 = (event) => {
    if (!isNaN(event.target.value)) {
      setboxHeight0(event.target.value);
    }
  };
  // perform any logic before setting new box count
  const handleboxCountChange0 = (event) => {
    if (!isNaN(event.target.value)) {
      setboxCount0(event.target.value);
    }
  };
  const handleboxCountIncrement0 = () => {
    setboxCount0(boxCount0 + 1);
  };

  //// 1: green default ////
  // perform any logic before setting new box length
  const handleboxLengthChange1 = (event) => {
    if (!isNaN(event.target.value)) {
      setboxLength1(event.target.value);
    }
  };
  // perform any logic before setting new box width
  const handleboxWidthChange1 = (event) => {
    if (!isNaN(event.target.value)) {
      setboxWidth1(event.target.value);
    }
  };
  // perform any logic before setting new box height
  const handleboxHeightChange1 = (event) => {
    if (!isNaN(event.target.value)) {
      setboxHeight1(event.target.value);
    }
  };
  // perform any logic before setting new box count
  const handleboxCountChange1 = (event) => {
    if (!isNaN(event.target.value)) {
      setboxCount1(event.target.value);
    }
  };
  const handleboxCountIncrement1 = () => {
    setboxCount1(boxCount1 + 1);
  };

  //// 2: blue default ////
  // perform any logic before setting new box length
  const handleboxLengthChange2 = (event) => {
    if (!isNaN(event.target.value)) {
      setboxLength2(event.target.value);
    }
  };
  // perform any logic before setting new box width
  const handleboxWidthChange2 = (event) => {
    if (!isNaN(event.target.value)) {
      setboxWidth2(event.target.value);
    }
  };
  // perform any logic before setting new box height
  const handleboxHeightChange2 = (event) => {
    if (!isNaN(event.target.value)) {
      setboxHeight2(event.target.value);
    }
  };
  // perform any logic before setting new box count
  const handleboxCountChange2 = (event) => {
    if (!isNaN(event.target.value)) {
      setboxCount2(event.target.value);
    }
  };
  const handleboxCountIncrement2 = () => {
    setboxCount2(boxCount2 + 1);
  };

  //// 3: yellow default ////
  // perform any logic before setting new box length
  const handleboxLengthChange3 = (event) => {
    if (!isNaN(event.target.value)) {
      setboxLength3(event.target.value);
    }
  };
  // perform any logic before setting new box width
  const handleboxWidthChange3 = (event) => {
    if (!isNaN(event.target.value)) {
      setboxWidth3(event.target.value);
    }
  };
  // perform any logic before setting new box height
  const handleboxHeightChange3 = (event) => {
    if (!isNaN(event.target.value)) {
      setboxHeight3(event.target.value);
    }
  };
  // perform any logic before setting new box count
  const handleboxCountChange3 = (event) => {
    if (!isNaN(event.target.value)) {
      setboxCount3(event.target.value);
    }
  };
  const handleboxCountIncrement3 = () => {
    setboxCount3(boxCount3 + 1);
  };
  /////////////////////////////

  const handleenhancepercent = (event) => {
    if (!isNaN(event.target.value)) {
      setEnhancepercent(event.target.value);
    }
  };


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

  const handleFBXclick = (event) => {
    event.preventDefault();
    axios({
      method: 'post',
      url: `${hostIP}:8080/blank`
    })
      .then((response) => {
        console.log(`fbx/${response.data}`);
        console.log(`XXXXXXXXXXXXXXxx`);

        console.log('inside handleFBXclick')
        console.log(response.data)
        setfbxfilename('fbx/boxes30v2.fbx')
      })
  }

  const handleSubmitInstant = (event) => {
    event.preventDefault();
    console.log("HJBSAJKBDJASBDK");
    setIsLoading(true);
    axios({
      method: 'post',
      url: `${hostIP}:8080/instant`,
      timeout: 90000,
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
        // // console.log(response)
        // const reader = new FileReader();
        // reader.readAsText(new Blob([response.data]));
        // reader.onload = () => console.log(reader.result);

        
        // const filename = `Boxes_30.fbx`;
        // const blob = new Blob([response.data]);
        // saveAs(blob, filename, { type: 'application/octet-stream' });
        setIsLoading(false);
        console.log(`init`)
        console.log(`fbx/${response.data}`);
        setfbxfilename(`fbx/${response.data}`);
        // setfbxfilename(`fbx/${response.data}`);
        console.log(`end`)

        // const url = window.URL.createObjectURL(new Blob([response.data]));
        // const link = document.createElement('a');
        // link.href = url;
        // link.setAttribute('download', 'example.txt');
        // document.body.appendChild(link);
        // link.click();

        handleClose();
        // handleFBXclick();
      })
      .catch((error) => {
        console.error(error)
      })
      
  };
  
  const handleSubmitEnhanced = (event) => {
    event.preventDefault();
    axios({
      method: 'post',
      url: `${hostIP}:8080/enhanced`,
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
        // // console.log(response)
        // const reader = new FileReader();
        // reader.readAsText(new Blob([response.data]));
        // reader.onload = () => console.log(reader.result);

        
        // const filename = `Boxes_30.fbx`;
        // const blob = new Blob([response.data]);
        // saveAs(blob, filename, { type: 'application/octet-stream' });

        setfbxfilename('Boxes_31.fbx');

        // const url = window.URL.createObjectURL(new Blob([response.data]));
        // const link = document.createElement('a');
        // link.href = url;
        // link.setAttribute('download', 'example.txt');
        // document.body.appendChild(link);
        // link.click();

        handleClose();
      });
  };

  return (
    // <Box component="form" { true == true ? onSubmit={handleSubmitInstant} : onSubmit={handleSubmitEnhanced} } sx={{ '& .MuiTextField-root': { m: 1, width: '19vw' } }}>
    <Box component="form" onSubmit={handleSubmitInstant} sx={{ '& .MuiTextField-root': { m: 1, width: '19vw' } }}>
      <Button variant="contained" onClick={handleClick}>
        Add Box Type
      </Button>

      {/* 0: red default */}
      <Box sx={{ display: 'flex', alignItems: 'center'}} >
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
        <Button onClick={handleboxCountIncrement0} variant="contained" style={{ backgroundColor: '#ff0000'}}>+</Button>
      </Box>

      {/* 1: green default */}
      <Box sx={{ display: 'flex', alignItems: 'center'}} >
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
        <Button onClick={handleboxCountIncrement1} variant="contained" style={{ backgroundColor: '#00ff00'}}>+</Button>
      </Box>      

      {/* 2: blue default */}
      <Box sx={{ display: 'flex', alignItems: 'center'}} >
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
        <Button onClick={handleboxCountIncrement2} variant="contained" style={{ backgroundColor: '#0000ff'}}>+</Button>
      </Box>      

      {/* 3: yellow default */}
      {/* <Box sx={{ bgcolor: '#ffff00' }}> */}
      <Box sx={{ display: 'flex', alignItems: 'center'}} >
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
        <Button onClick={handleboxCountIncrement3} variant="contained"style={{ backgroundColor: '#ffff00'}} >+</Button>
      </Box>      

      {/* <InputRow color="#181a1b"/>
      {components} */}



      <Button variant="contained" onClick={handleOpen}>Submit</Button>
      {open && 
        <Dialog open={true} onClose={handleClose}>
        <Box sx={{ backgroundColor: '#181a1b' }}>
          <DialogContent>
            <DialogContentText>

            <Grid container spacing={2}>
              <Grid item xs={6}>
                {/* This is the left section */}
                <Box sx={{ width: '100%', height: '100%' }} onClick={handleSubmitInstant} >
                  Quick Pack
                  <div>
                    {isLoading && <CircularProgress />}
                </div>
                </Box>
              </Grid>
              <Grid item xs={6}>
                {/* This is the right section */}
                <Box sx={{ width: '100%', height: '100%' }} onClick={handleSubmitEnhanced} >
                  Enhanced Pack
                  <TextField
                    required
                    id="enhancepercent"
                    label="enhancepercent"
                    value={enhancepercent}
                    onChange={handleenhancepercent}
                  />
                </Box>
              </Grid>
            </Grid>

            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Close</Button>
          </DialogActions>
        </Box>
        </Dialog>
      }

    <Button onClick={handleFBXclick}>load fbx</Button>
    
    </Box>
  );
}
