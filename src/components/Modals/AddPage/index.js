import React from "react";
import { Button, Modal, Form } from "react-bootstrap";
import Validation from "../../../pages/SideTabPages/ContentPage/Validation";
import inputFields from "../../../pages/SideTabPages/ContentPage/inputFields";
import FormikForm from "../../shared/FormikForm";


export default function AddPageModal({
  show,
  handleClose,
  handleConfirm,
  title,
  content,
  loading,
  initialValues,
}) {
  return (
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
        size="lg"
      >
        <Modal.Header className="py-3 text-dark" closeButton>
          <Modal.Title className="fw-bold text-dark">{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormikForm
            initialValues={initialValues}
            validationSchema={Validation}
            onSubmit={handleConfirm}
            loading={loading}
            inputFields={inputFields}
            buttonText={"Submit"}
            formSize="md"
          />
        </Modal.Body>
      </Modal>
  );
}