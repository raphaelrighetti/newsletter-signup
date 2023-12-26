import React from 'react';
import styles from './Input.module.css';

const Input = ({ label, placeholder, value, setValue, error, validate }) => {
  const inputRef = React.useRef();

  React.useEffect(() => {
    if (error) {
      inputRef.current.classList.add(styles.inputError);
    } else {
      inputRef.current.classList.remove(styles.inputError);
    }
  }, [error]);

  function handleChange({ target }) {
    setValue(target.value);
  }

  return (
    <>
      <div className={styles.div}>
        <label className={styles.label}>{label}</label>
        {error && <p className={styles.error}>{error}</p>}
      </div>
      <input
        ref={inputRef}
        className={styles.input}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        onBlur={validate}
        type="text"
      />
    </>
  );
};

export default Input;
