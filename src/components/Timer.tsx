import React, { useState } from "react";
import "../css/Timer.css";
import "../css/animatedCircle.css"

import MiliSeconds from "./miliSeconds";
import Clock from "./clock"
import Recent from './recent';


function Timer() {

  const [circleAnimate, setCircleAnimate] = React.useState(false);

  const [time, setTime] = useState({ miliSeconds: 0, seconds: 0, minutes: 0, hourse: 0 });
  const [timerInterval, setTimerInterval] = useState({});
  const [timerStatus, setTimerStatus] = useState(0);

  let [_Recent, setRecent] = React.useState<any>([]);


  function recent() {
    const _list = {
      time: new Date().toLocaleTimeString(),
      timer: time,
      date: new Date().toLocaleDateString()
    };
    setRecent([..._Recent, _list]);
  }

  const startTimer = () => {
    if (timerStatus !== 2) {
      runTimer();
      setTimerStatus(2);
      setTimerInterval(setInterval(runTimer, 10));
      setCircleAnimate(true);

    }
  };

  const pauseTimer = () => {
    clearInterval(Number(timerInterval));
    setCircleAnimate(false);
    setTimerStatus(1);
  };

  const resetTimer = () => {
    clearInterval(Number(timerInterval));
    setTimerStatus(3);
    recent();
    setTime({ miliSeconds: 0, seconds: 0, minutes: 0, hourse: 0 });
    setCircleAnimate(false);
  };

  let { miliSeconds, seconds, minutes, hourse } = time;

  const runTimer = () => {
    if (miliSeconds === 100) {
      seconds++;
      miliSeconds = 0;
    }
    if (seconds === 60) {
      minutes++;
      seconds = 0;
    }

    if (minutes === 60) {
      hourse++;
      seconds = 0;
    }
    miliSeconds++;
    return setTime({ miliSeconds, seconds, minutes, hourse });
  };


  return (
    <div className="main-div">
      <div className="mobile-phone">
        <img src={require("../images/smart-phone13.png")} className="smart-phone" alt="smart phone png" />
        <div className="animatedCircle">
          <div className={(circleAnimate === false) ? "zcode-stop" : "zcode"}>asadali</div>

          <p className="counter">

            {seconds < 10 ? `0${seconds}` : seconds}:
                {minutes < 10 ? `0${minutes}` : minutes}:
                {hourse < 10 ? `0${hourse}` : hourse}
          </p>
        </div>

        <Recent Recent={_Recent} />

        <div className="control-buttons">
          <img className="stop" onClick={pauseTimer} src={require("../images/buttons/stop.png")} style={(timerStatus === 1) ? { boxShadow: "1px 15px 25px blue" } : { boxShadow: "1px 2px 4px blue" }} alt="stop button" />
          <img className="play" onClick={startTimer} src={require("../images/buttons/play.png")} style={(timerStatus === 2) ? { boxShadow: "1px 15px 25px blue" } : { boxShadow: "1px 2px 4px blue" }} alt="play button" />
          <img className="reset" onClick={resetTimer} src={require("../images/buttons/reset.png")} style={(timerStatus === 3) ? { boxShadow: "1px 15px 25px blue" } : { boxShadow: "1px 2px 4px blue" }} alt="reset button" />
        </div>

      </div>
      <MiliSeconds miliSeconds={miliSeconds} circleAnimate={circleAnimate} />
      <Clock />
    </div>
  );
}

export default Timer;