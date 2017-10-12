import PokemonReducer from "../../src/js/reducers/pokemon";
import { GET_ALL_POKEMON_SUCCESS, UPDATE_POKEMON_SUCCESS} from "../../src/js/utils/constants.js";

let initialState = {};

let searchResults = [{"id": "1","name": "Pikachu","type": "electric","trainer": "Ash","imageUrl": "http://localhost:3000/pikachu.jpg"},{"id": "2","name":                                  "Bulbasaur","type": "Grass","trainer": "Misty","imageUrl": "http://localhost:3000/bulbasaur.png"}];
let intialState2={};
searchResults.forEach(function(pokemon) {
    intialState2[""+pokemon.id]=pokemon;
}, this);

describe("Pokemon reducer tests", ()=>{
    
    it("should get all pokemons", ()=>{
        let expectedState = {};
         searchResults.forEach(function(pokemon) {
             expectedState[""+pokemon.id]=pokemon;
         }, this);
         expect(PokemonReducer(initialState,{type:GET_ALL_POKEMON_SUCCESS, pokemons:searchResults})).toEqual(expectedState)
    });

    it("should return newState with the updated pokemon", ()=>{
        let expectedState = {};
         searchResults.forEach(function(pokemon) {
             expectedState[""+pokemon.id]=pokemon;
         }, this);
         let obj = {
             item:{"id": "2","name":"Bulbasaur2","type": "Grass2","trainer": "Misty2","imageUrl": "http://localhost:3000/bulbasaur.png2"}
         }
         let p = JSON.stringify(obj);
         expectedState["2"]={"id": "2","name":"Bulbasaur2","type": "Grass2","trainer": "Misty2","imageUrl": "http://localhost:3000/bulbasaur.png2"};
         expect(PokemonReducer(intialState2,{type:UPDATE_POKEMON_SUCCESS, pokemon:p})).toEqual(expectedState)
    });
    

});