import React from 'react'

const Break = ({_break,start,setBreak,setSecond}) => {

    
    function handleDecrement(){
        if(start) return;
        else{
            setSecond(0);
            if(_break <2 ) return setBreak(1);
            else{
                const sess = _break-1
                setBreak(sess);
         }
        }
    }

    function handleIncrement(){
        if(start) return;
        else{
            setSecond(0);
            if(_break >= 60) return setBreak(60);
            else{
            const sess = _break+1
            setBreak(sess);
        }
        }
    }
  return (
    <div className='break-length' id="break-len">
        <h2 id='break-label'>Break Length</h2>
        <div className='break-container'>
        <button id="break-decrement" onClick={handleDecrement}><i className="fa-solid fa-arrow-down"></i></button>
        <p id='break-length'>{_break}</p>
        <button id="break-increment" onClick={handleIncrement}><i className="fa-solid fa-arrow-up"></i></button>
        </div>
    </div>
  )
}

export default Break