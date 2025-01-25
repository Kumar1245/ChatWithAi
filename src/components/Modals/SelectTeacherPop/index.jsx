import React, { useState } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";

// img
import p1 from "../../../Assets/images/login.png";

// css
import styles from "./SelectTeacherPop.module.scss";

// img

const SelectTeacherPop = ({ selectTeacher, setSelectTeacher }) => {
  const handleSelectTeacher = () => setSelectTeacher(!selectTeacher);

  return (
    <>
      <Modal
        show={selectTeacher}
        className={`${styles.SelectTeacherPop}  SelectTeacherPop`}
        onHide={handleSelectTeacher}
        backdrop="static"
        keyboard={false}
        centered
        size="xl"
      >
        <Modal.Body className={`${styles.modalBody} position-relative rounded`}>
          <div className="border-bottom pb-2 position-relative">
            <h6 className="m-0 fw-sbold text-center">
              Select Substitute Teacher
            </h6>
            <Button
              onClick={handleSelectTeacher}
              className="border-0 p-0 position-absolute"
              variant="transparent"
              style={{ right: 10, top: 0 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 16 15"
                fill="none"
              >
                <g clip-path="url(#clip0_0_6282)">
                  <path
                    d="M1.98638 14.906C1.61862 14.9274 1.25695 14.8052 0.97762 14.565C0.426731 14.0109 0.426731 13.1159 0.97762 12.5617L13.0403 0.498994C13.6133 -0.0371562 14.5123 -0.00735193 15.0485 0.565621C15.5333 1.08376 15.5616 1.88015 15.1147 2.43132L2.98092 14.565C2.70519 14.8017 2.34932 14.9237 1.98638 14.906Z"
                    fill="#000"
                  />
                  <path
                    d="M14.0347 14.9061C13.662 14.9045 13.3047 14.7565 13.0401 14.4941L0.977383 2.4313C0.467013 1.83531 0.536401 0.938371 1.13239 0.427954C1.66433 -0.0275797 2.44884 -0.0275797 2.98073 0.427954L15.1145 12.4907C15.6873 13.027 15.7169 13.9261 15.1806 14.4989C15.1593 14.5217 15.1372 14.5437 15.1145 14.5651C14.8174 14.8234 14.4263 14.9469 14.0347 14.9061Z"
                    fill="#000"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_0_6282">
                    <rect
                      width="15"
                      height="15"
                      fill="white"
                      transform="translate(0.564453)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </Button>
          </div>
          <Row className="justify-content-center">
            <Col md="12" className="my-2 ">
              <ul
                className={`${styles.radioListCard} list-unstyled ps-0 mb-5 d-flex  align-items-center gap-10`}
                style={{ overflow: "auto" }}
              >
                <li className="flex-shrink-0 position-relative p-2">
                  <input
                    type="radio"
                    name="assignTeacher"
                    className="file position-absolute h-100 w-100 "
                    checked
                  />
                  <div
                    className={`${styles.cardCstm} bg-white px-3 py-2 cardCstm d-flex align-items-center gap-10`}
                  >
                    <div
                      className="imgWrp rounded-circle border-white border"
                      style={{ height: 60, width: 60 }}
                    >
                      <img
                        src={p1}
                        alt=""
                        className="img-fluid object-fit-cover h-100 w-100 rounded-circle"
                      />
                    </div>
                    <div className="content">
                      <h5 className="m-0 fw-bold">Ms. Jackson</h5>
                      <p className="m-0">English</p>
                    </div>
                  </div>
                </li>
                <li className="flex-shrink-0 position-relative p-2">
                  <input
                    type="radio"
                    name="assignTeacher"
                    className="file position-absolute h-100 w-100 "
                  />
                  <div
                    className={`${styles.cardCstm} bg-white px-3 py-2 cardCstm d-flex align-items-center gap-10`}
                  >
                    <div
                      className="imgWrp rounded-circle border-white border"
                      style={{ height: 60, width: 60 }}
                    >
                      <img
                        src={p1}
                        alt=""
                        className="img-fluid object-fit-cover h-100 w-100 rounded-circle"
                      />
                    </div>
                    <div className="content">
                      <h5 className="m-0 fw-bold">Ms. Jackson</h5>
                      <p className="m-0">English</p>
                    </div>
                  </div>
                </li>
                <li className="flex-shrink-0 position-relative p-2">
                  <input
                    type="radio"
                    name="assignTeacher"
                    className="file position-absolute h-100 w-100 "
                  />
                  <div
                    className={`${styles.cardCstm} bg-white px-3 py-2 cardCstm d-flex align-items-center gap-10`}
                  >
                    <div
                      className="imgWrp rounded-circle border-white border"
                      style={{ height: 60, width: 60 }}
                    >
                      <img
                        src={p1}
                        alt=""
                        className="img-fluid object-fit-cover h-100 w-100 rounded-circle"
                      />
                    </div>
                    <div className="content">
                      <h5 className="m-0 fw-bold">Ms. Jackson</h5>
                      <p className="m-0">English</p>
                    </div>
                  </div>
                </li>
              </ul>
            </Col>
          </Row>

          <div className="modalFooter">
            <Row className="justify-content-center">
              <Col md="3" className="my-2 ">
                <Button className="d-flex align-items-center justify-content-center commonBtn w-100 fw-sbold">
                  Submit
                </Button>
              </Col>
              <Col md="3" className="my-2 ">
                <Button className="d-flex align-items-center justify-content-center commonBtn borderedBtn w-100 bg-transparent themeClr fw-sbold">
                  Cancel
                </Button>
              </Col>
            </Row>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default SelectTeacherPop;
