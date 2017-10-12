import {GET_ALL_POKEMON_SUCCESS,UPDATE_POKEMON_SUCCESS} from "../utils/constants.js";

/**
 * Reducer for the pokemons sections of the store
 * Pokemons are indexed by id in the pokemon object
 * @param {Object} state 
 * @param {Object} action 
 */
export default function PokemonReducer(state = {}, action) {
    switch (action.type) {
        case GET_ALL_POKEMON_SUCCESS:
            {
                let newState = {};
                action.pokemons.forEach(function (pokemon) {
                    newState["" + pokemon.id] = pokemon;
                }, this);
                return newState;
            }
        case UPDATE_POKEMON_SUCCESS:
            {
                let newState = {};
                let pokemon = JSON.parse(action.pokemon).item;
                Object.assign(newState, state, {
                    ["" + pokemon.id]: pokemon
                });
                return newState;
            }
        default:
            return state;
    }
}