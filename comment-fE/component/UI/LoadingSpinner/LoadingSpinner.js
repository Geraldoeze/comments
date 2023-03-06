import React from 'react';

import classes from './LoadingSpinner.module.css';


const  LoadingSpinner = () => (
  <div className={classes.lds_ring}>
    <div />
    <div />
    <div />
    <div />
  </div>
);

export default LoadingSpinner;
