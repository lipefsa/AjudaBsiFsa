import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const Modal2 = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose} size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
        
      <Modal.Header closeButton>
        <Modal.Title>Contatos dos Professores</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <a href="https://docs.google.com/spreadsheets/d/1AT0JB7lhvKRMm-ETQt0RQigtJyr01XxLS1sALjNqxj0/edit?gid=0#gid=0"> PLANILHA DE CONTATOS</a>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Fechar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Modal2;
