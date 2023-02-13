import {useEffect, useState} from 'react';

export const useValidation = (value, validations) => {
  const [isEmpty, setIsEmpty] = useState(true);
  const [minLengthError, setMinLengthError] = useState(false);
  const [maxLengthError, setMaxLengthError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [numberError, setNumberError] = useState(false);
  const [errorMessages, setErrorMessages] = useState('');
  const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
  const regexPhone = /^([0|+[0-9]{1,5})?([7-9][0-9]{9})$/;
  // const regexNumbers = /^\d+$/;

  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
      case 'isEmpty':
        if (value === '') {
          setIsEmpty(true);
          setErrorMessages('Required');
        }
        else setIsEmpty(false);
        break;

      case 'minLength':
        if ((value.length < validations[validation])&&value!=='') {
          setMinLengthError(true);
          setErrorMessages(`Input should contain more ${validations[validation]} characters`);
        }
        else setMinLengthError(false);
        break;

      case 'maxLength':
        if (value.length > validations[validation]) {
          setMaxLengthError(true);
          setErrorMessages(`Input should contain less ${validations[validation]} characters`);
        }
        else setMaxLengthError(false);
        break;

      case 'emailError':
        if (!regexEmail.test(value)&&value!=='') {
          setEmailError(true);
          setErrorMessages('Invalid input');
        }
        else setEmailError(false);
        break;

      case 'phoneError':
        if (!regexPhone.test(value)&&value!=='') {
          setPhoneError(true);
          setErrorMessages('Invalid input');
        }
        else setPhoneError(false);
        break;
      case 'numberError':
        if (value!==''&&value==='0') {
          setNumberError(true);
          setErrorMessages('Should be more person');
        }
        else setNumberError(false);
        break;
      }}
  }, [value]);

  return {
    isEmpty,
    minLengthError,
    maxLengthError,
    emailError,
    phoneError,
    errorMessages,
    numberError,
  };
};

export const useForm = (initialValue, validations) => {
  const [value, setValue] = useState(initialValue);
  const [isDirty, setDirty] = useState(false);
  const valid = useValidation(value, validations);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onBlur = (e) => {
    setDirty(true);
  };

  return {
    value,
    onChange,
    onBlur,
    isDirty,
    ...valid,
  };

};