import { acronymConstants } from '../_constants';

export function acronyms(state = {}, action) {
    switch (action.type) {
        case acronymConstants.GETALL_REQUEST:
            return {
                loading: true
            };
        case acronymConstants.GETALL_SUCCESS:
            return {
                items: action.acronyms
            };
        case acronymConstants.GETALL_FAILURE:
            return {
                error: action.error
            };

        case acronymConstants.GETINDIV_REQUEST:
            return {
                loading: true
            };
        case acronymConstants.GETINDIV_SUCCESS:
            return {
                item: action.acronyms
            };
        case acronymConstants.GETINDIV_FAILURE:
            return {
                error: action.error
            };
        case acronymConstants.DELETE_REQUEST:
            // add 'deleting:true' property to acronym being deleted
            return {
                ...state,
                items: state.items.map(acronym =>
                    acronym.id === action.id
                        ? { ...acronym, deleting: true }
                        : acronym
                )
            };
        case acronymConstants.DELETE_SUCCESS:
            // remove deleted acronym from state
            return {
                items: state.items.filter(acronym => acronym.id !== action.id)
            };
        case acronymConstants.DELETE_FAILURE:
            // remove 'deleting:true' property and add 'deleteError:[error]' property to acronym
            return {
                ...state,
                items: state.items.map(acronym => {
                    if (acronym.id === action.id) {
                        // make copy of acronym without 'deleting:true' property
                        const { deleting, ...acronymCopy } = acronym;
                        // return copy of acronym with 'deleteError:[error]' property
                        return { ...acronymCopy, deleteError: action.error };
                    }

                    return acronym;
                })
            };
        default:
            return state
    }
}
