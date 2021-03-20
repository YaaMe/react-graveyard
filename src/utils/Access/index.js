import { useEffect } from 'react';

// withToken

const useToken = action => {
    // action.requestBody = { token }
    return action;
};

export const solveError = (resp, action) => {
    if (resp.statusCode == 401) return {
        type: `REFRESH_TOKEN`,
        $fetch: {}
    };
    return { type: `${action.type}:error`, ...resp};
};

export const accessMiddleware = store => next => action => {
    const {
        requestBody,
        onSuccess,
        onError = args => solveError(args)
    } = action.$fetch;// action.$access.$fetch

    return next(useToken(action));
};
