import React from 'react'
import cont from '../css/Container.module.css';
import classes from "../css/Contact.module.css"
import FormContact from '../components/core/FormContact'

function Contact() {
  return (
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

        <FormContact />
      </div>
    </section>
  );
}

export default Contact