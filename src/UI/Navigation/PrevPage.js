import React from 'react';
import classes from './PrevPage.module.css';

const prevPage = (props) => (
  <span className={classes.PrevPage} style={props.style}>
    &#10094;
  </span>
);

export default prevPage;
