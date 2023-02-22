import React from 'react'

import cross from '../images/cross.png'

import '../styles/modal.css'

const Modal = ({active, setActive}) => {

  return (
    <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
      <div className={active ? 'modal__content active' : 'modal__content'} onClick={e => e.stopPropagation()}>
        <div onClick={() => setActive(false)} className='modal__cross'>
          <img src={cross} alt="cross" />
        </div>
        <div className='modal__title'>SUCCESS!</div>
        <div className='modal__info'>You have successfully subscribed to the email newsletter</div>
        <div onClick={() => setActive(false)} className='modal__button'>Close</div>
      </div>
    </div>
  )
}

export default Modal