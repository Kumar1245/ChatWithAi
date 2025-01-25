import React from "react";
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";
import "react-phone-input-2/lib/bootstrap.css";

const FormikForm = ({
  loading,
  initialValues,
  col,
  inputFields,

  ...props
}) => {
// console.log(inputFields,initialValues, "<=====field" )

  return (
    <>
      <form>
        <div className="row">
          {inputFields.map((field) => (
            <div className={`form-group col-md-${col} col-12`} key={field.name}>
              <label className="form-label">{field.label}</label>
              <p className="m-0 fw-bold">{initialValues[field.name]}</p>
            </div>
          ))}
        </div>
      </form>
    </>
  );
};

export default FormikForm;
