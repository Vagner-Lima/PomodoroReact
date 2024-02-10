import { useEffect, useState } from "react"

function PomodoroTimer(){
    const [minutes,setMinutes] = useState(25)
    const [seconds,setSeconds] = useState(0)
    const [displayMessage, setDisplayMessage] = useState(false)
    
    const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;
          
    useEffect(() => {
        let interval = setInterval(() =>{
            clearInterval(interval);
            if (seconds === 0) {
                if(minutes !== 0) {
                    setSeconds(59);
                    setMinutes(minutes-1);
                }else{
                    let minutes = displayMessage ? 24 : 4;
                    let seconds = 59;
                    setSeconds(seconds)
                    setMinutes(minutes)
                    setDisplayMessage(!displayMessage);
                }
            }else{
                setSeconds(seconds-1)
            }
        }, 1000)
    }, [seconds])
    
    return(
        <div className="container">
            <p className="title">Pomodoro Timer</p>
            {displayMessage && <h1 className="message">Break time! New session starts in:</h1>}
            <p className="timer">{timerMinutes}:{timerSeconds}</p>
        </div>
    )
}

export default PomodoroTimer