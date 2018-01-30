import * as React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { HEAD_LINK } from 'config/index';
const { Header } = Layout;

export default () => (
    <Header style={{ position: 'fixed', width: '100%' }}>
        <Menu
            mode="horizontal"
            theme="dark"
            defaultSelectedKeys={['0']}>
            <Menu.Item key="0"><Link to="/">tab1</Link></Menu.Item>
            <Menu.Item><Link to="/t2">tab2</Link></Menu.Item>
            <Menu.Item><Link to="/t3">tab3</Link></Menu.Item>
            <Menu.Item><Link to="/t4">tab4</Link></Menu.Item>
            <Menu.Item><Link to="/t5">tab5</Link></Menu.Item>
            <Menu.Item><Link to={HEAD_LINK} target="_blank">click out</Link></Menu.Item>
        </Menu>
    </Header>
)

