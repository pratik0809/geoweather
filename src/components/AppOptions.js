import React from 'react'
import '../styles/App.css';

const AppOptions = (props) => {
  return (
    <div className="App-options">
      <button id="zoomIn" onClick={props.zoomIn}>+</button>
      <button id="zoomOut"onClick={props.zoomOut}>-</button>
      <button id="findMe"onClick={props.getUserLocation}>📍</button>
    </div>
  )
}

export default AppOptions
