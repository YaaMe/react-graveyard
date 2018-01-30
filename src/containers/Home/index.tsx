import * as React from 'react';
import { Login } from 'containers';


export default class Home extends React.Component {
    render() {
        console.log(Login);
        return (
            <div style={{ background: '#fff', padding: 24, minHeight: 1200}}>
                <h2>Home</h2>
            </div>
        )
    }
}
