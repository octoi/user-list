import React, { useState } from 'react';

export default function Search({ onChange }) {
  const [inputValue, setInputValue] = useState('');

  const handleOnChange = (e) => {
    setInputValue(e.target.value);
    onChange(e.target.value);
  }

  return (
    <input
      placeholder='Search for users'
      value={inputValue}
      onChange={handleOnChange}
    />
  )
}
