import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import reducers from 'reducers';
// import { higherOrderMiddleware } from 'redux-hom';
import { createBrowserHistory } from 'history';

// import { storageMiddleware } from 'utils/Storage';
// import { echoMiddleware } from 'utils/Echo';

// const services = [{
//   id: 'fetch',
//   middleware: fetchMiddleware
// }];

export const history = createBrowserHistory();
const middleware = routerMiddleware(history);
// TODO: remove dev tools or split env
// const create = (typeof window !== 'undefined' && (<any> window).devToolsExtension)
//       ? (<any> window).devToolsExtension({ actionsBlacklist: ['@@redux-form'] })(createStore)
//       : createStore;


export default store = applyMiddleware(middleware)(create)(reducers);
