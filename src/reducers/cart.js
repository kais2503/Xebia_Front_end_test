export const cartReducer = (state = {}, action) => {

    switch (action.type) {
        case 'ADD_BOOK':
            const updatedBookindex = state
                .values
                .findIndex(value => value.isbn === action.book.isbn);
            if (updatedBookindex !== -1) {
                return {
                    ...state,
                    values: state
                        .values
                        .map((value, key) => key === updatedBookindex
                            ? {
                                ...value,
                                quantity: value.quantity + 1
                            }
                            : value),
                    subtotal: state.subtotal + action.book.price
                }
            }
            return {
                ...state,
                values: [
                    ...state.values, {
                        ...action.book,
                        quantity: 1
                    }
                ],
                subtotal: state.subtotal + action.book.price

            }
        case 'GET_OFFERS_LOADING':
            return {
                ...state,
                loading: true
            }
        case 'GET_OFFERS_ERROR':
            return {
                ...state,
                loading: false
            }
        case 'GET_OFFERS_SUCCESS':
            return {
                ...state,
                loading: false,
                total: action.total
            }

        default:
            return state
    }

}