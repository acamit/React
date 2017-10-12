import React from "react";
import ReactDOM from "react-dom";
import {  BrowserRouter as Router} from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import {Provider} from "react-redux";
import createSagaMiddleware from "redux-saga";

import {GetAllPokemons} from "./utils/actions";
import RootReducer from "./reducers/root";
import App from "./main";
import rootSaga from "./sagas/sagas";

import "../css/bootstrap/dist/css/bootstrap.css";
import "../css/styles.less";

const sagaMiddleware = createSagaMiddleware();

let store = createStore(RootReducer ,applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

store.dispatch(GetAllPokemons());

ReactDOM.render(
    <Provider store={store}>
        <Router>
                <App />
        </Router>
    </Provider>, 
    document.getElementById("container") );