import {createSelector} from 'reselect'

const cart = state => state.cart;

const cartValuesSelector = createSelector(cart, state => state.values);

export const cartSelector = {
    cartValuesSelector
}