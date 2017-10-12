import { combineReducers} from 'redux';

import PokemonReducer from "./pokemon";
import SearchReducer from "./search";
import ErrorReducer from "./error";

/**
 * Combine all the reducers using combineReducers utility
 */
export default combineReducers({
    pokemons: PokemonReducer, 
    visiblePokemons:SearchReducer,
    error:ErrorReducer
});