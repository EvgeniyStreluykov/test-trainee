import React from 'react'

import '../styles/main.css'
import Timer from './Timer'
import arrow1 from '../images/arrow1.png'

const Main = () => {

  return (
    <div className='main'>
      <div className='main__group'>
        <div className='main__group-title'>Under Construction</div>
        <div className='main__group-description'>We're making lots of improvements and will be back soon</div>
      </div>
      <div className='main__timer'>
        <Timer />
      </div>
      <div className='main__events'>
        <div className='main__events-info'>
          Check our event page when you wait:
        </div>
        <div className='main__butotn-events'>
          Go to the event
          <img src={arrow1} alt="" />
        </div>
      </div>

    </div>
  )
}

export default Main