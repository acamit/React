import ErrorReducer from "../../src/js/reducers/error";
import {UPDATE_POKEMON_ERROR,SEARCH_ERROR,GET_ALL_POKEMON_ERROR, GET_ALL_POKEMON_SUCCESS, GET_ALL_POKEMONS, UPDATE_POKEMON, UPDATE_POKEMON_SUCCESS} from '../../src/js/utils/constants';


const initialState = {
    type: null,
    message: ""
};

describe("Error reducer tests", ()=>{
    it("should return error state", ()=>{
        let expectedState = {type:UPDATE_POKEMON_ERROR, message:"message"};
        expect(ErrorReducer(initialState,{type:UPDATE_POKEMON_ERROR, error:"message"})).toEqual(expectedState)
    });
     it("should return error state", ()=>{
        let expectedState = {type:SEARCH_ERROR, message:"message"};
        expect(ErrorReducer(initialState,{type:SEARCH_ERROR, error:"message"})).toEqual(expectedState)
    });
     it("should return error state", ()=>{
        let expectedState = {type:GET_ALL_POKEMON_ERROR, message:"message"};
        expect(ErrorReducer(initialState,{type:GET_ALL_POKEMON_ERROR, error:"message"})).toEqual(expectedState)
    });
   
     it("should return initial state", ()=>{
        let expectedState = {type:null, message:""};
        expect(ErrorReducer(initialState,{type:GET_ALL_POKEMONS, error:"message"})).toEqual(expectedState)
    });

    it("should return initial state", ()=>{
        let expectedState = {type:null, message:""};
        expect(ErrorReducer(initialState,{type:UPDATE_POKEMON, error:"message"})).toEqual(expectedState)
    });
    it("should return initial state", ()=>{
        let expectedState = {type:null, message:""};
        expect(ErrorReducer(initialState,{type:UPDATE_POKEMON_SUCCESS, error:"message"})).toEqual(expectedState)
    });
    
    it("should return initial state", ()=>{
        let expectedState = {type:null, message:""};
        expect(ErrorReducer(initialState,{type:GET_ALL_POKEMON_SUCCESS, error:"message"})).toEqual(expectedState)
    });
   
});