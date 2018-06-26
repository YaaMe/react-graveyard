import router, { ROUTER } from 'graveyard/App/routers';
import { createStore, applyMiddleware } from 'redux';
import reducers from 'graveyard/App/reducers';
import { higherOrderMiddleware } from 'redux-hom';
import { fetchMiddleware } from 'graveyard/App/utils/Axios';
const services = [{
    id: 'fetch',
    middleware: fetchMiddleware
}];
export default store = applyMiddleware(
    higherOrderMiddleware({ services })
)(createStore)(reducers);
