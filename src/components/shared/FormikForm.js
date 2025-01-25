import React from "react";
import { Formik } from "formik";
import LoadingButton from "../../components/shared/LoadingButton";
import { Link, useNavigate } from "react-router-dom";
import Select from "react-select";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import Dropzone from "../Dropzone";
import CKEditorField from "./CKEditorField";
const FormikForm = ({
  loading,
  className,
  children,
  initialValues,
  validationSchema,
  onSubmit,
  inputFields,
  submitting,
  buttonText,
  is_block,
  backPath,
  ValidationError,
  ClickButton,
  col,
  imageRemoveButton,
  selectDisable,
  PathUrl,
  paramValue,
  is_disable,
  disable_button,
  formSize = "lg",
  ...props
}) => {
  const navigate = useNavigate();
  const navigateToAnotherPage = (selectedValue) => {
    navigate(PathUrl, {
      state: { paramValue: selectedValue },
    });
  };
  return (
    <>
      <Formik
        initialValues={initialValues}
        enableReinitialize
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          setFieldValue,
        }) => (
          <form className="col-12" onSubmit={handleSubmit}>
            {/* {console.log("errors",errors)} */}
            {console.log(values, "values")}
            <div className="row justify-content-between col-12">
              {inputFields.map((field) => (
                <div
                  className={`form-group my-2 col-md-${col} ${
                    formSize === "md" ? "col-12" : "col-4"
                  }`}
                  key={field.name}
                >
                  {field.type === "image" ? (
                    <>
                      {field.label && <label>{field?.label}</label>}
                      <div className="">
                        <div className="uploadImg  bg-light" style={{border: " #ddd"}}>
                          <Dropzone
                            file={
                              values[field.name]
                                ? {
                                    url: values[field.name],
                                    baseUrl: values["baseUrl"],
                                  }
                                : null
                            }
                            onChange={(e) => {
                              console.log(e, "<===dATA");
                              setFieldValue("image", e.target.value);
                              // setFieldValue("baseUrl", e.target?.baseUrl);
                            }}
                          />
                        </div>
                      </div>
                    </>
                  ) : field.type === "phone" ? (
                    <>
                      {field.label && <label>{field?.label}</label>}
                      <PhoneInput
                        inputClass={"custom_phone_input"}
                        enableSearch
                        disableSearchIcon
                        disableCountryGuess={true}
                        disableCountryCode={true}
                        placeholder=""
                        inputProps={{
                          name: field.name,
                          onBlur: handleBlur,
                        }}
                        country={props?.selectedCountry}
                        value={values[field.name]}
                        onChange={(phone, country) => {
                          console.log("**************************", field.name);
                          console.log("country?.dialCode", country?.dialCode);
                          console.log("phone", phone);
                          const mobileNumber = phone.startsWith(
                            country?.dialCode
                          )
                            ? phone.slice(country?.dialCode?.length)
                            : phone;
                          console.log(
                            mobileNumber,
                            "mobile ==================>"
                          );
                          setFieldValue(field.name, mobileNumber);
                          setFieldValue("countryCode", country.dialCode);
                        }}
                        onBlur={handleBlur}
                        // className={`phone-input ${errors[field.name] && 'is-invalid'}`}
                      />
                    </>
                  ) : field.type === "select" ? (
                    <>
                      {field.label && <label>{field?.label}</label>}
                      <Select
                        name={field.name}
                        options={field.options} // Replace with your options data
                        onChange={(selectedOption) => {
                          setFieldValue(field.name, selectedOption.value);
                        }}
                        onBlur={handleBlur}
                        placeholder={field.placeholder}
                        // value={values[field.name]}
                        value={field.options.find(
                          (option) => option.value === values[field.name]
                        )} // Find the
                        className={`select-control ${
                          errors[field.name] && ValidationError !== false
                            ? "is-invalid"
                            : ""
                        } }`}
                        isDisabled={selectDisable}
                      />
                    </>
                  ) : field.type === "dynamic_select" ? (
                    <>
                      {field.label && <label>{field?.label}</label>}
                      <Select
                        name={field.name}
                        options={field.options} // Replace with your options data
                        onChange={(selectedOption) => {
                          setFieldValue(field.name, selectedOption.value);
                          navigateToAnotherPage(selectedOption.value);
                        }}
                        onBlur={handleBlur}
                        placeholder="Select an option"
                        // value={values[field.name]}
                        value={field.options.find(
                          (option) => option.value === values[field.name]
                        )} // Find the
                        className={`select-control ${
                          errors[field.name] && ValidationError !== false
                            ? "is-invalid"
                            : ""
                        } }`}
                        isDisabled={selectDisable}
                      />
                    </>
                  ) : field.type === "ckeditor" ? (
                    <>
                      <label>{field?.label}</label>
                      <CKEditorField
                        className={`form-group col-md-${col} ${
                          formSize === "md" ? "col-12" : "col-4"
                        }`}
                        field={field.name}
                        setFieldValue={setFieldValue}
                        value={values[field.name]}
                        errors={errors}
                        disabled={selectDisable}
                      />
                    </>
                  ) : field.type === "textarea" ? (
                    <>
                      <label>{field?.label}</label>
                      <textarea
                        type={field.type}
                        className={`form-control ${
                          errors[field.name] && ValidationError !== false
                            ? "is-invalid"
                            : ""
                        }`}
                        name={field.name}
                        onChange={handleChange}
                        placeholder={field.placeholder}
                        onBlur={handleBlur}
                        value={values[field.name]}
                        style={{ height: "250px" }}
                        disabled={selectDisable}
                      />
                    </>
                  ) : field.type === "number" ? (
                    <>
                      {field.label && <label>{field?.label}</label>}
                      <input
                        type={field.type}
                        className={`form-control ${
                          errors[field.name] && ValidationError !== false
                            ? "is-invalid"
                            : ""
                        }`}
                        name={field.name}
                        onChange={handleChange}
                        placeholder={field.placeholder}
                        onBlur={handleBlur}
                        value={values[field.name]}
                        disabled={selectDisable}
                        min={field.min}
                        max={field.max}
                      />
                    </>
                  ) : (
                    <>
                      {field.label && <label>{field?.label}</label>}
                      <input
                        type={field.type}
                        className={`form-control ${
                          errors[field.name] && ValidationError !== false
                            ? "is-invalid"
                            : ""
                        } `}
                        name={field.name}
                        onChange={handleChange}
                        placeholder={field.placeholder}
                        onBlur={handleBlur}
                        value={values[field.name]}
                        disabled={selectDisable}
                        autoComplete="off"
                      />
                    </>
                  )}
                  {errors[field.name] && touched[field.name] && (
                    <p className="invalid-feedback">{errors[field.name]}</p>
                  )}
                </div>
              ))}
              {!disable_button && (
                <>
                  {buttonText !== false ? (
                    <div
                      className={`form-group my-2 pt-3 button-submit ${
                        formSize === "md" ? "col-12" : "col-4"
                      } w-100`}
                    >
                      <LoadingButton
                        type="submit"
                        className={`btn btn-primary btn-lg ${
                          is_block ? "btn-block" : ""
                        }`}
                        loading={loading}
                        disabled={submitting}
                      >
                        {!loading ? <>{buttonText}</> : ""}
                      </LoadingButton>
                    </div>
                  ) : (
                    <Link to={backPath}>
                      <div className="form-group button-submit">
                        <LoadingButton
                          type="submit"
                          className={`btn btn-primary btn-lg ${
                            is_block ? "btn-block" : ""
                          }`}
                          loading={loading}
                          disabled={submitting}
                        >
                          Back
                        </LoadingButton>
                      </div>
                    </Link>
                  )}
                </>
              )}
            </div>
          </form>
        )}
      </Formik>
    </>
  );
};

export default FormikForm;
