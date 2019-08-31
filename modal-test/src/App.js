import React, { useState } from 'react';
import Modal from 'react-modal';


const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

function App() {
  const [modalVisible, setModalVisible] = useState(false);


  const handleOpenModal = () => {
    setModalVisible(!modalVisible);
  }

  const handleCloseModal = () => {
    setModalVisible(false)
  }

  return (
    <div>
      <p>{ modalVisible ? 'Visible' : 'Invisible' }</p>
      <button onClick={handleOpenModal}>Open Modal</button>
      <Modal
        isOpen={modalVisible}
        style={customStyles}
      >
        <h2>Some modal title</h2>
        <p>Modal Content</p>
        <button onClick={handleCloseModal}>OK</button>
      </Modal>
    </div>
  );
}

export default App;
