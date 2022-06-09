import React from 'react'
import classes from '../css/Services.module.css';
import cont from '../css/Container.module.css';


function Services() {
  return (
    <section className={classes.services}>
      <div className={classes.top}>
        <div className={classes.gradient_dark}>
          <div className={`${cont.container}`}>
            <h1>Enterprise Software Development</h1>
          </div>
        </div>
      </div>
      <div className={classes.software_info}>
        <div className={`${cont.container} ${cont.column}`}>
          <div className={classes.page_info}>
            <h2>Enterprise Software Development and Consulting</h2>
            <p>
              Our enterprise applications automate, streamline and optimise your processes to unlock
              greater business value.
            </p>
            <p>
              Tapston's delivery methodologies and skills are built around one main goal: To deliver
              better performance and higher productivity than other partners.
            </p>
            <p>
              Our goal is to help your business become a leader and enhance your company’s projects
              with our services, skills, and support. Hiring us means a successful software launch
              combining stylish interface design, digital consultation and enterprise software
              integration.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services