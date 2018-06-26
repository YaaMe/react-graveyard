// import { handle } from 'redux-pack';
import { ACTION_TYPE as USER_ACTION } from 'actions/user';
import { initState, STORAGE_KEY } from 'utils/Storage';

export default (state = initState(STORAGE_KEY.USER), action) => {
    switch (action.type) {
    // case USER_ACTION.LOGIN:
    //     return handle(state, action, {
    //         start: prevState => prevState,
    //         success: prevState => ({...prevState, ...action.payload.data})
    //     });
    case USER_ACTION.LOGOUT: return {};
    default: return state;
    }
}
