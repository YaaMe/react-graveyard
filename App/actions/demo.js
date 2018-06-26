import { server } from 'graveyard/App/utils/Axios';

export const ACTION_TYPE = {
    DEMO: 'DEMO'
};

export const someFunction = avalue => ({
    type: ACTION_TYPE.DEMO,
    $fetch: {
        requestBody: {
            method: 'get',
            url: 'url'
        }
    }
});
