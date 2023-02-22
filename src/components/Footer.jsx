import React, { useState, useEffect } from 'react'

import arrow from '../images/arrow.png'

import '../styles/footer.css'
import Modal from './Modal'

const Footer = () => {
  const [email, setEmail] = useState('')
  const [emailDirty, setEmailDirty] = useState(false)
  const [emailError, setEmailError] = useState('Enter your email')
  const [formValid, setFormValid] = useState(false)
  const [modalActive, setModalActive] = useState(false)


  const blurHandle = (e) => {
    // eslint-disable-next-line
    switch (e.target.name) {
      case 'email':
        setEmailDirty(true)
        break
    }
  }

  const emailHandler = (e) => {
    setEmail(e.target.value)
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError('Incorrect email')
    } else {
      setEmailError('')
    }
  }

  useEffect(() => {
    if (emailError) {
      setFormValid(false)
    } else {
      setFormValid(true)
    }
  }, [emailError]);

  return (
    <div className='footer'>

      <form className='footer__block-input'>
        <div className='footer__block'>
          {(emailDirty && emailError)
            && <div style={
              {
                alignItems: 'center',
                display: 'flex',
                color: 'red',
                marginLeft: '23px',
                justifyContent: 'center',
                textAlign: 'center',
                font: 'small-caption'
              }}>{emailError}</div>}
          
            <input
              className='footer__block-input'
              value={email}
              onChange={e => emailHandler(e)}
              onBlur={e => blurHandle(e)}
              name='email'
              type="text"
              placeholder='Enter your Email and get notified'
            />
         
          <button onClick={() => setModalActive(true)} type='button' disabled={!formValid}>
            <img src={arrow} alt="button" />
          </button>
          <Modal active={modalActive} setActive={setModalActive} />
        </div>
      </form>

    </div>
  )
}

export default Footer