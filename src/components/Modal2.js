import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const Modal2 = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose} size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
      <Modal.Header closeButton>
        <Modal.Title>Outras Disciplinas</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Não coloquei todas as disciplinas pois algumas são mais simples ou diretas, <br />
        o que não significa que são menos importantes, por exemplo Inglês. <br />
        Porém outras mais complexas que estão faltando serão adicionadas
        em breve quando eu começar a receber feedback de vocês e tiver conteúdo para adicionar. <br />
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
