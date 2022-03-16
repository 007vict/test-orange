import React from 'react';
import classes from '../css/Header.module.css'
import container from '../css/Container.module.css'

function Header() {
  return (
    <header className={classes.header}>
      <div className={container.container}>
        <a href='/home' className={classes.logo}></a>
        <nav className={classes.nav}>
          <div className={classes.link}>
            <a href="/home">Home</a>
          </div>
          <div className={classes.link}>
            <a href="/services">Services</a>
          </div>
          <div className={classes.link}>
            <a href="/about">About</a>
          </div>
          <div className={classes.link}>
            <a href="/contact">Contact</a>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
