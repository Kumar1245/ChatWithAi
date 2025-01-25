import * as Yup from "yup";

const Validation = Yup.object({

  question: Yup.string().required("Please enter title!"),
  answer: Yup.string().required("Please enter content!"),
});

export default Validation;