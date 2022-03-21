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
        <div className={`${cont.container} ${cont.column}`}>
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
            {Items.map((item) => (
              <Itemhome name={item.name} img={item.img} key={item.id} />
            ))}
          </div>
        </div>
      </section>

      <section className={classes.solutions}>
        <div className={`${cont.container} ${cont.column}`}>
          <h2 className={classes.pretitle}>Software Development for Business</h2>

          <div className={classes.h4_desc}>
            <h4>Customer relationship management (CRM)</h4>
            <p>
              Customer relationship management (CRM) is a technology for managing your company’s
              connections and storing communications with existing and potential customers. CRM
              software consolidates customers’ data and documents it into a single database so that
              business users can more easily access and manage it.
            </p>
          </div>

          <div className={classes.h4_desc}>
            <h4>Enterprise resource planning (ERP)</h4>
            <p>
              Enterprise resource planning (ERP) is a process used by companies to manage and
              integrate the critical parts of their businesses. We customise your ERP solutions by
              upgrading your existing systems and developing new ERP solutions as necessary to cover
              every business purpose: inventory, distribution, logistics, management, accounting,
              etc.
            </p>
          </div>

          <div className={classes.h4_desc}>
            <h4>Point of Sales (POS)</h4>
            <p>
              A point of sale system (POS) is a combination of hardware and software that a business
              can use to process transactions. It can be in a physical store, where POS terminals
              and systems are used to process card payments or a virtual sales point such as a
              computer or mobile device.
            </p>
          </div>

          <div className={classes.banking}>
            <h3 className={classes.pretitle}>Mobile App Development</h3>
          </div>

          <div className={classes.h4_desc}>
            <h4>Native Mobile Applications</h4>
            <p>
              Native app development refers to building a mobile app exclusively for a single
              platform. The app is built with programming languages and tools that are specific to a
              single platform.
            </p>
          </div>

          <div className={classes.h4_desc}>
            <h4>Cross-Platform Native Mobile Applications</h4>
            <p>
              Cross-platform apps are compatible across multiple platforms like iOS and Android.
              This solution makes the development process faster and reduces the budget.
            </p>
          </div>

          <div className={classes.banking}>
            <h3 className={classes.pretitle}>Software as a service (or SaaS)</h3>
          </div>

          <div className={classes.h4_desc}>
            <h4>Multitenant Architecture</h4>
            <p>
              A multitenant architecture, in which all users and applications share a single, common
              infrastructure and code base that is centrally maintained. Because SaaS vendor clients
              are all on the same infrastructure and code base, vendors can innovate more quickly
              and save the valuable development time previously spent on maintaining numerous
              versions of outdated code.
            </p>
          </div>

          <div className={classes.h4_desc}>
            <h4>Easy Customisation</h4>
            <p>
              The ability for each user to easily customise applications to fit their business
              processes without affecting the common infrastructure. Because of the way SaaS is
              architected, these customisations are unique to each company or user and are always
              preserved through upgrades. That means SaaS providers can make upgrades more often,
              with less customer risk and much lower adoption cost.
            </p>
          </div>
        </div>
      </section>

      <section className={classes.contact}>
        <div className={`${cont.container} ${cont.column}`}>

          <div className={classes.h4_desc}>
            <h4>How do we get started?</h4>
            <p>
              If you need software for your business, please get in touch with us. We are happy to
              discuss your ideas, understand your goals, and develop software to move your business
              ahead.
            </p>
            <p>
              <strong>
                Get the commercial proposal within 24 hours. Start your project within 7 days
              </strong>
            </p>
          </div>

          <h2 className={classes.pretitle}>Contact Us</h2>

        </div>
      </section>
    </>
  );
}

