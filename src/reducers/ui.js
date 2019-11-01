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
                showedDetailedBook: false
            }

        default:
            return state
    }
}
