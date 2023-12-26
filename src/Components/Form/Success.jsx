import React from 'react';
import styles from './Success.module.css';
import IconSuccess from '../SVG/IconSuccess';
import FormTitle from './FormTitle';
import FormButton from './FormButton';

const Success = ({ value, setValue, setCadastrado }) => {
  function handleSubmit(e) {
    e.preventDefault();

    setValue('');
    setCadastrado(false);
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <IconSuccess />
      <FormTitle>Thanks for subscribing!</FormTitle>
      <p>
        A confirmation email has been sent to{' '}
        <span className={styles.span}>{value}</span>. Please open it and click
        the button inside to confirm your subscription.
      </p>
      <FormButton>Dismiss message</FormButton>
    </form>
  );
};

export default Success;
