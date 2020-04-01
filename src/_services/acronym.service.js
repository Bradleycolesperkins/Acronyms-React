import {authHeader} from "../_helpers";

export const acronymService = {
    getAllAcronyms,
    getAcronym,
    addNewAcronym,
    searchAcronyms
};

function getAllAcronyms() {
    const requestOptions = {
        method: 'GET',
    };

    return fetch(`/acronyms`, requestOptions).then(handleResponse);
}

function getAcronym(id) {
    const requestOptions = {
        method: 'GET',
    };

    return fetch(`/acronym/${id}`, requestOptions).then(handleResponse);
}

function searchAcronyms(search) {
    const requestOptions = {
        method: 'GET',
    };

    return fetch(`/acronyms/search?q=${search}`, requestOptions).then(handleResponse);
}

function addNewAcronym(acronym) {
    const requestOptions = {
        method: 'POST',
        headers: { ...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify(acronym)
    };
    return fetch(`/acronym`, requestOptions).then(handleResponse);
}


function handleResponse(response) {
    console.log('HANDLE:', response);
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                // logout();
                // window.location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}
