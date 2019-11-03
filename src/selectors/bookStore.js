import {createSelector} from 'reselect'

const bookStore = state => state.bookStore;

const booksSelector = createSelector(bookStore, state => state.books);
const loadingSelector = createSelector(bookStore, state => state.loading);
const errorSelector = createSelector(bookStore, state => state.error);

export const bookStoreSelector = {
    booksSelector,
    errorSelector,
    loadingSelector
}