import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import styles from "../../../layout/Auth/Auth.module.scss";
import { loginUser } from "../../../store/actions";
import { useDispatch, useSelector } from "react-redux";
import FormikForm from "../../../components/shared/FormikForm";
import { toast } from "react-toastify";
import Validation from "./Validation";
import inputFields from "./inputFields";

const Login = ({ submitting }) => {
  const { loading } = useSelector((state) => state.Auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [pass, setPass] = useState();
  const handlePass = () => {
    setPass(!pass);
  };
  const initialValues = {
    email: "",
    password: "",
  };
  const handleSubmit_ = async (values) => {
    try {
      const callBack = (err, response) => {
        const { status, status_code, message } = response;
        console.log(status, status_code, message, "alll data ========<>");
        if (status === "success" && status_code === 200) {
          navigate("/dashboard");
          toast.success(message);
        } else {
          toast.error(message);
        }
      };
      await dispatch(loginUser({ data: values, callBack }));
    } catch (err) {
      console.log(err, "<====err");
    }
  };

  return (
    <>
      <div className="formInner position-relative px-lg-3">
        <div className="w-100 inner">
          <div className="top pt-2 text-center border-bottom border-secondary">
            <h5 className="m-0 fw-bold py-1 text-muted">Login to Account</h5>
          </div>

          <FormikForm
            initialValues={initialValues}
            validationSchema={Validation}
            onSubmit={handleSubmit_}
            // loading={loading}
            inputFields={inputFields}
            submitting={submitting}
            buttonText={"SignIn"}
            is_block={true}
            col={12}
            is_passwordHide={false}
          />
          {/* <Form onSubmit={handleSubmit} className={`${styles.form} pt-3`}>
            <Row className="justify-content-center">
              <Col lg="12" className="my-2">
                <label
                  htmlFor="Email ID / Phone number"
                  className="form-label m-0 pb-1 text-muted fw-bold"
                >
                  Email ID
                </label>
                <div className="iconWithText position-relative">
                  <span
                    className="icn border-end pe-2 position-absolute border-secondary"
                    style={{ left: 10 }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="21"
                      height="20"
                      viewBox="0 0 21 20"
                      fill="none"
                    >
                      <path
                        d="M16.1819 1.5H5.68188C3.47275 1.5 1.68188 3.29086 1.68188 5.5V14.5C1.68188 16.7091 3.47275 18.5 5.68188 18.5H16.1819C18.391 18.5 20.1819 16.7091 20.1819 14.5V5.5C20.1819 3.29086 18.391 1.5 16.1819 1.5Z"
                        stroke="#9A9A9A"
                        stroke-width="1.5"
                      />
                      <path
                        d="M1.729 5.58984L8.934 9.71984C9.53765 10.0706 10.2234 10.2553 10.9215 10.2553C11.6197 10.2553 12.3054 10.0706 12.909 9.71984L20.134 5.58984"
                        stroke="#9A9A9A"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    className={`${styles.formControl} form-control rounded-pill bg-white ps-5`}
                    placeholder="jackson.graham@example.com"
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </Col>
              <Col lg="12" className="my-2">
                <label
                  htmlFor="Password"
                  className="form-label m-0 pb-1 text-muted fw-bold"
                >
                  Password
                </label>
                <div className="iconWithText position-relative">
                  <span
                    className="icn border-end pe-2 position-absolute border-secondary"
                    style={{ left: 10 }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="21"
                      viewBox="0 0 16 21"
                      fill="none"
                    >
                      <path
                        d="M8 16C7.46957 16 6.96086 15.7893 6.58579 15.4142C6.21071 15.0391 6 14.5304 6 14C6 12.89 6.89 12 8 12C8.53043 12 9.03914 12.2107 9.41421 12.5858C9.78929 12.9609 10 13.4696 10 14C10 14.5304 9.78929 15.0391 9.41421 15.4142C9.03914 15.7893 8.53043 16 8 16ZM14 19V9H2V19H14ZM14 7C14.5304 7 15.0391 7.21071 15.4142 7.58579C15.7893 7.96086 16 8.46957 16 9V19C16 19.5304 15.7893 20.0391 15.4142 20.4142C15.0391 20.7893 14.5304 21 14 21H2C1.46957 21 0.960859 20.7893 0.585786 20.4142C0.210714 20.0391 0 19.5304 0 19V9C0 7.89 0.89 7 2 7H3V5C3 3.67392 3.52678 2.40215 4.46447 1.46447C5.40215 0.526784 6.67392 0 8 0C8.65661 0 9.30679 0.129329 9.91342 0.380602C10.52 0.631876 11.0712 1.00017 11.5355 1.46447C11.9998 1.92876 12.3681 2.47995 12.6194 3.08658C12.8707 3.69321 13 4.34339 13 5V7H14ZM8 2C7.20435 2 6.44129 2.31607 5.87868 2.87868C5.31607 3.44129 5 4.20435 5 5V7H11V5C11 4.20435 10.6839 3.44129 10.1213 2.87868C9.55871 2.31607 8.79565 2 8 2Z"
                        fill="#9A9A9A"
                      />
                    </svg>
                  </span>
                  <input
                    type={pass ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    className={`${styles.formControl} form-control rounded-pill bg-white ps-5`}
                    placeholder="*************"
                    onChange={handleInputChange}
                    required
                  />
                  <Button
                    onClick={handlePass}
                    className="border-0 p-0 position-absolute icn"
                    variant="transparent"
                    style={{ right: 10 }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="11"
                      viewBox="0 0 14 11"
                      fill="none"
                    >
                      <path
                        d="M8.96236 5.23432C8.96236 5.60618 8.8521 5.96968 8.64551 6.27886C8.43892 6.58804 8.14529 6.82902 7.80174 6.97132C7.4582 7.11362 7.08017 7.15085 6.71546 7.07831C6.35076 7.00576 6.01576 6.8267 5.75282 6.56376C5.48988 6.30082 5.31082 5.96582 5.23827 5.60112C5.16573 5.23641 5.20296 4.85838 5.34526 4.51484C5.48756 4.17129 5.72854 3.87766 6.03772 3.67107C6.34691 3.46448 6.71041 3.35422 7.08226 3.35422C7.58089 3.35422 8.0591 3.5523 8.41169 3.90489C8.76428 4.25748 8.96236 4.73569 8.96236 5.23432ZM13.8945 5.54768C13.7817 5.73569 11.1621 10.2479 7.08226 10.2479C3.00242 10.2479 0.382804 5.73569 0.269997 5.54768C0.214993 5.45241 0.186035 5.34433 0.186035 5.23432C0.186035 5.12432 0.214993 5.01624 0.269997 4.92097C0.382804 4.73296 3.00242 0.220703 7.08226 0.220703C11.1621 0.220703 13.7817 4.73296 13.8945 4.92097C13.9495 5.01624 13.9785 5.12432 13.9785 5.23432C13.9785 5.34433 13.9495 5.45241 13.8945 5.54768ZM10.2158 5.23432C10.2158 4.61457 10.032 4.00874 9.68768 3.49344C9.34336 2.97813 8.85397 2.5765 8.2814 2.33934C7.70882 2.10217 7.07878 2.04011 6.47094 2.16102C5.8631 2.28193 5.30476 2.58037 4.86653 3.0186C4.4283 3.45683 4.12986 4.01516 4.00895 4.62301C3.88804 5.23085 3.9501 5.86089 4.18727 6.43347C4.42443 7.00604 4.82607 7.49543 5.34137 7.83975C5.85667 8.18406 6.46251 8.36784 7.08226 8.36784C7.91331 8.36784 8.71034 8.0377 9.29798 7.45005C9.88563 6.86241 10.2158 6.06538 10.2158 5.23432Z"
                        fill="#B1B1B1"
                      />
                    </svg>
                  </Button>
                </div>
              </Col>
              <Col lg="12" className="my-2">
                <div className="d-flex align-items-center justify-content-between gap-10">
                  <div className="left d-flex align-items-center gap-10">
                    <input type="checkbox" className="form-check shadow-sm" />
                    <label
                      htmlFor=""
                      className="form-label m-0 text-muted fw-sbold"
                    >
                      Remember Password
                    </label>
                  </div>
                  <Link to="/forgot-password" className={`themeClr fw-sbold`}>
                    Forgot Password?
                  </Link>
                </div>
              </Col>
              <Col lg="12" className="my-2">
                <div
                  className={`${styles.btnWrpper} py-3 btnWrpper text-center`}
                >
                  <Button
                    type="submit"
                    className="d-inline-flex align-items-center justify-content-center commonBtn rounded-pill fw-bold"
                  >
                    Sign In
                  </Button>
                </div>
              </Col>
              <Col lg="12" className="my-2">
                <p className="text-center text-muted m-0">
                  Don’t have an account?{" "}
                  <Link to={"/signup"} className="fw-bold themeClr">
                    Sign up
                  </Link>{" "}
                </p>
              </Col>
            </Row>
          </Form> */}
        </div>
      </div>
    </>
  );
};
export default Login;
