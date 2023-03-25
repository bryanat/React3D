import React from 'react';
import { FbxContext } from './FbxContext';

export default function SceneTensor() {
  const { fbxfilename, setfbxfilename } = React.useContext(FbxContext);

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      {/* SceneTensor ... fbxfilename: {fbxfilename} */}
      <iframe src="http://localhost:6006" title="Example" style={{ width: '100%', height: '100%' }} />
    </div>
  );
}
