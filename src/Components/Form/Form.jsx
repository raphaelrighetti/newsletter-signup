import React from 'react';
import styles from './Form.module.css';
import Input from './Input';
import IllustrationDesktop from '../SVG/IllustrationDesktop';
import IllustrationMobile from '../SVG/IllustrationMobile';
import FormTitle from './FormTitle';
import FormButton from './FormButton';

const Form = ({ mobile, value, setValue, error, validate, setCadastrado }) => {
  const formRef = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();

    if (validate()) {
      setCadastrado(true);
    } else {
      console.log(formRef.current.children[1].focus());
    }
  }

  return (
    <>
      <div className={styles.left}>
        <div className={styles.leftContent}>
          <FormTitle>Stay updated!</FormTitle>
          <p>Join 60,000+ product managers receiving monthly updates on:</p>
          <ul>
            <li>Product discovery and building what matters</li>
            <li>Measuring to ensure updates are a success</li>
            <li>And much more!</li>
          </ul>
          <form ref={formRef} onSubmit={handleSubmit}>
            <Input
              label="Email adress"
              placeholder="email@company.com"
              value={value}
              setValue={setValue}
              error={error}
              validate={validate}
              type="email"
            />
            <FormButton>Subscribe to monthly newsletter</FormButton>
          </form>
        </div>
      </div>
      <div className={styles.right}>
        {mobile ? (
          <IllustrationMobile className={styles.illustration} />
        ) : (
          <IllustrationDesktop className={styles.illustration} />
        )}
      </div>
    </>
  );
};

export default Form;
