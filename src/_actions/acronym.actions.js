import {acronymConstants} from '../_constants';
import {acronymService} from '../_services';
import {history} from "../_helpers";
import {alertActions} from "./alert.actions";
// import { alertActions } from './';
// import { history } from '../_helpers';

export const acronymActions = {
    getAllAcronyms,
    getAcronym,
    addNewAcronym,
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
                acronyms => {
                    dispatch(success(acronym))
                    history.push('/AcROCKnym/'+acronym.id);
                    dispatch(alertActions.success('Acronym Created successful'));
                },
                error => dispatch(failure(error.toString()))
            );
    };

    function request(acronym) { return { type: acronymConstants.ADDNEW_REQUEST, acronym } }
    function success(acronym) { return { type: acronymConstants.ADDNEW_SUCCESS, acronym } }
    function failure(error) { return { type: acronymConstants.ADDNEW_FAILURE, error } }
}
