import React from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import classes from '../css/Main.module.css'
import Home from '../pages/Home'

export default function Main() {
  return (
    <div className={classes.main}>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
