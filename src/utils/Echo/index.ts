import { ACTION_TYPE as USER_ACTION } from 'actions/user';
import { message } from 'antd';

export const echoMiddleware = store => next => action => {
    switch (action.type) {
    case USER_ACTION.LOGIN:
        if (action.payload) {
            message.info('user login success');
        }
        break;
        default: ;
    }
    return next(action);
}
