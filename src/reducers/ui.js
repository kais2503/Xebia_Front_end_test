export const uiReducer = (state = {}, action) => {

    switch (action.type) {
        case 'SHOW_DETAILED_BOOK':
            return {
                ...state,
                showedDetailedBook: action.isbn

            }

        case 'HIDE_MODAL':
            return {
                ...state,
                showConfiramtion: false,
                showedDetailedBook: false
            }
        case 'ADD_BOOK':
            return {
                ...state,
                showedDetailedBook: false,
                showConfiramtion: action.book.isbn

            }
        default:
            return state
    }
}
