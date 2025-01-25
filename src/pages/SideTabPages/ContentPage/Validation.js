import * as Yup from "yup";

const Validation = Yup.object({

  title: Yup.string().required("Please enter title!"),
  content: Yup.string().required("Please enter content!"),
});

export default Validation;
