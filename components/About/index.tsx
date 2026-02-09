import React from 'react';
import { Grid } from '@mui/material';
import { PersonType } from 'types/person';
import Person from './components/Person';
import styles from './About.module.scss';
const About = () => {
  const [show, setShow] = React.useState(false);

  const toggleShow = () => {
    setShow((value) => !value);
  };

  return (
    <section id="about-us" className={styles.about}>
      <div className={styles['about-header']}>
        <h3>About Us</h3>
  <p>
    We help individuals and families find the right property—whether to rent or buy—across well-connected and fast-growing locations.
  </p>

  <p>
    Our focus is on verified listings, transparent communication and practical guidance at every step of the journey.
  </p>

  <p>
    From apartments and independent floors to gated communities and villas, we simplify real estate decisions with local expertise
    and a customer-first approach.
  </p>
</div>
      <div className={styles['about-content']}>
      </div>
    </section>
  );
};

export default About;
