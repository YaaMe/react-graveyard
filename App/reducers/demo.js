import { ACTION_TYPE } from 'graveyard/App/actions/demo';
export default (state = {}, action) => {
    switch (action.type) {
    case `${ACTION_TYPE.DEMO}:success`: return state;
    default: return state;
    }
};
