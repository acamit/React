import {put,takeLatest,all, takeEvery, call, select} from "redux-saga/effects";
import {getData,postData} from "../services/dataOperations";

import * as Constants from "../utils/constants";
import * as Actions from "../utils/actions";
import {getVisiblePokemons, getPokemons} from "../utils/utils";

/**
 * Make request to get All pokemons
 */
export function* getAllPokemon() {
    try {
        const pokemons = yield call(getData);
        yield put(Actions.GetAllPokemonSuccess(pokemons));
    } catch (error) {
        yield put(Actions.GetAllPokemonsError(error));
    }
}

/**
 * watch for GET_ALL_POKEMONS event
 */
export function* watchGetAllPokemon() {
    yield takeLatest(Constants.GET_ALL_POKEMONS, getAllPokemon);
}

/**
 * Send Update request to the server
 * @param {Object} action
 */
export function* updatePokemon(action){
    try{
        const pokemon = yield call(postData, action.pokemon);
        yield put(Actions.UpdatePokemonSuccess(pokemon));
    }catch(error){
        yield put(Actions.UpdatePokemonError(error));
    }
    
}

/**
 * Watch for UPDATE_POKEMON event
 */
export function* watchUpdatePokemon() {
    yield takeEvery(Constants.UPDATE_POKEMON, updatePokemon);
}

/**
 * Filter pokemons based on searchString
 * @param {Object} action 
 */

export function * searchPokemons(action){
    
    let state = yield select();
    // let pokemons=yield select(getPokemons);
    // let filteredPokemons = yield getVisiblePokemons(pokemons, action.searchString);
    
    let filteredPokemons = yield call(getVisiblePokemons, state);
    yield put(Actions.SearchEnd(filteredPokemons, action.searchString));
}

/**
 * watch for SEARCH_POKEMONS event
 */
export function * watchSearchpokemon(){
    yield takeLatest(Constants.SEARCH_POKEMONS, searchPokemons);
}


/**
 * Root saga to watch for update, getAll and search actions 
 */
export default function* rootSaga() {
    yield all([
        watchGetAllPokemon(),
        watchUpdatePokemon(),
        watchSearchpokemon()
    ]);
}
