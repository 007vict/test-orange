import React from 'react'
import Button from '../components/core/Button'
import classes from '../css/Home.module.css'
import cont from "../css/Container.module.css"
import logo from '../css/images/top-30.png'
import promo from "../css/images/promo.png"
import gazp from '../css/images/gazpr-en.png';
import nornikel from '../css/images/nornickel-en.svg';



export default function Home() {
  return (
    <>
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

      <section className={classes.technologies}>
        <div className={`${cont.container} ${cont.technolog}`}>
          <div>
            <h2 className={classes.pretitle}>Enterprise Software Development</h2>
            <p className={classes.pretitle_desc}>
              Our goal is to help your business become a leader and enhance your company’s projects
              with our services, skills, and support. Hiring us means a successful software launch
              combining stylish interface design, digital consultation and enterprise software
              integration.
            </p>
          </div>

          <div className={classes.enterprise}>
            <div className={classes.item}>
              <p>Enterprise</p>
              <div>
                <img src={nornikel} alt="nornikel" />
                <img src={gazp} alt="gazprom" />
              </div>
            </div>

            <div className={classes.item}>
              <p>Logistics</p>
              <div>
                <img src={nornikel} alt="nornikel" />
                <img src={gazp} alt="gazprom" />
              </div>
            </div>

            <div className={classes.item}>
              <p>E-Commerce And Retail</p>
              <div>
                <img src={nornikel} alt="nornikel" />
                <img src={gazp} alt="gazprom" />
              </div>
            </div>

            <div className={classes.item}>
              <p>Smart Devices</p>
              <div>
                <img src={nornikel} alt="nornikel" />
                <img src={gazp} alt="gazprom" />
              </div>
            </div>

            <div className={classes.item}>
              <p>Banks And Finance</p>
              <div>
                <img src={nornikel} alt="nornikel" />
                <img src={gazp} alt="gazprom" />
              </div>
            </div>

            <div className={classes.item}>
              <p>Medicine And Healthcare</p>
              <div>
                <img src={nornikel} alt="nornikel" />
                <img src={gazp} alt="gazprom" />
              </div>
            </div>

            <div className={classes.item}>
              <p>Entertainment</p>
              <div>
                <img src={nornikel} alt="nornikel" />
                <img src={gazp} alt="gazprom" />
              </div>
            </div>

            <div className={classes.item}>
              <p>HoReCa</p>
              <div>
                <img src={nornikel} alt="nornikel" />
                <img src={gazp} alt="gazprom" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
