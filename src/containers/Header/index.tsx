import * as React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { HEAD_LINK } from 'config/index';
const { Header } = Layout;

const DIYHeader = () => (
    <Header style={{ position: 'fixed', width: '100%' }}>
        <Menu
            mode="horizontal"
            theme="dark"
            defaultSelectedKeys={['0']}>
            <Menu.Item key="0"><Link to="/">Home</Link></Menu.Item>
            <Menu.Item><Link to="/about">About</Link></Menu.Item>
            <Menu.Item><Link to="/topics">Topics</Link></Menu.Item>
            <Menu.Item><Link to="/login">Login</Link></Menu.Item>
            <Menu.Item><Link to={HEAD_LINK} target="_blank">click to out</Link></Menu.Item>
        </Menu>
    </Header>
)

export default DIYHeader
