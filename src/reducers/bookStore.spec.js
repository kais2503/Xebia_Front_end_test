import {bookStoreReducer} from "./bookStore";;
import {actionCreators} from "../actions/index";

describe("bookStoreReducer", () => {
    it("should set loading status to false and fill books array when fetching books is s" +
            "uccess",
    () => {
        const fakeBooks = [
            {
                isbn: '1234',
                title: 'faketitle',
                price: 'fakeprice'
            }, {
                isbn: '1234564748',
                title: 'faketitle',
                price: 'fakeprice'
            }
        ]
        const action = actionCreators
            .bookStore
            .getBooksSuccess(fakeBooks);

        const state = {

            books: [],
            error: '',
            loading: true

        };

        const received = bookStoreReducer(state, action);

        expect(received).toEqual({
            ...state,
            books: [...fakeBooks],
            loading: false
        });
    });

    it("should set loading status to true when fetching products", () => {

        const action = actionCreators
            .bookStore
            .getBooksLoading();

        const state = {

            books: [],
            error: '',
            loading: false

        };

        const received = bookStoreReducer(state, action);

        expect(received).toEqual({
            ...state,
            loading: true
        });
    });

    it("should set loading status to false and error attribute to error content  when fe" +
            "tching products is failed",
    () => {
        const fakeError = 'FakeError';

        const action = actionCreators
            .bookStore
            .getBooksFailure(fakeError);

        const state = {

            books: [],
            error: '',
            loading: true

        };

        const received = bookStoreReducer(state, action);

        expect(received).toEqual({
            ...state,
            error: fakeError,
            loading: false
        });
    })

})