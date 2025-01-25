import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import p1 from "../../../Assets/images/cover.png";
import { useDispatch, useSelector } from "react-redux";
import FormikForm from "../../../components/shared/FormikForm";
import Validation from "./Validation";
import inputFields from "./inputFields";
import { toast } from "react-toastify";
import { ProfileView, updateProfile } from "../../../store/profile/actions";
import FadeLoader from "react-spinners/FadeLoader";
import { ChangePassword } from "../../../store/auth/actions";
const Profile = ({ submitting, loader }) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [profileData, setProfileData] = useState();
  const { profile, loading } = useSelector((state) => state.Profile);
  const { user } = useSelector((state) => state.Auth);
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState();
  const [formData, setFormData] = useState({
    currentPassword: "",
    password: "",
    confirmPassword: "",
  });

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const dispatch = useDispatch();
  const initialValues = {
    name: profileData?.data?.name,
    email: profileData?.data?.email,
    phoneNo: profileData?.data?.phoneNo,
    gender: profileData?.data?.gender,
  };

  const fetchData = async () => {
    try {
      const callback = (err, res) => {
        if (err) {
          toast.error(err);
        } else {
          setProfileData(res);
          // toast.success(res.datamessage);
        }
      };
      dispatch(ProfileView({ callback }));
    } catch (error) {
      console.error(error, "<===err");
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };
  const validateForm = () => {
    const { currentPassword, password, confirmPassword } = formData;
    const newErrors = {};
    if (!currentPassword) {
      newErrors.currentPassword = "Current password is required.";
    }
    if (!password) {
      newErrors.password = "Password is required.";
    } else {
      if (password.length < 8) {
        newErrors.password = "Password must be at least 8 characters.";
      }
      if (!/[A-Z]/.test(password)) {
        newErrors.password =
          "Password must include at least one uppercase letter.";
      }
      if (!/[a-z]/.test(password)) {
        newErrors.password =
          "Password must include at least one lowercase letter.";
      }
      if (!/[0-9]/.test(password)) {
        newErrors.password = "Password must include at least one digit.";
      }
      if (!/[@$!%*?&#]/.test(password)) {
        newErrors.password =
          "Password must include at least one special character.";
      }
    }
    if (!confirmPassword) {
      newErrors.confirmPassword = "Confirm password is required.";
    } else if (confirmPassword !== password) {
      newErrors.confirmPassword = "Passwords do not match.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit_ = (data) => {
    try {
      const callBack = (err, res) => {
        if (err) {
          console.log(err);
          toast.error("Invalid Password");
        } else {
          console.log("Callback success:", res);
          toast.success(res.message);
        }
      };
      dispatch(ChangePassword({ data, callback: callBack }));
    } catch (err) {
      console.log(err);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      handleSubmit_(formData);
    }
  };
  const updateProfileSubmit_ = async (values) => {
    try {
      let query = {
        name: values.name,
        email: values.email,
        phoneNo: values.phoneNo,
        gender: values.gender,
      };
      const callBack = (err, res) => {
        if (err) {
          console.log("Callback error:", err);
          toast.error(err);
        } else {
          fetchData();
          console.log("Callback success:", res);
          toast.success("Profile Updated successfully");
        }
      };
      dispatch(updateProfile({ data: query, callback: callBack }));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {loading && (
        <div className="main-loader">
          <FadeLoader size={1000} />
        </div>
      )}
      <section className={` myProfile position-relative`}>
        <div className="top">
          <img src={p1} alt="" className="img-fluid w-100 object-fit-cover" />
        </div>
        <Container>
          <Row>
            <Col lg="12" className="my-2">
              <div className="cardCstm p-3 pt-0 rounded">
                <div className="section-body">
                  <p className="section-lead m-2">
                    Change information about yourself on this page.
                  </p>
                  <div className="row mt-sm-4">
                    <div className="col-12">
                      <div className="card">
                        <div className="card-body">
                          <FormikForm
                            initialValues={initialValues}
                            validationSchema={Validation}
                            onSubmit={updateProfileSubmit_}
                            loading={loading}
                            inputFields={inputFields}
                            submitting={submitting}
                            buttonText="Submit"
                            is_block={false}
                            col={6}
                            imageRemoveButton={true}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <Row
            className=" border mx-3 rounded border"
            style={{ backgroundColor: "white" }}
          >
            <Form className="mx-3" onSubmit={handleSubmit}>
              <div className="py-3 d-flex">
                <div className="">
                  <Row>
                    <Col lg="3" className="my-2">
                      <label
                        htmlFor="currentPassword"
                        className="form-label m-0 pb-1 fw-sbold text-uppercase"
                      >
                        Current Password
                      </label>
                      <div className="position-relative">
                        <input
                          type={showPassword ? "text" : "password"}
                          className="form-control"
                          name="currentPassword"
                          value={formData.currentPassword}
                          onChange={handleChange}
                        />
                        {errors?.currentPassword && (
                          <p style={{ color: "red" }}>
                            {errors?.currentPassword}
                          </p>
                        )}
                      </div>
                    </Col>
                    <Col lg="3" className="my-2">
                      <label
                        htmlFor="password"
                        className="form-label m-0 pb-1 fw-sbold text-uppercase"
                      >
                        Password
                      </label>
                      <div className="position-relative">
                        <input
                          type={showPassword ? "text" : "password"}
                          className="form-control"
                          name="password"
                          value={formData.password}
                          onChange={handleChange}
                        />
                        {errors?.password && (
                          <p style={{ color: "red" }}>{errors?.password}</p>
                        )}
                      </div>
                    </Col>
                    <Col lg="3" className="my-2">
                      <label
                        htmlFor="confirmPassword"
                        className="form-label m-0 pb-1 fw-sbold text-uppercase"
                      >
                        Confirm Password
                      </label>
                      <div className="position-relative">
                        <input
                          type={showPassword ? "text" : "password"}
                          className="form-control"
                          name="confirmPassword"
                          value={formData.confirmPassword}
                          onChange={handleChange}
                        />
                        {errors?.confirmPassword && (
                          <p style={{ color: "red" }}>
                            {errors?.confirmPassword}
                          </p>
                        )}
                      </div>
                    </Col>
                    <Col lg="3" className="" style={{ marginTop: "12px" }}>
                      <div className="d-flex gap-2 position-relative mt-4">
                        <Button
                          className="d-flex align-items-center justify-content-center w-100 fw-sbold py-0"
                          type="submit"
                        >
                          Submit
                        </Button>
                        <Button
                          className="d-flex align-items-center justify-content-center w-100 fw-sbold py-0"
                          type="button"
                          onClick={() => setShowPassword((prev) => !prev)}
                        >
                          {showPassword ? "Hide Password" : "Show Password"}
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </Form>
          </Row>
        </Container>
      </section>
    </>
  );
};
export default Profile;
