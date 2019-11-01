import {createSelector} from 'reselect'

const cart = state => state.cart;

const cartValuesSelector = createSelector(cart, state => state.values);
const cartloadingSelector = createSelector(cart, state => state.loading);

export const cartSelector = {
    cartValuesSelector,
    cartloadingSelector
}