export const uiReducer = (state = {}, action) => {

    switch (action.type) {
        case 'SHOW_DETAILED_BOOK':
            return {
                ...state,
                showedDetailedBook: action.isbn
            }
        case 'ADD_BOOK':
        case 'HIDE_MODAL':
            return {
                ...state,
                showedDetailedBook: false
            }

        default:
            return state
    }
}
