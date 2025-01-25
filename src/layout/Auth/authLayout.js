import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, Outlet, useLocation } from "react-router-dom";
// css
import styles from "./Auth.module.scss";
// img
import logo from "../../Assets/images/logo.png";
import login from "../../Assets/images/login.png";
import ResetPassword from "../../Assets/images/reset-password.png";

const AuthLayout = () => {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <>
      <section
        className={`${styles.authLayout} authLayout position-relative py-3 d-flex align-items-center justify-content-center flex-column`}
        style={{
          zIndex: "9",
          height: "100vh",
        }}
      >
        <Container className="">
          <Row className="justify-content-center">
            <Col lg="12" className="my-2 py-4 h-100">
              <div
                className={`${styles.formWrpper} formWrpper position-relative px-3 py-5`}
                style={{ maxHeight: "85vh" }}
              >
                <Row className="justify-content-center">
                  {/* <Col
                    lg="6"
                    className={`${styles.imgWrpper} text-center my-2 border-end border-secondary`}
                  >
                    <div className="top mb-4">
                      <img src={logo} alt="" className="img-fluid" />
                      
                    </div>
                    <div className="imgWrpper d-none d-lg-block">
                      {location.pathname == "/reset-password" ? (
                        <>
                          <img
                            src={ResetPassword}
                            alt=""
                            className="img-fluid"
                          />
                        </>
                      ) : (
                        <>
                          <img src={login} alt="" className="img-fluid h-100" />
                        </>
                      )}
                    </div>
                  </Col> */}
                  <Col lg="6" className="my-2">
                    <div className="px-lg-4">
                      <div
                        className={`${styles.innerForm} p-3 p-lg-4 innerForm`}
                      >
                        <Outlet />
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default AuthLayout;
