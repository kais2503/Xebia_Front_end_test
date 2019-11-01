import {combineReducers} from "redux";

import {bookStoreReducer} from "./bookStore";
import {cartReducer} from "./cart";
import {uiReducer} from "./ui";

export const reducer = combineReducers({bookStore: bookStoreReducer, cart: cartReducer, ui: uiReducer});