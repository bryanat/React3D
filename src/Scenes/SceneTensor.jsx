import React from 'react'
import { FbxContext } from "./FbxContext";

export default function SceneTensor() {
  const { fbxfilename, setfbxfilename } = React.useContext(FbxContext)
  return (
    <div>SceneTensor ... fbxfilename: {fbxfilename}</div>
  )
}