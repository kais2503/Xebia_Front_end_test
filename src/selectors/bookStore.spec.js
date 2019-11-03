import {bookStoreSelector} from "./bookStore";

describe("bookStoreSelector", () => {
    it("it should get books from state", () => {
        const bookStore = {
            books: [],
            error: '',
            loading: false
        }

        expect(bookStoreSelector.booksSelector({bookStore})).toBe(bookStore.books);
    });
    it("it should get loading from state", () => {
        const bookStore = {
            books: [],
            error: '',
            loading: false
        }

        expect(bookStoreSelector.loadingSelector({bookStore})).toBe(bookStore.loading);
    });
    it("it should get error from state", () => {
        const bookStore = {
            books: [],
            error: '',
            loading: false
        }

        expect(bookStoreSelector.errorSelector({bookStore})).toBe(bookStore.error);
    });
});