import React, { useState } from 'react'
import './ColorBox.scss'

ColorBox.propTypes = {

};
function getRandomColor(){
  const color_list = ['deeppink', 'green', 'yellow', 'black', 'blue']
  const index = Math.trunc(Math.random()*5)
  return color_list[index]
}

function ColorBox() {
  const [color, setColor] = useState(() => {
    const initialState = localStorage.getItem('color') || 'deeppink';
    return initialState
  })
  const handleBoxClick =() =>{
    const newColor = getRandomColor()
    setColor(newColor)
    localStorage.setItem('color', newColor)
  }
  return (
    <div
      className="color-box"
      style={{backgroundColor: color}}
      onClick={handleBoxClick}
    >
    </div>
  );
}

export default ColorBox;