import { KEY, LIFECYCLE, middleware } from 'redux-pack';
export { LIFECYCLE } from 'redux-pack';

export const filterPack = (action, callback, status = LIFECYCLE.SUCCESS) => {
    const { meta } = action;
    const lifecycle = meta ? meta[KEY.LIFECYCLE] : null;
    if (lifecycle === status) {
        return callback(meta);
    }
    return action;
}

export const splitPack = action => {
    const { meta } = action;
    const lifecycle = meta ? meta[KEY.LIFECYCLE] : null;
    return {
        ...action,
        type: `${action.type}_${lifecycle.toUpperCase()}`
    }
}

// FIX: not change action
function isPromise(obj: any) {
    return !!obj && typeof obj.then === 'function';
}

export const splitMiddleware = store => next => action => {
    let packAction = middleware(store)(next)(action);
    if (isPromise(packAction.promise)) {
        return splitPack(packAction)
    }
    return next(packAction);
}
