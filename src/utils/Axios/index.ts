import axios from 'axios';
import {
    SERVER_HOST as HOST,
    SERVER_TIMEOUT as TIMEOUT
} from 'config';

export const server = axios.create({
    baseURL: HOST,
    timeout: TIMEOUT,
    headers: {
        'Content-Type': 'application/json',
    },
})
