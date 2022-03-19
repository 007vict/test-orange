import React from 'react'
import Button from '../components/core/Button'
import Itemhome from "../pages/Itemhome"
import classes from '../css/Home.module.css'
import cont from "../css/Container.module.css"
import logo from '../css/images/top-30.png'
import promo from "../css/images/promo.png"
import { useSelector } from 'react-redux'


export default function Home() {
  const Items = useSelector(state => state.Home);
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
           { Items.map(item => <Itemhome name = {item.name}
                                          img = {item.img}
                                          key = {item.id} />) }
          </div>

        </div>
      </section>
    </>
  );
}
