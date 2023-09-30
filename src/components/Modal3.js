import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const Modal3 = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose} size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
      <Modal.Header closeButton>
        <Modal.Title>Site</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Site feito para testar minhas capacidades no Front-End. <br />
        Foram utilizados HTML , CSS, Javascript, React e Bootstrap. <br />
        Ainda espero adicionar mais funcionalidades, como um banco de dados para armazenar arquivos de semestres passados,
        mas por enquanto é sonho distante. <br />
        Por enquanto, preciso dos seus feedbacks sobre as disciplinas. <br />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Fechar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Modal3;
