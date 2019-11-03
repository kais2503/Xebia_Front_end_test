export const bookStoreReducer = (state = {}, action) => {

    switch (action.type) {
        case 'GET_BOOKS_SUCCESS':
            return {
                ...state,
                books: [...action.books],
                loading: false
            }
        case 'GET_BOOKS_LOADING':
            return {
                ...state,
                loading: true
            }
        case 'GET_BOOKS_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.error
            }

        default:
            return state
    }

}