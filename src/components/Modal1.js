import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const Modal1 = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose} size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered >
      <Modal.Header closeButton>
        <Modal.Title>Sobre BSI</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Deixe Feedbacks sobre o que poderia estar aqui, como infos gerais, etc.
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Fechar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Modal1;
