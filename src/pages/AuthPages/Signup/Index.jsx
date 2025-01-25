import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import { useState } from "react";

// css
import styles from "../../../layout/Auth/Auth.module.scss";

const SignUp = () => {
  const navigate = useNavigate();
  const [pass, setPass] = useState();
  const handlePass = () => {
    setPass(!pass);
  };
  return (
    <>
      <div className="formInner position-relative px-lg-3">
        <div className="w-100 inner">
          <div className="top pt-2 text-center border-bottom border-secondary">
            <h5 className="m-0 fw-bold py-1 text-muted">
              Sign up to passion-ai’s Admin Panel
            </h5>
          </div>
          <Form className={`${styles.form} pt-3`}>
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
                    className={`${styles.formControl} form-control rounded-pill bg-white ps-5`}
                  />
                </div>
              </Col>
              <Col lg="12" className="my-2">
                <label
                  htmlFor="Email ID / Phone number"
                  className="form-label m-0 pb-1 text-muted fw-bold"
                >
                  Phone number
                </label>
                <div className="iconWithText position-relative">
                  <span
                    className="icn border-end pe-2 position-absolute border-secondary"
                    style={{ left: 10 }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M16.629 13.891L17.085 13.438L16.026 12.374L15.572 12.827L16.629 13.891ZM18.614 13.248L20.525 14.287L21.24 12.969L19.33 11.931L18.614 13.248ZM20.892 16.351L19.472 17.764L20.529 18.827L21.949 17.415L20.892 16.351ZM18.606 18.218C17.156 18.354 13.406 18.233 9.34399 14.195L8.28599 15.258C12.718 19.665 16.937 19.881 18.746 19.712L18.606 18.218ZM9.34399 14.195C5.47299 10.345 4.83099 7.10796 4.75099 5.70296L3.25299 5.78796C3.35299 7.55596 4.14799 11.144 8.28599 15.258L9.34399 14.195ZM10.719 8.01496L11.006 7.72896L9.94999 6.66596L9.66299 6.95096L10.719 8.01496ZM11.234 4.09396L9.97399 2.40996L8.77299 3.30996L10.033 4.99296L11.234 4.09396ZM5.73299 2.04296L4.16299 3.60296L5.22099 4.66696L6.78999 3.10696L5.73299 2.04296ZM10.191 7.48296C9.66099 6.95096 9.66099 6.95096 9.66099 6.95296H9.65899L9.65599 6.95696C9.60878 7.00515 9.56625 7.05772 9.52899 7.11396C9.47499 7.19396 9.41599 7.29896 9.36599 7.43196C9.24422 7.77528 9.21389 8.14437 9.27799 8.50296C9.41199 9.36796 10.008 10.511 11.534 12.029L12.592 10.965C11.163 9.54496 10.823 8.68096 10.76 8.27296C10.73 8.07896 10.761 7.98296 10.77 7.96096C10.775 7.94696 10.777 7.94596 10.77 7.95496C10.7612 7.96883 10.7511 7.98188 10.74 7.99396L10.73 8.00396C10.7268 8.00707 10.7234 8.01007 10.72 8.01296L10.191 7.48296ZM11.534 12.029C13.061 13.547 14.21 14.139 15.076 14.271C15.519 14.339 15.876 14.285 16.147 14.184C16.2985 14.1279 16.4403 14.0482 16.567 13.948C16.5842 13.9336 16.6009 13.9186 16.617 13.903L16.624 13.897L16.627 13.894L16.628 13.892C16.628 13.892 16.629 13.891 16.1 13.359C15.57 12.827 15.573 12.826 15.573 12.826L15.575 12.824L15.577 12.822L15.583 12.817L15.593 12.807C15.605 12.7962 15.6177 12.7861 15.631 12.777C15.641 12.77 15.638 12.773 15.624 12.779C15.599 12.788 15.501 12.819 15.304 12.789C14.89 12.725 14.02 12.385 12.592 10.965L11.534 12.029ZM9.97399 2.40896C8.95399 1.04896 6.94999 0.83296 5.73299 2.04296L6.78999 3.10696C7.32199 2.57796 8.26599 2.63296 8.77299 3.30996L9.97399 2.40896ZM4.75199 5.70396C4.73199 5.35796 4.89099 4.99596 5.22099 4.66796L4.16199 3.60396C3.62499 4.13796 3.20199 4.89396 3.25299 5.78796L4.75199 5.70396ZM19.472 17.764C19.198 18.038 18.902 18.192 18.607 18.219L18.746 19.712C19.481 19.643 20.082 19.273 20.53 18.828L19.472 17.764ZM11.006 7.72896C11.991 6.74996 12.064 5.20296 11.235 4.09496L10.034 4.99396C10.437 5.53296 10.377 6.23996 9.94899 6.66696L11.006 7.72896ZM20.526 14.288C21.343 14.732 21.47 15.778 20.893 16.352L21.951 17.415C23.291 16.082 22.878 13.859 21.241 12.97L20.526 14.288ZM17.085 13.439C17.469 13.057 18.087 12.963 18.615 13.249L19.331 11.932C18.247 11.342 16.903 11.505 16.027 12.375L17.085 13.439Z"
                        fill="#9A9A9A"
                      />
                    </svg>
                  </span>
                  <input
                    type="text"
                    className={`${styles.formControl} form-control rounded-pill bg-white ps-5`}
                  />
                </div>
              </Col>
              <Col lg="12" className="my-2">
                <label
                  htmlFor="Email ID / Phone number"
                  className="form-label m-0 pb-1 text-muted fw-bold"
                >
                  Day care name
                </label>
                <div className="iconWithText position-relative">
                  <span
                    className="icn border-end pe-2 position-absolute border-secondary"
                    style={{ left: 10 }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="22"
                      viewBox="0 0 18 22"
                      fill="none"
                    >
                      <path
                        d="M9 9C11.2091 9 13 7.20914 13 5C13 2.79086 11.2091 1 9 1C6.79086 1 5 2.79086 5 5C5 7.20914 6.79086 9 9 9Z"
                        stroke="#9A9A9A"
                        stroke-width="1.5"
                      />
                      <path
                        d="M17 16.5C17 18.985 17 21 9 21C1 21 1 18.985 1 16.5C1 14.015 4.582 12 9 12C13.418 12 17 14.015 17 16.5Z"
                        stroke="#9A9A9A"
                        stroke-width="1.5"
                      />
                    </svg>
                  </span>
                  <input
                    type="text"
                    className={`${styles.formControl} form-control rounded-pill bg-white ps-5`}
                  />
                </div>
              </Col>
              <Col lg="12" className="my-2">
                <label
                  htmlFor="Email ID / Phone number"
                  className="form-label m-0 pb-1 text-muted fw-bold"
                >
                  Upload Documents
                </label>
                <div className="iconWithText position-relative">
                  <span
                    className="icn border-end pe-2 position-absolute border-secondary"
                    style={{ left: 10 }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M2.75 14C2.28587 14 1.84075 13.8156 1.51256 13.4874C1.18437 13.1592 1 12.7141 1 12.25V9.75C1 9.55109 1.07902 9.36032 1.21967 9.21967C1.36032 9.07902 1.55109 9 1.75 9C1.94891 9 2.13968 9.07902 2.28033 9.21967C2.42098 9.36032 2.5 9.55109 2.5 9.75V12.25C2.5 12.388 2.612 12.5 2.75 12.5H13.25C13.3163 12.5 13.3799 12.4737 13.4268 12.4268C13.4737 12.3799 13.5 12.3163 13.5 12.25V9.75C13.5 9.55109 13.579 9.36032 13.7197 9.21967C13.8603 9.07902 14.0511 9 14.25 9C14.4489 9 14.6397 9.07902 14.7803 9.21967C14.921 9.36032 15 9.55109 15 9.75V12.25C15 12.7141 14.8156 13.1592 14.4874 13.4874C14.1592 13.8156 13.7141 14 13.25 14H2.75Z"
                        fill="#9A9A9A"
                      />
                      <path
                        d="M11.78 4.71983C11.8496 4.78943 11.9048 4.87206 11.9425 4.96299C11.9801 5.05393 11.9995 5.1514 11.9995 5.24983C11.9995 5.34826 11.9801 5.44572 11.9425 5.53666C11.9048 5.6276 11.8496 5.71023 11.78 5.77983C11.7104 5.84943 11.6278 5.90464 11.5368 5.94231C11.4459 5.97997 11.3484 5.99936 11.25 5.99936C11.1516 5.99936 11.0541 5.97997 10.9632 5.94231C10.8722 5.90464 10.7896 5.84943 10.72 5.77983L8.74999 3.81083V9.49983C8.74999 9.69874 8.67097 9.88951 8.53032 10.0302C8.38967 10.1708 8.1989 10.2498 7.99999 10.2498C7.80108 10.2498 7.61031 10.1708 7.46966 10.0302C7.32901 9.88951 7.24999 9.69874 7.24999 9.49983V3.81083L5.27999 5.77983C5.21039 5.84943 5.12776 5.90464 5.03682 5.94231C4.94589 5.97997 4.84842 5.99936 4.74999 5.99936C4.65156 5.99936 4.55409 5.97997 4.46316 5.94231C4.37222 5.90464 4.28959 5.84943 4.21999 5.77983C4.15039 5.71023 4.09518 5.6276 4.05751 5.53666C4.01985 5.44572 4.00046 5.34826 4.00046 5.24983C4.00046 5.1514 4.01985 5.05393 4.05751 4.96299C4.09518 4.87206 4.15039 4.78943 4.21999 4.71983L7.46999 1.46983C7.61062 1.32938 7.80124 1.25049 7.99999 1.25049C8.19874 1.25049 8.38937 1.32938 8.52999 1.46983L11.78 4.71983Z"
                        fill="#9A9A9A"
                      />
                    </svg>
                  </span>
                  <input
                    type="file"
                    className={`file position-absolute icn w-100 h-100 rounded-pill bg-white ps-5`}
                  />
                  <input
                    type="text"
                    className={`${styles.formControl} form-control rounded-pill bg-white ps-5`}
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
                    className={`${styles.formControl} form-control rounded-pill bg-white ps-5`}
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
                <div
                  className={`${styles.btnWrpper} py-3 btnWrpper text-center`}
                >
                  <Button
                    onClick={() => navigate("/login")}
                    className="d-inline-flex align-items-center justify-content-center commonBtn rounded-pill fw-bold"
                  >
                    Sign Up
                  </Button>
                </div>
              </Col>
              <Col lg="12" className="my-2">
                <p className="text-center text-muted m-0">
                  Already have an account?
                  <Link to={"/login"} className="fw-bold themeClr">
                    Sign in
                  </Link>{" "}
                </p>
              </Col>
            </Row>
          </Form>
        </div>
      </div>
    </>
  );
};
export default SignUp;
