import axios from 'axios';

import settings from '../settings';


const client = axios.create({
    baseURL: settings.api_url,
    json: true
});


/**
 * APIClient is in charge of managing requests to the API
 * and returning the result of these requests.
 */
class APIClient {
    constructor() {

    }

    /**
     * Returns the status of a given server
     * @param {number} id 
     */
    getServerStatus(id) {
        return this._fetch('get', `/api/servers/${id}/status`);
    }

    /**
     * Makes an API request
     * @param {string} method HTTP method
     * @param {string} resource URL
     * @param {*} payload body
     */
    async _fetch(method, resource, payload) {
        return client({
            method,
            url: resource,
            payload,
            headers: {}
        }).then(resp => {
            return resp.data ? resp.data : [];
        })
    }
}