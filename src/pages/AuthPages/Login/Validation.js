import * as Yup from 'yup';

const Validation = Yup.object({
    email: Yup.string().required("Email Required").email("Invalid email address"),
    password: Yup.string().required("Password Required").min(6, "Must be 6 characters or greater"),
});

export default Validation;
