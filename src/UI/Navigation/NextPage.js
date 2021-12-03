import React from 'react';
import classes from './NextPage.module.css';

const nextPage = (props) => (
  <span className={classes.NextPage} style={props.style}>
    &#10095;
  </span>
);

export default nextPage;
