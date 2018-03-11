import { handle } from 'redux-pack';
import { ACTION_TYPE as USER_ACTION } from 'actions/user';

export default (state = {}, action) => {
    switch (action.type) {
    case USER_ACTION.LOGIN:
        return handle(state, action, {
            start: prevState => prevState,
            success: prevState => ({...prevState, ...action.payload.data})
        });
    default: return state;
    }
}
