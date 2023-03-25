// MyContext.js
import React from 'react';

const FbxContext = React.createContext();

function FbxContextProvider(props) {
  const [fbxfilename, setfbxfilename] = React.useState('biniso20.fbx');

  return (
    <FbxContext.Provider value={{ fbxfilename, setfbxfilename }}>
      {props.children}
    </FbxContext.Provider>
  );
}

export { FbxContext, FbxContextProvider };
