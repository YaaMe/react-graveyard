import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { connectors } from 'contexts';
import {sample} from './sample.module.scss';

const mapStateToProps = ({ test: { testid }}) => ({ testid })
const mapDispatchToProps = dispatch => ({
  test: dispatch({ type: 'TEST' })
})

const Sample = ({ testid }) => (
  <div>
    <label className="marked">outside</label>
    <div className={sample}>
      <div>sample: {testid}</div>
      <Button variant="contained" color="primary">Hello <label>world</label></Button>
    </div>
  </div>
);

export default connectors.connectApp(mapStateToProps, mapDispatchToProps)(Sample);
