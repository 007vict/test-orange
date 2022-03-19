import React from 'react'
import { Route, Routes } from 'react-router-dom'
import classes from '../css/Main.module.css'
import Home from '../pages/Home'

export default function Main() {
  return (
    <div className={classes.main}>
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
    </div>
  );
}
