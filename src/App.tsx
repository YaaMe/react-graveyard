import * as React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from 'react-router-dom';

import { Provider } from 'react-redux';

import { store } from 'store';

import { Seal } from 'containers';

const About = () => (
    <div>
        <h2 className="test-color">About</h2>
    </div>
)


export default class App extends React.Component {
    render() {
        console.log('render app')
        return (
            <Provider store={store}>
                <Router>
                    <Switch>
                    <Route path="/seal" component={Seal}/>
                    <Route path="/palace" component={About}/>
                    <Route path="/explorer" component={About}/>
                    <Redirect to="/seal"/>
                    </Switch>
                </Router>
            </Provider>
        )
    }
}

