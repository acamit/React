import {put,takeLatest,all, takeEvery, call, select} from "redux-saga/effects";
import {getData,postData} from "../../src/js/services/dataOperations";
import * as Actions from "../../src/js/utils/actions";
import {getVisiblePokemons} from "../../src/js/utils/utils";

import * as Sagas from "../../src/js/sagas/sagas";


describe("Test for sagas", ()=>{
    const pokemons = {"1":{"id":"1","name":"Pikachu","type":"electric","trainer":"Ash","imageUrl":"http://localhost:3000/pikachu.jpg"},"2":{"id":"2","name":"Bulbasaur","type":"Grass","trainer":"Misty","imageUrl":"http://localhost:3000/bulbasaur.png"}, "3":{"id":"3","name":"Charmender","type":"Fire","trainer":"Broc","imageUrl":"http://localhost:3000/charmender.jpg"},"4":{"id":"4","name":"Magmar","type":"Fire","trainer":"Broc","imageUrl":"http://localhost:3000/magmar.jpg"},"5":{"id":"5","name":"Squirtle","type":"Water","trainer":"Ash","imageUrl":"http://localhost:3000/squirtle.jpg"},"6":{"id":"6","name":"togipi","type":"Egg","trainer":"Misty","imageUrl":"http://localhost:3000/togipi.png"},"7":{"id":"7","name":"Charmender","type":"Fire","trainer":"Broc","imageUrl":"http://localhost:3000/charmender.jpg"}};

    describe("Get all pokemon", ()=>{
        let gen = Sagas.getAllPokemon();
        it("calls get data function", ()=>{
            expect(gen.next().value).toEqual(call(getData));
        });

        it("dispatches the Success action", ()=>{
            let v = gen.next(pokemons).value;
            expect(v).toEqual(put(Actions.GetAllPokemonSuccess(pokemons)));
        });

        it("dispatches error action", ()=>{
            var error = {message:"but"};
            expect(gen.throw(error).value).toEqual(put(Actions.GetAllPokemonsError(error)));
        });
    });

    describe("Update pokemon", ()=>{
        
        let gen = Sagas.updatePokemon(Actions.UpdatePokemon(pokemons["1"]));

        it("calls postData function", ()=>{
            expect(gen.next().value).toEqual(call(postData, pokemons["1"]));
        });

        it("dispatches the update success action", ()=>{
            let v = gen.next(pokemons["1"]).value;
            expect(v).toEqual(put(Actions.UpdatePokemonSuccess(pokemons["1"])));
        });
        
        it("dispatches error action", ()=>{
            var error = {message:"but"};
            expect(gen.throw(error).value).toEqual(put(Actions.UpdatePokemonError(error)));
        });

    });

    describe("Search pokemon", ()=>{
        let state = {
            pokemons, 
            visiblePokemons:{
                searchString:"A"
            }
        }
        var searchResults = [{"id":"1","name":"Pikachu","type":"electric","trainer":"Ash","imageUrl":"http://localhost:3000/pikachu.jpg"},{"id":"2","name":"Bulbasaur","type":"Grass","trainer":"Misty","imageUrl":"http://localhost:3000/bulbasaur.png"},{"id":"3","name":"Charmender","type":"Fire","trainer":"Broc","imageUrl":"http://localhost:3000/charmender.jpg"},{"id":"4","name":"Magmar","type":"Fire","trainer":"Broc","imageUrl":"http://localhost:3000/magmar.jpg"},{"id":"7","name":"Charmender","type":"Fire","trainer":"Broc","imageUrl":"http://localhost:3000/charmender.jpg"}];
    
        let gen = Sagas.searchPokemons(Actions.SearchPokemons(state.visiblePokemons.searchString));

        it("call to get the state", ()=>{
            expect(gen.next().value).toEqual(select());
        });

        it("calls the getVisiblePokemons selector", ()=>{
            expect(gen.next(state).value).toEqual(call(getVisiblePokemons, state));
        });
        
        it("dispatches search end action with filtered results", ()=>{
            expect(gen.next(searchResults).value).toEqual(put(Actions.SearchEnd(searchResults, state.visiblePokemons.searchString)));
        });
    });

});