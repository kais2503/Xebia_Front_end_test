import {uiReducer} from "./ui";
import {actionCreators} from "../actions/index";;

describe("uiReducer", () => {
    it("should set showedDetailedBooks and showConfiramtion to false when hiding modal", () => {
        const action = actionCreators
            .ui
            .hideModal();

        const state = {
            showedDetailedBook: true,
            showConfiramtion: true
        };

        const received = uiReducer(state, action);

        expect(received).toEqual({
            ...state,
            showedDetailedBook: false,
            showConfiramtion: false
        });
    });
    it("should set book's isbn to  showedDetailedBooks  when showing detailed book", () => {
        const fakeIsbn = '1234'
        const action = actionCreators
            .ui
            .showDetailedBook(fakeIsbn);

        const state = {
            showedDetailedBook: false
        };

        const received = uiReducer(state, action);

        expect(received).toEqual({
            ...state,
            showedDetailedBook: fakeIsbn
        });
    });

    it("should set book's isbn to  showConfiramtion and set showDetailedBokk to false  w" +
            "hen adding book to cart",
    () => {
        const fakeBook = {
            isbn: '1234',
            title: 'faketitle',
            price: 'fakeprice'
        };
        const action = actionCreators
            .cart
            .addBook(fakeBook);

        const state = {
            showedDetailedBook: true,
            showConfiramtion: ''
        };

        const received = uiReducer(state, action);

        expect(received).toEqual({
            ...state,
            showedDetailedBook: false,
            showConfiramtion: fakeBook.isbn
        });
    });
})