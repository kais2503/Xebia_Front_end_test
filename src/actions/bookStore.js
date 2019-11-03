export const getBooksRequest = (filter = '') => (dispatch) => {
    const urlRequest = 'http://henri-potier.xebia.fr/books';
    console.log(filter);
    dispatch(getBooksLoading());
    return fetch(urlRequest)
        .then(response => response.json())
        .then(data => dispatch(filter === ''
            ? getBooksSuccess(data)
            : getBooksSuccess(getFiltredBooks(data, filter))))
        .catch(error => console.log(error));

}

export const getBooksSuccess = books => {
    return {type: 'GET_BOOKS_SUCCESS', books}
}

export const getBooksFailure = error => {
    return {type: 'GET_BOOKS_FAILURE', error}
}

export const getBooksLoading = () => {
    return {type: 'GET_BOOKS_LOADING'}
};

const getFiltredBooks = (books, filter) => {
    console.log(books);
    const filterRegex = RegExp(`.${filter}.`, 'i');

    return books.filter(book => filterRegex.test(book.title) || filterRegex.test(book.synopsis.join()));
}