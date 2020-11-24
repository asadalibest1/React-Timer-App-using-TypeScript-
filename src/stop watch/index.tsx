import React from 'react'

export default function App() {

let [timerOn, setTimerOn] = React.useState(false);
let [timerStart, setTimerStart] = React.useState(0);
let [timerTime, setTimerTime] = React.useState(0);
let [timer, setTimer] = React.useState();
let [timerFun, setTimerFun] = React.useState({});


const startTimer = () => {
          setTimerOn(true);
          setTimerTime(timerTime);
          setTimerStart(0);

       setTimer(setInterval(() => {
        setTimerTime(timerStart++);
    }, 10));
      };

    let centiseconds = ("0" + (Math.floor(timerTime / 10) % 100)).slice(-2);
    let seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
    let minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);
    let hours = ("0" + Math.floor(timerTime / 3600000)).slice(-2);

const stopTimer = () => {
        setTimerOn(false);
        clearInterval(timer);
      };

      const resetTimer = () => {
          setTimerStart(0);
          setTimerTime(0);
};
    
    return (
        <div>
                <h1>{centiseconds+" : "+seconds+" : "+minutes+" : "+hours}</h1>
                <div>{timer}</div>
            {timerOn === false && timerTime === 0 && (
                <button onClick={startTimer}>Start</button>
              )}
              {timerOn === true && (
                <button onClick={stopTimer}>Stop</button>
              )}
              {timerOn === false && timerTime > 0 && (
                <button onClick={startTimer}>Resume</button>
              )}
              {timerOn === false && timerTime > 0 && (
                <button onClick={resetTimer}>Reset</button>
              )}
              {/* <button onClick={startTimer}>startTimer</button>   */}
            </div>
        )
}
