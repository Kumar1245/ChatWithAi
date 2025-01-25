import * as Yup from "yup";

const Validation = Yup.object({

  packageSize: Yup.number().required("Please enter Package Size!"),
  price: Yup.number().required("Please enter Price!"),
  bonusTokens:Yup.number().required("Please enter  Bonus token!")
});

export default Validation;