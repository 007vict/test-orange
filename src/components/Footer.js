import React from 'react'
<<<<<<< HEAD
=======
import classes from '../css/Footer.module.css'
import container from '../css/Container.module.css'

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={container.container}>
        <div>
          <h6>© 2014 - 2021 Tapston Development, LLC</h6>
        </div>
        <div className={classes.clutch}>
          <div className={classes.logo_wrapper}>
            <span className={classes.logo_text}>Reviewed on</span>
            <a
              className={classes.logotype}
              target="_blank"
              href="https://clutch.co/profile/tapston?utm_source=widget&utm_medium=2&utm_campaign=widget&utm_content=logo#summary"></a>
          </div>
          <div className={classes.cont_stars}>
            <div className={classes.fivestars}>
              <span className="active"></span>
              <span className="active"></span>
              <span className="active"></span>
              <span></span>
              <span></span>
            </div>
            <span className={classes.reviews_count}>
              <a href="https://clutch.co/profile/tapston?utm_source=widget&amp;utm_medium=2&amp;utm_campaign=widget&amp;utm_content=num_reviews#reviews">
                21 reviews
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
>>>>>>> services
}
