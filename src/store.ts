import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
// import { middleware as reduxPackMiddleware } from 'redux-pack'
import { createBrowserHistory } from 'history';
import { storageMiddleware } from 'utils/Storage';
import { echoMiddleware } from 'utils/Echo';

// import thunk from 'redux-thunk';
import reducers from 'reducers';

export const history = createBrowserHistory();
const middleware = routerMiddleware(history);

let newMiddleware = applyMiddleware(
//    thunk,
//    reduxPackMiddleware,
    storageMiddleware,
    echoMiddleware,
    middleware
);

// TODO: remove dev tools or split env
const create = (typeof window !== 'undefined' && (<any> window).devToolsExtension)
    ? (<any> window).devToolsExtension({ actionsBlacklist: ['@@redux-form'] })(createStore)
: createStore;


export const store = newMiddleware(create)(reducers)
