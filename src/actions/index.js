import {uiActionsCreators} from "./ui";
import {cartActionsCreators} from "./cart";
import {bookStoreActionsCreators} from "./bookStore";

export const actionCreators = {
    bookStore: bookStoreActionsCreators,
    cart: cartActionsCreators,
    ui: uiActionsCreators
}