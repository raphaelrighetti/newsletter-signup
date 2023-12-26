import React from 'react';
import styles from './FormButton.module.css';

const FormButton = ({ children }) => {
  return <button className={styles.button}>{children}</button>;
};

export default FormButton;
