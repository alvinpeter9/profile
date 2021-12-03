import React from 'react';
import classes from './Heading.module.css';

const heading = (props) => (
  <div className={classes.Heading} style={props.style}>
  {props.heading}
  </div>
);

export default heading;
