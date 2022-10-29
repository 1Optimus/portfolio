import React from 'react'
import Moda from 'react-modal';
import './modal.css'
import Slides from '../slide/Slide.jsx'
const Modal = ({img, activeModal, setActiveModal}) => {
const customStyles = {
    content: {
        width:'75%',
        height:'78%',
        top: '44%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        textAlign: "center",
    },
};
  function closeModal() {
    setActiveModal(false);
  }
  return (
 <div>
    <Moda
      isOpen={activeModal}
      onRequestClose={closeModal}
      style={customStyles}
      ariaHideApp={false}
      contentLabel="Modal"
    >
      <p id='tittleModal'>{img.id}</p>
      <Slides imagenes={img.images}/>
      <button className='btn btn-primary' onClick={closeModal}>close</button>      
    </Moda>
  </div>
  )
}

export default Modal