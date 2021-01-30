import fetch from 'node-fetch';

//Helper Function
function handleResponse(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response.json();
}

//GET Helper
export async function get(url) {
    const requestOptions = {
        method: 'GET',
        headers: { Accept: 'application/json' }
    }
    return await fetch(url, requestOptions)
                 .then(handleResponse);
}

//PUT Helper
export async function put(url, body) {
    const requestOptions = {
        method: 'PUT',
        headers: { Accept: 'application/json', "Content-Type": 'application/json; charset=utf-8' },
        body: JSON.stringify(body)
    }
    return await fetch(url, requestOptions)
                 .then(handleResponse);
}

//POST Helper
export async function post(url, body) {
    const requestOptions = {
        method: 'POST',
        headers: { Accept: 'application/json', "Content-Type": 'application/json; charset=utf-8' },
        body: JSON.stringify(body)
    }
    return await fetch(url, requestOptions)
                 .then(handleResponse);
}