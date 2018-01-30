import * as React from 'react';

import {
    Banner,
    LoginForm
} from 'components';
import { BANNER_IMAGES } from 'config';
export default class Home extends React.Component {
    render() {
        return (
            <div style={{ background: '#fff', padding: 24, minHeight: 1200}}>
                <h2>Home</h2>
                <Banner images={BANNER_IMAGES} />
                <LoginForm />
            </div>
        )
    }
}
