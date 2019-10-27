import {createSelector} from 'reselect'

const bookStore = state.bookStore;

const booksSelector = createSelector(bookStore, books => books);
const loadingSelector = createSelector(bookStore, loading => loading);
const errorSelector = createSelector(bookStore, error => error);

export const bookStoreSelector = {
    booksSelector,
    loadingSelector,
    errorSelector

}