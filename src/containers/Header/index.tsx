import * as React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { HEAD_LINK } from 'config/index';
const { Header } = Layout;

interface Props {
    match: any
}

export default class SealHeader extends React.Component<Props, {}> {
    render() {
        let { match } = this.props;
        return (
            <Header style={{ position: 'fixed', width: '100%' }}>
                <Menu
                    mode="horizontal"
                    theme="dark"
                    defaultSelectedKeys={['0']}>
                    <Menu.Item key="0"><Link to={`${match.url}`}>tab1</Link></Menu.Item>
                    <Menu.Item><Link to={`${match.url}/tab2`}>tab2</Link></Menu.Item>
                    <Menu.Item><Link to={`${match.url}/tab3`}>tab3</Link></Menu.Item>
                    <Menu.Item><Link to={`${match.url}/tab4`}>tab4</Link></Menu.Item>
                    <Menu.Item><Link to={`/tab5`}>tab5</Link></Menu.Item>
                    <Menu.Item><Link to={HEAD_LINK} target="_blank">out click</Link></Menu.Item>
                </Menu>
            </Header>
        )}
}

