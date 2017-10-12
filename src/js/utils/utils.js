import {createSelector} from "reselect";
import deepEqual from "deep-equal";
export const getPokemons = (state) => state.pokemons;
export const searchStringSelector = (state)=>state.visiblePokemons.searchString;

/**
 * Selector to filter pokemons
 */
export const getVisiblePokemons = createSelector([getPokemons, searchStringSelector], (pokemons, searchString)=>{
    pokemons = getValuesFromObject(pokemons);
    let results = pokemons;
    if(searchString){
            results = pokemons.filter((item)=>{
                return item.name.toLowerCase().indexOf(searchString.toLowerCase())!==-1;
            });
        }
    return results;
});


/**
 * 
 * @param {object} Fallback to Object.values 
 */
function getValuesFromObject(object){
    let values = [];
    for(let item in object){
        values.push(object[item]);
    }
    return values;
}

