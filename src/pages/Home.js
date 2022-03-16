import React from 'react'
import Button from '../components/core/Button';
import classes from '../css/Home.module.css'
import cont from "../css/Container.module.css"
import logo from '../css/images/top-30.png'
import promo from "../css/images/promo.png"

export default function Home() {
  return (
    <section className={classes.hero}>
      <div className={cont.container}>
        <div className={classes.promo}>
          <div className={classes.desc}>
            <h1>Software Development Company</h1>
            <p>
              We help clients solve complex business problems: From development consulting to
              implementation, optimisation, and technology management
            </p>
          </div>

          <div className={classes.logo_top}>
            <img className={classes.top30} src={logo} alt="top-30" />
            <span>
              <strong>Top 30 Mobile App Development in the World</strong>
              <br />
              Clutch / January, 2022
              <br />
              <strong>Top 65 Web Development in the World</strong>
              <br />
              Clutch / June, 2021
            </span>
          </div>
          <Button />
        </div>
        <div className={classes.img_promo}>
          <img src={promo} alt="promo" />
        </div>
      </div>
    </section>
  );
}
