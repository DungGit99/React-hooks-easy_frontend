import React, { useState, useRef } from 'react';
const child = {
  padding: '25px',
  margin: '25px',
  border: '2px solid blue'
}
const UseRef = () => {
  let counter = useRef(0)
  const [state, setState] = useState('A')
  const updateState = () => {
    setState(state + '-state')
    counter.current ++
  }
  return (
    <div style={child}>
      <div>
        <div>MyState : {state}</div>
        <input type="button" value='Update State' onClick={updateState}/>
      </div>
    </div>
  );
};

export default UseRef;