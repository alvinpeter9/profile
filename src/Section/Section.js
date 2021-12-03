import React from 'react';
import About from '../About/About';
import Projects from '../Projects/Projects';
import classes from './Section.module.css';

const Section = (props) => (
  <div className={classes.Wrapper}>
  <About show={props.show}
          aboutRef={props.aboutRef} />
  <Projects show={props.show}
            projectRef={props.projectRef} />
  </div>
);

export default Section;
