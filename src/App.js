import React, { Component, useState } from 'react';
import logo from './logo.svg';
import './App.scss';

import Sample from 'containers/Sample';
import store from 'store';
import { StoreContext } from 'redux-react-hook';
const { Provider } = StoreContext;

class App extends Component {
  componentDidMount() {
    console.log('app did mount')
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <Provider value={store}>
            <Sample test={21}/>
          </Provider>
        </header>
      </div>
    );
  }
}

export default App;
