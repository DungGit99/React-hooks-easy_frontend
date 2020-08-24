import { useState, useEffect, useRef } from 'react';
const randomColor = (currenColor) => {
  const COLOR_LIST = ['yellow', 'green', 'orange']
  const currentIndex = COLOR_LIST.indexOf(currenColor)
  let newIndex = currentIndex
  while(currentIndex === newIndex) {
    newIndex = Math.trunc(Math.random()*3)
  }
  return COLOR_LIST[newIndex]
}
function useMagicColor() {
  const [color, setColor] =useState('red')
  const colorRef = useRef()
  useEffect(() => {
    const colorInterval = setInterval(() =>{
      const newColor = randomColor(colorRef.current)
      setColor(newColor)
      colorRef.current = newColor
    },1000)
    return () => {
      clearInterval(colorInterval)
    }
  },[])
  return color
};
export default useMagicColor


