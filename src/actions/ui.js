export const showDetailedBook = isbn => {
    console.log(isbn);
    return {type: 'SHOW_DETAILED_BOOK', isbn}
}

export const hideModal = () => {
    return {type: 'HIDE_MODAL'}
}
