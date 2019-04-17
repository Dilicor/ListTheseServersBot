import axios from 'axios';

import settings from '../settings';


const client = axios.create({
    baseURL: settings.bot_token,
    json: true
});


/**
 * APIClient is in charge of managing requests to the API
 * and returning the result of these requests.
 */
class APIClient {
    constructor() {

    }
}