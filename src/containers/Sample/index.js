import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import {sample} from './sample.module.scss';

const Sample = () => (
  <div>
    <label className="marked">outside</label>
    <div className={sample}>
      test <label className="marked">color</label>
      <Button variant="contained" color="primary">Hello <label>world</label></Button>
    </div>
  </div>
);
export default Sample;
