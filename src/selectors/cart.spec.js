import {cartSelector} from "./cart";

describe("cartSelector", () => {
    it("it should get cart values from state", () => {
        const cart = {
            loading: false,
            values: [],
            subtotal: 0,
            total: 0
        }

        expect(cartSelector.cartValuesSelector({cart})).toBe(cart.values);

    });
    it("it should get loading from state", () => {
        const cart = {
            loading: false,
            values: [],
            subtotal: 0,
            total: 0
        }

        expect(cartSelector.cartloadingSelector({cart})).toBe(cart.loading);
    });
    it("it should get subtotal from state", () => {
        const cart = {
            loading: false,
            values: [],
            subtotal: 0,
            total: 0
        }

        expect(cartSelector.subtotalSelector({cart})).toBe(cart.subtotal);
    });
    it("it should get total from state", () => {
        const cart = {
            loading: false,
            values: [],
            subtotal: 0,
            total: 0
        }

        expect(cartSelector.totalSelector({cart})).toBe(cart.total);
    });
});