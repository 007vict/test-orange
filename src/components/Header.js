import React from 'react';
import classes from '../css/Header.module.css'
import container from '../css/Container.module.css'

function Header() {
  return (
    <header className={classes.header}>
      <div className={container.container}>
        <a href='#' className={classes.logo}></a>
        <nav className={classes.nav}>
          <div className={classes.link}>
            <a href="#">Home</a>
          </div>
          <div className={classes.link}>
            <a href="#">Services</a>
          </div>
          <div className={classes.link}>
            <a href="#">About</a>
          </div>
          <div className={classes.link}>
            <a href="#">Contact</a>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
