import React from 'react';
import styles from './FormTitle.module.css';

const FormTitle = ({ children }) => {
  return <h2 className={styles.title}>{children}</h2>;
};

export default FormTitle;
