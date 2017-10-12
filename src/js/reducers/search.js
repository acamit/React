import {SEARCH_POKEMONS,SEARCH_END,RESET_SEARCH_STRING} from "../utils/constants.js";

/**
 * Initial state for search reducer
 */
const intitalState = {
    pokemons:[], 
    searchString:""
};

/**
 * Reducer to manage the search actions of the application. 
 * State stores the search string and the search results as the Object
 * @param {Object} state 
 * @param {Object} action 
 */
export default function SearchReducer(state = intitalState, action) {
    switch (action.type) {
        case SEARCH_POKEMONS:
            {
                let newState = Object.assign({}, state, {searchString:action.searchString});
                return newState;
            }
        case SEARCH_END:
            {
                let newState = Object.assign({}, state, {
                    pokemons: action.visiblePokemons,
                    searchString: action.searchString
                });
                return newState;
            }
        case RESET_SEARCH_STRING:
            {
                let newState = {pokemons:[],searchString:""};
               return newState;
            }
        default:
            return state;
    }
}