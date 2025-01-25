import * as Yup from "yup";

const Validation = Yup.object().shape({
  type: Yup.string()
    .required("Type is required")
    .oneOf(["Ethnicity", "Style", "Breast", "Butt", "Accent"], "Invalid type selected"),
  name: Yup.string()
    .required("Modal Name is required")
    .min(2, "Modal Name must be at least 2 characters long")
    .max(50, "Modal Name can't exceed 50 characters"),
//   image: Yup.mixed()
//     .required("Image is required")
//     .test("fileType", "Only image files are allowed", (value) => {
//       return value && ["image/jpeg", "image/png", "image/jpg"].includes(value.type);
//     }),
});
export default Validation; 