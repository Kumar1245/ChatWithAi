import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import { useState } from "react";

// css
import styles from "../../../layout/Auth/Auth.module.scss";
import OTPInput from "react-otp-input";

const Otp = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  return (
    <>
      <div className="formInner position-relative px-lg-3">
        <div className="w-100 inner">
          <div className="top pt-2 text-center border-bottom border-secondary">
            <h5 className="m-0 fw-bold py-1 text-muted">Enter OTP</h5>
          </div>
          <Form className={`${styles.form} pt-lg-4 pt-2`}>
            <Row className="justify-content-center">
              <Col lg="12" className="my-2">
                <div className="otpWrp">
                  <OTPInput
                    value={otp}
                    onChange={setOtp}
                    numInputs={4}
                    renderInput={(props) => <input {...props} />}
                  />
                </div>
              </Col>
              <Col lg="12" className="my-2">
                <div
                  className={`${styles.btnWrpper} py-3 btnWrpper text-center`}
                >
                  <Button
                    onClick={() => navigate("/reset-password")}
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
export default Otp;
