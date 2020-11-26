import React from 'react'
import "./css/App1.css"
import "./css/recent.css"
import Clock from "./clock"
import "./css/animatedCircle.css"
import Miliseconds from './miliseconds';
import Recent from './recent';

export default function App1(){
    const [circleAnimate, setCircleAnimate] = React.useState(false);
    const [boxShadow, setBoxShadow] = React.useState(0);

    // const [seconds, setSeconds] = React.useState(0);

    let [timer, seTimer] = React.useState({mSeconds: 0, seconds: 0, minutes: 0, hourse: 0});
    let [timerFun, setTimerFun] = React.useState({});

    // let [seconds, setSeconds] = React.useState(0);
    // let [minutes, setMinutes] = React.useState(0);
    // let [hourse, setHourse] = React.useState(0);
    
    let {mSeconds, seconds, minutes, hourse} = timer;
    
    function runTimer(){
                mSeconds++
                    if(mSeconds === 100){
                        seconds++
                        mSeconds = 0
                    }
                    if(seconds === 60){
                        minutes++
                        seconds = 0;
                    }
                    if(minutes === 60){
                        hourse++
                        minutes = 0
                        seconds = 0;
                    }

        return seTimer({mSeconds, seconds, minutes, hourse})
    }

function _play(){
        if(boxShadow !== 2){
            // runTimer();
            setTimerFun(setInterval(runTimer, 10))
            }
        setBoxShadow(2)
        setCircleAnimate(true);

    }
    function _stop(){
        clearInterval(Number(timerFun));

        setCircleAnimate(false);
        setBoxShadow(1)
    }

    function _reset(){
        clearInterval(Number(timerFun));
            seTimer({mSeconds: 0, seconds: 0, minutes: 0, hourse: 0})

            setCircleAnimate(false);        
            setBoxShadow(3);
    }
return(
        <div className="main-div">
       <div className="mobile-phone">
           <img src={require("../images/smart-phone13.png")} className="smart-phone" alt="smart phone png"/>
           <div className="animatedCircle">
            <div className={(circleAnimate === false) ? "zcode-stop" : "zcode"}>asadali</div>

           <p className="counter">
                {"0"+hourse}:
                {(minutes <= 9) ? "0"+minutes : minutes}:
                {(seconds <= 9) ? "0"+seconds : seconds}
           </p>
           {/* {console.log(hourse, minutes, seconds)} */}
           </div>

            <Recent />

           <div className="control-buttons">    
           <img onClick={_stop} src={require("../images/buttons/stop.png")} style={(boxShadow === 1) ? {boxShadow:"1px 15px 25px blue"} : {boxShadow:"1px 2px 4px blue"}} alt="stop button"/>
           <img onClick={_play} src={require("../images/buttons/play.png")} style={(boxShadow === 2) ? {boxShadow:"1px 15px 25px blue"} : {boxShadow:"1px 2px 4px blue"}} alt="play button"/>
           <img onClick={_reset} src={require("../images/buttons/reset.png")} style={(boxShadow === 3) ? {boxShadow:"1px 15px 25px blue"} : {boxShadow:"1px 2px 4px blue"}} alt="reset button"/>
           </div>
     
       
        </div>
        <Miliseconds  circleAnimate={circleAnimate} mSeconds={mSeconds} />
       <Clock />
    </div>  
    )
}
