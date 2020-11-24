import React from 'react'

export default function Miliseconds(props: any){
        let [mSeconds, setmSeconds] = React.useState(0);
        const [mFun, setmFun] = React.useState();

React.useEffect(()=>{
    if(props.condition === 2 && props.circleAnimate === true){
          setmFun(setInterval(mSecondsInterval, 17))
     }
         
},[props.circleAnimate])

if(props.condition === 1){
    clearInterval(Number(mFun));
    // stop
}
if(props.condition === 3){
    clearInterval(mFun);
    mSeconds = 0;
    // reset
}

function mSecondsInterval(){
    if(mSeconds !== 61){
        mSeconds++
    }else{
        mSeconds = 0
    }
    setmSeconds(mSeconds)
}
return (
        <div className="starter">
            {/* {console.log(mSeconds)} */}
        <img src={require((props.circleAnimate === false) ? "../images/clocks/disko.jpg" : "../images/clocks/diskoAnime.webp")} alt="deskoAnime"/>
         <span>{mSeconds}</span>
        </div>
    )
}