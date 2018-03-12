import { server } from 'utils/Axios';

export enum ACTION_TYPE {
    LOGIN = 'LOGIN',
    LOGOUT = 'LOGOUT'
}

export const login = value => {
    return {
        type: ACTION_TYPE.LOGIN,
        promise: server.request({
            method: 'post',
            url: '/user/login/'
        })
    }
};

export const logout = () => ({
    type: ACTION_TYPE.LOGOUT
})
