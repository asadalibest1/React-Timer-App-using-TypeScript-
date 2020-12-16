import React from 'react'

export default function MiliSeconds(props: any) {
  const { miliSeconds } = props;

  return (
    <div className="starter">
      <img src={require((props.circleAnimate === false) ? "../images/clocks/disko.jpg" : "../images/clocks/diskoAnime.webp")} alt="deskoAnime" />
      <span>{miliSeconds}</span>
    </div>
  )
}
