import {applyMiddleware, compose, createStore, Store} from "redux";
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import {reducer} from "./reducers";
import {showDetailedBook} from "./actions/ui";
import {getBooksRequest} from "./actions/bookStore";

const initialState = {
    bookStore: {
        books: [],
        error: '',
        loading: false
    },
    cart: {
        values: [],
        subtotal: 0,
        total: 0
    },
    ui: {
        showedDetailedBook: false,
        showConfiramtion: false
    }

}
export const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunk)));
store.dispatch(getBooksRequest());
