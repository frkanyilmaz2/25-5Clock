import React from 'react'

const Session = ({session,setSession,start,setDisplaySession,setSecond}) => {

    function handleDecrement(){
        if(start) return;
        else{
            setSecond(0);
            if(session < 2) return setSession(1);
            else{const sess = session-1
            setSession(sess);
            setDisplaySession(sess);}
        }
    }

    function handleIncrement(){
        if(start) return;
        else{
            setSecond(0);
            if(session >= 60) return setSession(60);
            const sess = session+1
            setSession(sess);
            setDisplaySession(sess);
            
        }
    }

  return (
    <div className='session-length' id="session-len">
        <h2 id='session-label'>Session Length</h2>
        <div className='break-container'>
        <button id='session-decrement' onClick={handleDecrement}><i className="fa-solid fa-arrow-down"></i></button>
        <p id='session-length'>{session}</p>
        <button id='session-increment' onClick={handleIncrement}><i className="fa-solid fa-arrow-up"></i></button>
        </div>
    </div>
  )
}

export default Session