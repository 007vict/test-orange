import React from 'react'
import classes from '../css/Services.module.css';
import cont from '../css/Container.module.css';


function Services() {
  return (
    <section className={classes.services}>
      <div className={classes.gradient_dark}>
        <div className={`${cont.container}`}>
          <h1>Enterprise Software Development</h1>
        </div>
      </div>
    </section>
  );
}

export default Services