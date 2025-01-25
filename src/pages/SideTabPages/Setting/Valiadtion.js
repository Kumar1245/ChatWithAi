import * as Yup from "yup";

const Validation = Yup.object({
  wordsPerToken: Yup.number()
    .typeError("Words per token must be a number")
    .required("Words per token is required")
    .positive("Words per token must be a positive number"),
  
  minTokenPrice: Yup.number()
    .typeError("Min token price must be a number")
    .required("Min token price is required")
    .positive("Min token price must be a positive number"),
  
  maxTokenPrice: Yup.number()
    .typeError("Max token price must be a number")
    .required("Max token price is required")
    .positive("Max token price must be a positive number"),
  
  imageTokenRate: Yup.number()
    .typeError("Image token rate must be a number")
    .required("Image token rate is required")
    .positive("Image token rate must be a positive number"),
  
  allowCustomPricing: Yup.string()
    .oneOf(["true", "false"], "Invalid option selected")
    .required("Allow custom pricing is required"),
  
  tokenRevenueShare: Yup.number()
    .typeError("Token revenue share must be a number")
    .required("Token revenue share is required")
    .positive("Token revenue share must be a positive number")
    .max(100, "Token revenue share cannot exceed 100%"), // Assuming a percentage
});

export default Validation;
