export const showDetailedBook = isbn => {
    return {type: 'SHOW_DETAILED_BOOK', isbn}
}

export const hideModal = () => {
    return {type: 'HIDE_MODAL'}
}

export const uiActionsCreators = {
    hideModal,
    showDetailedBook
}