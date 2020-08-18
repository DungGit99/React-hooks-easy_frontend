import React, { useState } from 'react';

function TodoForm(props) {
  const {onSubmit} = props
  const [value, setValue] = useState('')
  const handleOnChange = (e) => {
    setValue(e.target.value)
  }
  const handleOnSubmit = (e) => {
    e.preventDefault()
    if(!onSubmit) return
    const formValue = {
      id: Math.random(),
      title: value
    }
    onSubmit(formValue)
    setValue('')
  }
  return (
    <form onSubmit={handleOnSubmit}>
      <input type="text" value={value} onChange={handleOnChange}/>
    </form>
  );
}

export default TodoForm;