import { acronymConstants } from '../_constants';

export function search(state = {}, action) {
    switch (action.type) {
        case acronymConstants.GETSEARCH_REQUEST:
            return {
                loading: true
            };
        case acronymConstants.GETSEARCH_SUCCESS:
            console.log('state', state, 'action', action)
            // return action.search;
            return {
                items: action.search
            };
        case acronymConstants.GETSEARCH_FAILURE:
            return {
                error: action.error
            };

        default:
            return state
    }
}
