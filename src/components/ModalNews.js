import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import PropTypes from 'prop-types';

function ModalNews(props) {
  const { className } = props;

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const closeBtn = (
    <button className="close" onClick={toggle} type="button">
      &times;
    </button>
  );

  return (
    <div>
      <Button color="danger" onClick={toggle}>
       News
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle} close={closeBtn}>
         Novidades...
        </ModalHeader>
        <ModalBody>
          <p>Em próximos desevolvimentos da sprint do sistema Gerar Assinatura</p>
          <p>Será possível importar sua logo clicando em um selecionar arquivo</p>
          <p>Será possível importar um txt ou csv com os campos para gerar diversas assinatura de uma vez</p>
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={toggle}>
          Fechar
          </Button>{' '}
        </ModalFooter>
      </Modal>
    </div>
  );
}

ModalNews.propTypes = {
  className: PropTypes.string,
};

export default ModalNews;