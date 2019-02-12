import { useEffect } from 'react';
import axios from 'axios';

export const server = axios.create({
  // baseURL: BASE_URL,
  timeout: 10000
});

export const fetchMiddleware = store => next => action => {
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

export const useFetch = (requestBody, onSuccess, onError) => {
  useEffect(() => {
    server.request(requestBody).then(onSuccess).catch(onError);
  }, requestBody);
};
