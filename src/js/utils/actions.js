import * as Constants from './constants';
/**
 * Get Pokemons Action Generators
 */
export function GetAllPokemons(){
    return {
        type:Constants.GET_ALL_POKEMONS
    };
}

export function GetAllPokemonSuccess(pokemons={}){
    return {
        type:Constants.GET_ALL_POKEMON_SUCCESS,
        pokemons
    };
}

export function GetAllPokemonsError(error={}){
    return {
        type:Constants.GET_ALL_POKEMON_ERROR,
        error
    };
}


/**
 * Update Pokemon Action Generators
 */
export function UpdatePokemon(pokemon){
    return {
        type:Constants.UPDATE_POKEMON,
        pokemon
    };
}

export function UpdatePokemonSuccess(pokemon){
    return {
        type:Constants.UPDATE_POKEMON_SUCCESS,
        pokemon
    };
}


export function UpdatePokemonError(error){
    return {
        type:Constants.UPDATE_POKEMON_ERROR,
        error
    };
}

/**
 * Search Pokemon Action Generators
 * 
 */
export function SearchPokemons(searchString){
    return {
        type:Constants.SEARCH_POKEMONS,
        searchString
    };
}

export function SearchEnd(visiblePokemons, searchString){
    return {
        type:Constants.SEARCH_END,
        visiblePokemons, 
        searchString
    };
}
export function ResetSearchString(){
    return {
        type:Constants.RESET_SEARCH_STRING,
    };
}
