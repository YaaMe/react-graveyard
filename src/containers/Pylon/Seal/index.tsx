import * as React from 'react';

import {
    Route,
    NavLink as Link
} from 'react-router-dom';


import { Layout,
         Button } from 'antd';

import {
    DIYHeader,
    Home
} from 'containers';
const { Footer, Content } = Layout;


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

export default ({ match }) => (
    <Layout>
        <DIYHeader match={match}/>
        <Content style={{ padding: '0 50px', marginTop: 64}}>
            <Route exact path={`${match.url}/`} component={Home}/>
            <Route path={`${match.url}/tab2`} component={About}/>
            <Route path={`${match.url}/tab3`} component={Topics}/>
            <Route path={`${match.url}/tab4`} component={About}/>
            <Route path={`${match.url}/tab5`} component={About}/>
        </Content>
        <Footer />
    </Layout>
)
