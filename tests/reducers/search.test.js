import {SEARCH_POKEMONS,SEARCH_END, RESET_SEARCH_STRING} from "../../src/js/utils/constants.js";
import SearchReducer from "../../src/js/reducers/search";

describe("SearchReducer Tests", ()=>{
 let intitalState2 , intitalState, searchResults;

    intitalState2 = {
        pokemons: [{"id":"3","name":"Charmender","type":"Fire","trainer":"Broc","imageUrl":"http://localhost:3000/charmender.jpg"},{"id":"4","name":"Magmar","type":"Fire","trainer":"Broc","imageUrl":"http://localhost:3000/magmar.jpg"}],    
        searchString: "m"
    };

    intitalState = {
        pokemons:[], 
        searchString:""
    }
    searchResults = [{"id": "1","name": "Pikachu","type": "electric","trainer": "Ash","imageUrl": "http://localhost:3000/pikachu.jpg"},
                            {"id": "2","name": "Bulbasaur","type": "Grass","trainer": "Misty","imageUrl": "http://localhost:3000/bulbasaur.png"}];

    it("should return orignal state", ()=>{
        expect( SearchReducer(undefined, {}) ).toEqual(intitalState);
    });
    
    it("should return search results", ()=>{
        const expectedState = {pokemons:searchResults, searchString:"m"}
        expect( SearchReducer(intitalState, {type:SEARCH_END, visiblePokemons:searchResults, searchString:"m"}) ).toEqual(expectedState);
    });

    
    it("should return search results", ()=>{
        const expectedState = {pokemons:searchResults, searchString:"m"}
        expect( SearchReducer(intitalState2, {type:SEARCH_END, visiblePokemons:searchResults, searchString:"m"}) ).toEqual(expectedState);
    });

    it("should reset search details", ()=>{
        expect( SearchReducer(intitalState, {type:RESET_SEARCH_STRING}) ).toEqual(intitalState);
    });
    
    it("should reset search details", ()=>{
        expect( SearchReducer(intitalState2, {type:RESET_SEARCH_STRING}) ).toEqual(intitalState);
    });

});