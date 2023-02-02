import React from 'react'

const Display = ({second,session,start,startClock,reset,durum}) => {
  return (
    <div className='display-container'>
        <div className='displayer'>
            <h2 id='timer-label' style={{color:`${session  < 1 ? 'red': ''}`}}>{durum} </h2>
            <p id='time-left' style={{color:`${session  < 1 ? 'red': ''}`}} >{session<10 ? ('0'+session):session}:{second<10 ? ('0'+second) : second}</p>
        </div>
        <div className="play-reset-stop">
            <button className="start_stop" id="start_stop" onClick={startClock}><i className={`fa-sharp fa-solid fa-${start? 'pause':'play'}`}></i></button>
            <button className="reset" id="reset" onClick={reset}><i className="fa-solid fa-arrows-rotate"></i></button>
        </div>
    </div>
  )
}

export default Display