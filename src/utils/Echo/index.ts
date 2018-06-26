// import { ACTION_TYPE as USER_ACTION } from 'actions/user';
// // import { filterPack } from 'utils/Tools';
// import { message } from 'antd';

export const echoMiddleware = store => next => action => {
    console.log(action.type)
    switch (action.type) {
        // case USER_ACTION.LOGIN: filterPack(action, () => message.info('user is login')); break;
        default: ;
    }
    return next(action);
}
