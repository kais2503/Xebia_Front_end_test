import {bookStoreSelector} from "./bookStore";
import {cartSelector} from "./cart";
import {uiSelector} from "./ui";

export const selectors = {
    bookStore: bookStoreSelector,
    cart: cartSelector,
    ui: uiSelector
};