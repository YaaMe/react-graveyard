import * as React from 'react';
import { Link, Route } from 'react-router-dom';
import { Input } from 'antd';

const Hello = () => (
    <div>
        <h2>say hello</h2>
    </div>
)

export default class Login extends React.Component {
    render({ match }) {
        return (
            <div>
                <h3> 123123123 </h3>
                <Input placeholder="Basic usage" />
                <Link to={`${match.url}/test`}> click to test</Link>
                <Route path={`${match.url}/test`} component={Hello}/>
            </div>
        )
    }
}
