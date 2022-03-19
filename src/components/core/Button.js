import React from 'react'
import { useDispatch } from 'react-redux'
import but from "../../css/Button.module.css"

let item = { name: 'Surprise', img: ['images/ss.png'], id: 9 }

export default function Button() {
  const dispatch = useDispatch()
  const addItemHome2 = (item) => {dispatch({type: "LIST_ITEMS", payload: item})}

  return (
    <button onClick={() => addItemHome2(item)} className={but.btn}>
      <a className={but.new_hero} href="/">
        <span>Go to Services</span>
      </a>
    </button>
  );
}
