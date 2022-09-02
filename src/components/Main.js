import React from 'react'
import { Route, HashRouter } from 'react-router-dom'
import classes from '../css/Main.module.css'
import Home from '../pages/Home'
import Contact from '../pages/Contact'
import Services from '../pages/Services'

export default function Main() {
  return (
    <div className={classes.main}>
      <HashRouter>
        <Route exact path="/contact/" element={<Contact />} />
        <Route exact path="/services/" element={<Services />} />
        <Route path="/" element={<Home />} />
      </HashRouter>
    </div>
  );
}
