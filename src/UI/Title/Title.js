import React from 'react';
import classes from './Title.module.css';

const title = (props) => (
  <span className={classes.Title} style={props.style}>
    {props.title}
  </span>
);

export default title;
