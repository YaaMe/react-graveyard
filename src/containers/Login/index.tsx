import * as React from 'react';
import { Link, Route } from 'react-router-dom';

const Hello = () => (
    <div>
        <h2>say hello</h2>
    </div>
)

const Login = ({ match }) => (
    <div>
        <h3> 123123123 </h3>
        <Link to={`${match.url}/test`}> click to test</Link>
        <Route path={`${match.url}/test`} component={Hello}/>
    </div>
)

export default Login

