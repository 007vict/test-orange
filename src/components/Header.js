import React from 'react';
import classes from '../css/Header.module.css'
import container from '../css/Container.module.css'
import { Link } from 'react-router-dom';


function Header() {
  return (
        <header className={classes.header}>
          <div className={container.container}>
            <Link to="/home" className={classes.logo}></Link>
            <nav className={classes.nav}>
              <div className={classes.link}>
                <Link to="/home">Home</Link>
              </div>
              <div className={classes.link}>
                <Link to="/services">Services</Link>
              </div>
              <div className={classes.link}>
                <Link to="/about">About</Link>
              </div>
              <div className={classes.link}>
                <Link to="/contact">Contact</Link>
              </div>
            </nav>
          </div>
        </header>
  );
}

export default Header;
