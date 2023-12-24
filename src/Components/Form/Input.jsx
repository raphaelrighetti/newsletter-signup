import React from 'react';

const Input = ({ label, value, setValue }) => {
  function handleChange({ target }) {
    setValue(target.value);
  }

  return (
    <>
      <label>{label}</label>
      <input value={value} onChange={handleChange} type="text" />
    </>
  );
};

export default Input;
