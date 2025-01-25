import * as Yup from "yup";

const Validation = Yup.object({
  packageSize: Yup.number()
    .required("Please enter Package Size!")
    .min(0, "Package Size cannot be negative!"),
  price: Yup.number()
    .required("Please enter Price!")
    .min(0, "Price cannot be negative!"),
  bonusTokens: Yup.number()
    .required("Please enter Bonus token!")
    .min(0, "Bonus tokens cannot be negative!"),
});

export default Validation;
