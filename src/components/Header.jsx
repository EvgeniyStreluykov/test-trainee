import React from 'react'

import logo from '../images/logo.png'
import frameLeft from '../images/frameLeft.png'
import frameRight from '../images/frameRight.png'

import '../styles/header.css'

const Header = () => {
  return (
    <div className='header'>
      <div className='frameL'>
        <img src={frameLeft} alt="frame" />
      </div>
      <div className='frameR'>
        <img src={frameRight} alt="frame" />
      </div>
      <div className='header__logo'>
        <a href="#trainee">
          <img src={logo} alt="logo" />
        </a>

      </div>

    </div>
  )
}

export default Header