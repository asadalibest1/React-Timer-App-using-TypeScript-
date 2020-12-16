import React from 'react'
import "../css/recent.css"

export default function Recent(props: any) {

    const { Recent } = props;

    return (
        <div className="recent-div">
            {Recent.map((item: any, ind: number) => {
                const { seconds, minutes, hourse } = item.timer;
                return (
                    <div className="recent" key={ind}>
                        <span>{(item.time) ? item.time : ""}</span>
                        <span>
                            {(seconds <= 9) ? "0" + seconds : seconds}:
                            {(minutes <= 9) ? "0" + minutes : minutes}:
                            {(hourse <= 9) ? "0" + hourse : hourse}
                        </span>
                        <span>{(item.date) ? item.date : ""}</span>
                    </div>
                )
            })}
        </div>
    )
}