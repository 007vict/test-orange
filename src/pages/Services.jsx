import React from 'react'
import classes from '../css/Services.module.css';
import cont from '../css/Container.module.css';
import Itemhome from '../pages/Itemhome';
import { useSelector } from 'react-redux';


function Services() {
  const Items = useSelector((state) => state.Home.Items);

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

      <div className={classes.technologies}>
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
      </div>

      <div className={classes.do_it}>
        <div className={classes.do_it_img_bg}>
          <div className={`${cont.container} ${cont.column}`}>
            <h6>
              "They were great. We had a good connection and the team was easily available. They
              were really hardworking. Tapston helped a lot by leading us through the development
              process"
            </h6>

            <div className={classes.review_do_it}>
              <div className={classes.billo}></div>
              <h5>Founder, Billo</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services