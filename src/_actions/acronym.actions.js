import {acronymConstants} from '../_constants';
import {acronymService} from '../_services';
import {alertActions} from "./alert.actions";

export const acronymActions = {
    getAllAcronyms,
    getAcronym,
    addNewAcronym,
    searchAcronyms
};

function getAllAcronyms() {
    return dispatch => {
        dispatch(request());

        acronymService.getAllAcronyms()
            .then(
                acronyms => dispatch(success(acronyms)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: acronymConstants.GETALL_REQUEST } }
    function success(acronyms) { return { type: acronymConstants.GETALL_SUCCESS, acronyms } }
    function failure(error) { return { type: acronymConstants.GETALL_FAILURE, error } }
}

function searchAcronyms(search) {
    return dispatch => {
        dispatch(request());
        acronymService.searchAcronyms(search)
            .then(
                search => dispatch(success(search)),
                error => dispatch(failure(error.toString()))
            );
    };


    function request() { return { type: acronymConstants.GETSEARCH_REQUEST } }
    function success(search) { return { type: acronymConstants.GETSEARCH_SUCCESS, search } }
    function failure(error) { return { type: acronymConstants.GETSEARCH_FAILURE, error } }
}



function getAcronym(id) {
    return dispatch => {
        dispatch(request());
        acronymService.getAcronym(id)
            .then(
                acronyms => dispatch(success(acronyms)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: acronymConstants.GETINDIV_REQUEST } }
    function success(acronyms) { return { type: acronymConstants.GETINDIV_SUCCESS, acronyms } }
    function failure(error) { return { type: acronymConstants.GETINDIV_FAILURE, error } }
}

function addNewAcronym(acronym) {
    return dispatch => {
        dispatch(request(acronym));
        acronymService.addNewAcronym(acronym)
            .then(
                acronym => {
                    dispatch(success(acronym));
                    // history.push('/AcROCKnym/'+acronym.id);
                    window.location.href = '/AcROCKnym/'+acronym.id;
                    dispatch(alertActions.success('Acronym Created successful'));
                },
                error => dispatch(failure(error.toString()))
            );
    };

    function request(acronym) { return { type: acronymConstants.ADDNEW_REQUEST, acronym } }
    function success(acronym) { return { type: acronymConstants.ADDNEW_SUCCESS, acronym } }
    function failure(error) { return { type: acronymConstants.ADDNEW_FAILURE, error } }
}
