import * as connect from "./connect";

describe('connect', () => {
    describe('mapStateToProps', () => {
        it("should return the messages and the values given by the selectors", () => {
            const fakeState = {
                cart: {
                    values: [],
                    subtotal: 0,
                    total: 0
                }
            }

            const received = connect.mapStateToProps(fakeState);

            expect(received).toEqual({cartValues: [], subtotal: 0, total: 0})
        });

    })
    describe('mapDispatchToProps', () => {
        it("should return a conveniently built functions set", () => {

            const fakeDispatch = jest.fn();

            const fakeIsbn = 'fakeIsbn';

            const {deleteBook, getOffersRequest} = connect.mapDispatchToProps(fakeDispatch);

            deleteBook(fakeIsbn);
            expect(fakeDispatch.mock.calls[0][0]).toEqual({"isbn": fakeIsbn, "type": "DELETE_BOOK"});

        });
    })
});