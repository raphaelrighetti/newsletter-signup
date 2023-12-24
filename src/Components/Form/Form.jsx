import React from 'react';
import '../../variables.css';
import styles from './Form.module.css';
import Input from './Input';
import IllustrationDesktop from '../SVG/IllustrationDesktop';

const Form = () => {
  const [email, setEmail] = React.useState('');

  return (
    <div className={styles.card}>
      <div className="left">
        <h1>Stay updated!</h1>
        <p>Join 60,000+ product managers receiving monthly updates on:</p>
        <ul>
          <li>Product discovery and building what matters</li>
          <li>Measuring to ensure updates are a success</li>
          <li>And much more!</li>
        </ul>
        <form>
          <Input label="Email adress" value={email} setValue={setEmail} />
          <button>Subscribe to monthly newsletter</button>
        </form>
      </div>
      <div className="right">
        <IllustrationDesktop className={styles.illustration} />
      </div>
    </div>
  );
};

export default Form;
