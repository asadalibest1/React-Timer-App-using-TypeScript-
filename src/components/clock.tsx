import React from 'react'

export default function Clock() {
    const time = new Date().toLocaleTimeString();    
    const [Time, setTime] = React.useState(time);

    
    setInterval(()=>{
        const time = new Date().toLocaleTimeString();
        setTime(time);
    }, 1000)

    return (
        <div className="date-time">
        <img src={require("../images/clocks/waterFire.gif")} alt="waterFire" />
        <span>{Time.replace(/:/g, " : ")}</span>

        </div>    )
}
