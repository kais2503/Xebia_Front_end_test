import { combineReducers } from "redux";

import { bookStore } from "./bookStore";

export const reducer = combineReducers({
    bookStore:bookStore
});