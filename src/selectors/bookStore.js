import {createSelector} from 'reselect'

const bookStore = state => state.bookStore;

const booksSelector = createSelector(bookStore, state => state.books);
const loadingSelector = createSelector(bookStore, loading => loading);
const errorSelector = createSelector(bookStore, error => error);

export const bookStoreSelector = {
    booksSelector,
    loadingSelector,
    errorSelector

}