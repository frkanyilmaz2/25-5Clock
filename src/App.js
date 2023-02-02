import { useEffect, useState } from 'react';
import './App.css';
import Break from './components/Break';
import Display from './components/Display';
import Session from './components/Session';
import beep from './beep.mp3'

function App() {

  const [start,setStart] = useState(false);
  const [second,setSecond] = useState(0);
  const [session,setSession] = useState(25);
  const [displaySession,setDisplaySession] = useState(25);
  const [durum,setDurum] = useState("Session");
  const [_break,setBreak] = useState(5);

  const audio = document.getElementById('beep');
  
  useEffect(()=>{
   if(start){ const secs = setInterval(() => {
      if(second !== 0){
        setSecond((old)=>old-1);
      }else if(displaySession>0){
        setSecond(59);
        setDisplaySession(displaySession-1);
      }else if(displaySession === 0 && second === 0 && durum === "Session"){
        const empty= "Break";
        setDurum(empty);
        setDisplaySession(_break);
        setSecond(0);
      }else{
        const empty= "Session";
        setDurum(empty);
        setDisplaySession(session);
        setSecond(0);
      }
    }, 1000);
    return()=>{
      clearInterval(secs);
    }
  };
  },[startClock])

  useEffect(()=>{
    playSound();
  },[durum])

  function startClock(){
    setStart(!start);
   
  }
function playSound(){
  if(!audio) return;
  audio.currentTime = 0;
  audio.play();
}
  function reset() {
    setDurum("Session");
    setStart(false);
    setSession(25);
    setDisplaySession(25);
    setSecond(0);
    setBreak(5);
    audio.pause();
    audio.currentTime = 0;
  }
  

  return (
    <div className="bigcontainer">
      <h1>25 + 5 Clock</h1>
      <audio className='beep' id="beep" src={beep}></audio>
      <Break _break={_break} setBreak={setBreak} start={start} setSecond={setSecond} />
      <Session session={session} setSession={setSession} setSecond={setSecond} setDisplaySession={setDisplaySession} start={start} />
      <Display second={second} reset={reset} start={start} startClock={startClock} session={displaySession} 
        durum = {durum}/>
    </div>
  );
}

export default App;
