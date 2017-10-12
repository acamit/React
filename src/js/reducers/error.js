import {UPDATE_POKEMON_ERROR,SEARCH_ERROR,GET_ALL_POKEMON_ERROR} from '../utils/constants';

/**
 * Initial state for the error Reducer
 */
const initialState = {
    type: null,
    message: ""
};
/**
 * Reducer for error object in store
 * @param {Object} state 
 * @param {Object} action 
 */
export default function ErrorReducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_POKEMON_ERROR:
        case GET_ALL_POKEMON_ERROR:
        case SEARCH_ERROR:
            {
                let newState = {
                    type: action.type,
                    message: action.error
                };
                return newState;
            }
        default:
            return initialState;
    }
}