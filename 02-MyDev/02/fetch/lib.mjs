import fetch from 'node-fetch';

//Helper Function
function handleResponse(response) {
    return response
                    .text().then(text => {
                        const data = text && JSON.parse(text);
                        
                        if (!response.ok) {
                            const error = (data && data.message) || response.statusText;
                            return Promise.reject(error);
                        }

                        return data;
                    })
                    .catch(new Error("Connection Error"));
}

//GET Helper
export async function get(url) {
    const requestOptions = {
        method: 'GET',
        headers: { Accept: 'application/json' }
    };

    const response= await fetch(url, requestOptions)
                          .then(handleResponse);

    return response;
}