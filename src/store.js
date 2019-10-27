import {applyMiddleware, compose, createStore, Store} from "redux";
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import {reducer} from "./reducers";

const initialState = {
    bookStore: {
        loading: false,
        books: [],
        erroe: ''
    }
}
export const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunk)));
