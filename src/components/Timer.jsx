import React from 'react'

import '../styles/timer.css'
import vector from '../images/vector.png'

const Timer = () => {

  function kek() {
    const deadline = new Date(2023, 11, 27, 11, 11, 11)

    let timerId = null;

    function countdownTimer() {
      const diff = deadline - new Date();
      if (diff <= 0) {
        clearInterval(timerId);
      }
      const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
      const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
      const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
      const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
      $days.textContent = days < 10 ? '0' + days : days;
      $hours.textContent = hours < 10 ? '0' + hours : hours;
      $minutes.textContent = minutes < 10 ? '0' + minutes : minutes;
      $seconds.textContent = seconds < 10 ? '0' + seconds : seconds;
    }

    const $days = document.querySelector('.timer__days');
    const $hours = document.querySelector('.timer__hours');
    const $minutes = document.querySelector('.timer__minutes');
    const $seconds = document.querySelector('.timer__seconds');

    countdownTimer();
  };
  setInterval(() => {
    kek()
  }, 1000);
  return (
    <div className="timer">
      <div className="timer__items">
        <div className="timer__item timer__days">00</div>
        <div className="timer__item timer__hours">00</div>
        <div className="timer__item timer__minutes">00</div>
        <div className="timer__item timer__seconds">00</div>
      </div>
      <div className='timer__content'>
        <div className='timer__names-container'>
          <img src={vector} alt="days" />
          <div className='timer__names large-screen'>Days</div>
          <div className='timer__names small-screen'>DD</div>
        </div>
        <div className='timer__names-container'>
          <img src={vector} alt="days" />
          <div className='timer__names large-screen'>Hours</div>
          <div className='timer__names small-screen'>HH</div>
        </div>
        <div className='timer__names-container'>
          <img src={vector} alt="days" />
          <div className='timer__names large-screen'>Minutes</div>
          <div className='timer__names small-screen'>MM</div>
        </div>
        <div className='timer__names-container'>
          <img src={vector} alt="days" />
          <div className='timer__names large-screen'>Seconds</div>
          <div className='timer__names small-screen'>SS</div>
        </div>
      </div>
    </div>
  )
}

export default Timer