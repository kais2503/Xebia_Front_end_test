import {createSelector} from 'reselect'

const cart = state => state.cart;

const cartValuesSelector = createSelector(cart, state => state.values);
const cartloadingSelector = createSelector(cart, state => state.loading);
const subtotalSelector = createSelector(cart, state => state.subtotal);
const totalSelector = createSelector(cart, state => state.total);

export const cartSelector = {
    cartValuesSelector,
    cartloadingSelector,
    subtotalSelector,
    totalSelector
}