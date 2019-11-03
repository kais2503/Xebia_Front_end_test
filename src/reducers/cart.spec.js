import {actionCreators} from "../actions/index";
import {cartReducer} from "./cart";

describe("bookStoreReducer", () => {
    it("should update quantity for existing book and update subtotal cart", () => {
        const fakeBook = {
            isbn: '1234',
            title: 'faketitle',
            price: 10
        }

        const action = actionCreators
            .cart
            .addBook(fakeBook);

        const state = {

            values: [
                {
                    isbn: '1234',
                    title: 'faketitle',
                    price: 10,
                    quantity: 1
                }
            ],
            subtotal: 10
        };

        const received = cartReducer(state, action);

        expect(received).toEqual({
            ...state,
            values: [
                {
                    isbn: '1234',
                    title: 'faketitle',
                    price: 10,
                    quantity: 2
                }
            ],
            subtotal: 20
        });
    });

    it("should update cart values and cart subtotal", () => {
        const fakeIsbn = "12345";

        const action = actionCreators
            .cart
            .deleteBook(fakeIsbn);

        const state = {

            values: [
                {
                    isbn: '1234',
                    title: 'faketitle',
                    price: 10,
                    quantity: 1
                }, {
                    isbn: '12345',
                    title: 'faketitle',
                    price: 25,
                    quantity: 1
                }
            ],
            subtotal: 35
        };

        const received = cartReducer(state, action);

        expect(received).toEqual({
            ...state,
            values: [
                {
                    isbn: '1234',
                    title: 'faketitle',
                    price: 10,
                    quantity: 1
                }
            ],
            subtotal: 10
        });
    });

})