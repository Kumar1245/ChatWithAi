import React, { useState } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";

// css
import styles from "./ConfirmationPop.module.scss";

// img

export const allModels = {
  logout: {
    title: "Do you want to Logout?",
    cancelText: "No",
    confirmText: "Yes",
  },
  delete: {
    title: "Are you sure you want to delete ?",
    cancelText: "No",
    confirmText: "Delete",
  },
};

const ConfirmationPop = ({
  confirmation,
  setConfirmation,
  confirmHandler,
  type,
}) => {
  const hideHandler = () => {
    setConfirmation(false);
  };
  return (
    <>
      <Modal
        show={confirmation}
        className={`${styles.ConfirmationPop} transparentModal`}
        onHide={hideHandler}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Body className={`${styles.modalBody}`}>
          <div className="px-md-5 text-center mx-auto">
            <h3 className="m-0 fw-bold themeBlue">{allModels[type]?.title}</h3>
            <div className="btnWrpper mt-4 d-flex align-items-center justify-content-center gap-10">
              <div className="px-2 w-100">
                <Button
                  onClick={hideHandler}
                  className="fw-sbold d-flex align-items-center justify-content-center commonBtn w-100 GreyBtn"
                >
                  {allModels[type]?.cancelText}
                </Button>
              </div>
              <div className="px-2 w-100">
                <Button
                  onClick={confirmHandler}
                  className="fw-sbold d-flex align-items-center justify-content-center commonBtn w-100"
                >
                  {allModels[type]?.confirmText}
                </Button>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ConfirmationPop;
