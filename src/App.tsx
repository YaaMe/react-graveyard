import * as React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Route,
    NavLink as Link
} from 'react-router-dom';

import { Layout,
         Menu,
         Button } from 'antd';
import Login from './containers/Login';

const { Header, Footer, Content } = Layout;
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

class App extends React.Component {
    render() {
        return (
            <Router>
                <Layout>
                    <Header style={{ position: 'fixed', width: '100%' }}>
                        <Menu
                            mode="horizontal"
                            theme="dark"
                            defaultSelectedKeys={['0']}>
                            <Menu.Item key="0"><Link to="/">Home</Link></Menu.Item>
                            <Menu.Item><Link to="/about">About</Link></Menu.Item>
                            <Menu.Item><Link to="/topics">Topics</Link></Menu.Item>
                            <Menu.Item><Link to="/login">Login</Link></Menu.Item>
                            <Menu.Item><Link to="http://www.baidu.com" target="_blank">click to out</Link></Menu.Item>
                        </Menu>
                    </Header>
                    <Content style={{ padding: '0 50px', marginTop: 64}}>
                        <Route exact path="/" component={Home}/>
                        <Route path="/about" component={About}/>
                        <Route path="/topics" component={Topics}/>
                        <Route path="/login" component={Login}/>
                        <Route path="/register" component={About}/>
                    </Content>
                    <Footer />
                </Layout>
            </Router>
        )
    }
}


export default App;
