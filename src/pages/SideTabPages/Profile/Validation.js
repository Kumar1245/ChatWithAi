import * as Yup from "yup";

const Validation = Yup.object({
  name: Yup.string().trim().required("Required*"),
  email: Yup.string().email("Invalid email format").required("Required*"),
  // phone: Yup.string()
  // .max(15, 'Phone number must be at most 15 characters')
  // .required('Phone number is required'),
});

export default Validation;
