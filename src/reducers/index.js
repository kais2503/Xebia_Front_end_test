import {combineReducers} from "redux";
import {reducer as formReducer} from 'redux-form'

import {bookStoreReducer} from "./bookStore";
import {cartReducer} from "./cart";
import {uiReducer} from "./ui";

export const reducer = combineReducers({bookStore: bookStoreReducer, cart: cartReducer, form: formReducer, ui: uiReducer});