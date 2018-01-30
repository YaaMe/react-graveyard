import * as React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Route,
    NavLink as Link
} from 'react-router-dom';

import { Layout,
         Button } from 'antd';
import Login from './containers/Login';
import { DIYHeader } from 'containers';

const { Footer, Content } = Layout;
const Home = () => (
    <div style={{ background: '#fff', padding: 24, minHeight: 1200}}>
        <h2>Home</h2>
    </div>
)

const About = () => (
    <div>
        <h2 className="test-color">About</h2>
        <Button type="primary">button</Button>
    </div>
)

const Topic = ({ match }) => (
    <div>
        <h3>{match.params.topicId}</h3>
    </div>
)

const Topics = ({ match }) => (
    <div>
        <h2>Topics</h2>
        <ul>
            <li>
                <Link to={`${match.url}/rendering`}>
                    Rendering with React
                </Link>
            </li>
            <li>
                <Link to={`${match.url}/components`}>
                    Components
                </Link>
            </li>
            <li>
                <Link to={`${match.url}/props-v-state`}>
                    Props v. State
                </Link>
            </li>
        </ul>

        <Route path={`${match.url}/:topicId`} component={Topic}/>
        <Route exact path={match.url} render={() => (
            <h3>Please select a topic.</h3>
        )}/>
    </div>
)

export default class App extends React.Component {
    render() {
        return (
            <Router>
                <Layout>
                    <DIYHeader />
                    <Content style={{ padding: '0 50px', marginTop: 64}}>
                        <Route exact path="/" component={Home}/>
                        <Route path="/t2" component={About}/>
                        <Route path="/t3" component={Topics}/>
                        <Route path="/t4" component={About}/>
                        <Route path="/t5" component={About}/>
                    </Content>
                    <Footer />
                </Layout>
            </Router>
        )
    }
}

