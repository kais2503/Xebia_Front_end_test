export const cartReducer = (state = {}, action) => {

    switch (action.type) {
        case 'ADD_BOOK':
            console.log(action.book, state);
            return {
                ...state,
                values: [
                    ...state.values,
                    action.book
                ]
            }

        default:
            return state
    }

}