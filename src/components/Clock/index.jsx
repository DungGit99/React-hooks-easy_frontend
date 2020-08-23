import React, { useState, useEffect } from 'react';
function getTimeDate() {
  const now = new Date()
  const s = `0${now.getSeconds()}`.slice(-2)
  const m = `0${now.getMinutes()}`.slice(-2)
  const h = `0${now.getHours()}`.slice(-2)
  return `${h}:${m}:${s}`
}
const Clock = () => {
  const [time, setTime] = useState('')
  const [show, setShow] = useState(false)
  useEffect(() => {
    const clockTime = setInterval(() => {
      const newTime = getTimeDate()
      setTime(newTime)
    },1000)
    return () => {
      clearInterval(clockTime)
    }
  },[])
  if(show) {
    return (
      <div>Clean useEffect</div>
    )
  }
  return (
    <div>
      <p>{time}</p>
      <button onClick={()=> setShow(true)}>Hide Clock</button>
    </div>
  );
};

export default Clock;