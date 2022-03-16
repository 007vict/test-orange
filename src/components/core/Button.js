import React from 'react'
import but from "../../css/Button.module.css"

export default function Button() {
  return (
    <button className={but.btn}>
      <a class={but.new_hero} href="/services">
        <span>Go to Services</span>
      </a>
    </button>
  );
}
