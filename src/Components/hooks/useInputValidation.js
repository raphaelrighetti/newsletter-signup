import React from 'react';

const types = {
  email: {
    regex:
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
    message: 'Valid email required',
  },
};

const useInputValidation = type => {
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    if (error) {
      validate();
    }
  }, [value]);

  function validate() {
    console.log('passei por aqui...');

    if (value.length === 0) {
      setError('Field must be filled');
      return false;
    } else if (types[type] && !types[type].regex.test(value)) {
      setError(types[type].message);
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  return { value, setValue, error, setError, validate: () => validate() };
};

export default useInputValidation;
