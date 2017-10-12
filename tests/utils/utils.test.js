import {
    getVisiblePokemons
} from "../../src/js/utils/utils";

import  { searchResults , searchResults2, searchResults3 , state, state2, state3} from  "./data";
describe("utils test", () => {

    it("should return search results", () => {
        expect(getVisiblePokemons(state)).toEqual(searchResults);
    });

    it("should recompute only once", () => {
        expect(getVisiblePokemons(state)).toEqual(searchResults);
        expect(getVisiblePokemons(state)).toEqual(searchResults);
        expect(getVisiblePokemons.recomputations()).toEqual(1);
    });

    it("should recompute twice(change of search string)", () => {
        expect(getVisiblePokemons(state)).toEqual(searchResults);
        expect(getVisiblePokemons(state2)).toEqual(searchResults2);
        expect(getVisiblePokemons.recomputations()).toEqual(2);
    });

    it("should recompute twice(change of pokemon state)", () => {
        expect(getVisiblePokemons(state)).toEqual(searchResults);
        expect(getVisiblePokemons(state3)).toEqual(searchResults3);
        expect(getVisiblePokemons.recomputations()).toEqual(4);
    });

});