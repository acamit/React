import * as Constants from '../../src/js/utils/constants';
import * as Actions from "../../src/js/utils/actions";

describe('actions', ()=>{

    const pokemons = {
        "1":{"id":"1","name":"Pikachu","type":"electric","trainer":"Ash","imageUrl":"http://localhost:3000/pikachu.jpg"},
        "2":{"id":"2","name":"Bulbasaur","type":"Grass","trainer":"Misty","imageUrl":"http://localhost:3000/bulbasaur.png"}
    }
    const pokemonArray = [
        {"id":"1","name":"Pikachu","type":"electric","trainer":"Ash","imageUrl":"http://localhost:3000/pikachu.jpg"},
        {"id":"2","name":"Bulbasaur","type":"Grass","trainer":"Misty","imageUrl":"http://localhost:3000/bulbasaur.png"}
    ]

    it('should create an action to GetAllPokemons', ()=>{
        const expectedAction={type:Constants.GET_ALL_POKEMONS};
        expect(Actions.GetAllPokemons()).toEqual(expectedAction);
    });

    it('should create an action to show getAll pokemon success', ()=>{
        const expectedAction={type:Constants.GET_ALL_POKEMON_SUCCESS, pokemons};
        expect(Actions.GetAllPokemonSuccess(pokemons)).toEqual(expectedAction);
    });

    it('should create an action to show get pokemon Error', ()=>{
        const error = {status:"Error"};
        const expectedAction={type:Constants.GET_ALL_POKEMON_ERROR , error };
        expect(Actions.GetAllPokemonsError({status:"Error"})).toEqual(expectedAction);
    });

    it('should create an action to UpdatePokemon', ()=>{
        const expectedAction={type:Constants.UPDATE_POKEMON,pokemon:pokemons["1"]};
        expect(Actions.UpdatePokemon(pokemons["1"])).toEqual(expectedAction);
    });

    it('should create an action to UpdatePokemonSuccess', ()=>{
        const expectedAction={type:Constants.UPDATE_POKEMON_SUCCESS,pokemon:pokemons["1"]};
        expect(Actions.UpdatePokemonSuccess(pokemons["1"])).toEqual(expectedAction);
    });
    it('should create an action to show udpate pokemon error', ()=>{
        const error = {status:"Error"};
        const expectedAction={type:Constants.UPDATE_POKEMON_ERROR , error };
        expect(Actions.UpdatePokemonError(error)).toEqual(expectedAction);
    });

    it('should create an action to show udpate pokemon error', ()=>{
       const searchString = "Search";
        const expectedAction={type:Constants.SEARCH_POKEMONS , searchString };
        expect(Actions.SearchPokemons(searchString)).toEqual(expectedAction);
    });

    it('should create an action to depict search finish', ()=>{
        const searchString = "Search";
        const expectedAction={type:Constants.SEARCH_END , visiblePokemons:pokemonArray,  searchString };
        expect(Actions.SearchEnd(pokemonArray, searchString)).toEqual(expectedAction);
    });

    it('should create an action to reset search string', ()=>{
        const expectedAction={type:Constants.RESET_SEARCH_STRING};
        expect(Actions.ResetSearchString()).toEqual(expectedAction);
    });
});