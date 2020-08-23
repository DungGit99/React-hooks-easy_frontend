import React, { useState, useRef } from 'react';

const PostSearchForm = ({onSubmit}) => {
  const [searchTerm, setSerchTerm] = useState('')
  const typingTimeoutRef = useRef(null)
  console.log(typingTimeoutRef);
  const handleSearchTermChange = e => {
    const value = e.target.value
    setSerchTerm(value)
    if(!onSubmit) return
     // SET -- 100 -- CLEAR, SET -- 300 --> SUBMIT
    // SET -- 300 --> SUBMIT
    if(typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current)
    }
    typingTimeoutRef.current = setTimeout(() => {
      onSubmit(value)
    },300)
  }
  return (
    <form>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchTermChange}
      />
    </form>
  );
};

export default PostSearchForm;