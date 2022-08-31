import React from 'react'
import itemcss from "../css/Itemhome.module.css"

export default function Itemhome(props) {
  return (
    <div className={itemcss.item}>
      <p>{props.name}</p>
      <div>
        {props.img.map((img) => (
          <img src={img} alt={img} key={img}/>
        ))}
      </div>
    </div>
  )
}