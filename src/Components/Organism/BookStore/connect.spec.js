import * as connect from "./connect";

describe('connect', () => {
    describe('mapStateToProps', () => {
        it("should return the messages and the values given by the selectors", () => {
            const fakeState = {
                bookStore: {
                    books: [],
                    loading: false
                },

                ui: {
                    showedDetailedBook: false,
                    showConfiramtion: true
                }

            }

            const fakeGetBook = jest.fn()

            const received = connect.mapStateToProps(fakeState);

            expect(JSON.stringify(received)).toEqual(JSON.stringify({books: [], getBook: fakeGetBook, showConfiramtion: true, showedDetailedBook: false}));
        });

    })
    describe('mapDispatchToProps', () => {
        it("should return a conveniently built functions set", () => {
            const fakeDispatch = jest.fn();
            const fakeBook = {
                isbn: 'fakeisbn',
                title: 'faketitle',
                price: 'fakeprice',
                quantity: 'fakequantity'
            };
            const fakeIsbn = 'fakeIsbn';

            const {addBook, getBooksRequest, showDetailedBook, hideModal} = connect.mapDispatchToProps(fakeDispatch);

            addBook({isbn: 'fakeisbn', title: 'faketitle', price: 'fakeprice', quantity: 'fakequantity'});
            expect(fakeDispatch.mock.calls[0][0]).toEqual({"book": fakeBook, "type": "ADD_BOOK"});

            showDetailedBook(fakeIsbn);
            expect(fakeDispatch.mock.calls[1][0]).toEqual({"isbn": fakeIsbn, "type": "SHOW_DETAILED_BOOK"});

            hideModal();
            expect(fakeDispatch.mock.calls[2][0]).toEqual({"type": "HIDE_MODAL"});

        });
    })
});