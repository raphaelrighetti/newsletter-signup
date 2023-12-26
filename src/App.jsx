import React from 'react';
import './variables.css';
import './App.css';
import Attribution from './Components/Attribution';
import Form from './Components/Form/Form';
import Card from './Components/Form/Card';
import Success from './Components/Form/Success';
import useInputValidation from './Components/hooks/useInputValidation';

function App() {
  const email = useInputValidation('email');
  const [mobile, setMobile] = React.useState(() => {
    return window.matchMedia('(max-width: 1220px)').matches;
  });
  const [cadastrado, setCadastrado] = React.useState(false);

  React.useEffect(() => {
    function handleResize() {
      setMobile(window.matchMedia('(max-width: 1220px)').matches);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <Card>
        {!cadastrado ? (
          <Form
            mobile={mobile}
            value={email.value}
            setValue={email.setValue}
            error={email.error}
            validate={email.validate}
            setCadastrado={setCadastrado}
          />
        ) : (
          <Success
            value={email.value}
            setValue={email.setValue}
            setCadastrado={setCadastrado}
          />
        )}
      </Card>
      <Attribution />
    </>
  );
}

export default App;
