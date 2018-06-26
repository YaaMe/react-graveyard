import * as axios from 'axios';
import { BASE_URL } from 'graveyard/App/configs';

export const server = axios.create({
    baseURL: BASE_URL,
    timeout: 10000
});

export const fetchMiddleware = sotre => next => action => {
    const {
        requestBody,
        onSuccess = args => ({ type: `${action.type}:success`, ...args }),
        onError = args => ({ type: `${action.type}:error`, ...args })
    } = action.$fetch;
    server.request(requestBody)
        .then((...resp) => store.dispatch(onSuccess(...resp)))
        .catch((...resp) => store.dispatch(onError(...resp)));
    return next(action);
};
