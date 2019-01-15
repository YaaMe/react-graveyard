import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';

import Sample from 'containers/Sample';
import { Providers } from 'contexts';
import store from 'store';
const { AppProvider } = Providers;

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <AppProvider value={store}>
            <Sample/>
          </AppProvider>
        </header>
      </div>
    );
  }
}

export default App;
