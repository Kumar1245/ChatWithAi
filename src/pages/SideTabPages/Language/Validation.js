import * as Yup from 'yup';

const Validation = Yup.object().shape({
  name: Yup.string()
    .required('Language Name is required')
    .matches(/^[A-Za-z\s]+$/, 'Language Name must only contain letters'),
  code: Yup.string()
    .required('Language Code is required')
    
});

export default Validation;
