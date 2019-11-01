export const addBook = book => {
    return {type: 'ADD_BOOK', book}
}

export const deleteBook = isbn => {
    return {type: 'DELETE_BOOK', isbn}
}