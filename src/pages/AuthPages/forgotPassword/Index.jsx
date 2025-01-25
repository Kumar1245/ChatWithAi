import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import { useState } from "react";

// css
import styles from "../../../layout/Auth/Auth.module.scss";

const ForgotPassword = () => {
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
            <h5 className="m-0 fw-bold py-1 text-muted">Forgot Password</h5>
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
                    placeholder="jackson.graham@example.com"
                  />
                </div>
              </Col>
              <Col lg="12" className="my-2">
                <div
                  className={`${styles.btnWrpper} py-3 btnWrpper text-center`}
                >
                  <Button
                    onClick={() => navigate("/otp")}
                    className="d-inline-flex align-items-center justify-content-center commonBtn rounded-pill fw-bold"
                  >
                    Save
                  </Button>
                </div>
              </Col>
            </Row>
          </Form>
        </div>
      </div>
    </>
  );
};
export default ForgotPassword;
