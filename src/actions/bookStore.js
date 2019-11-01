export const getBooksRequest = () => (dispatch) => {

    const urlRequest = 'http://henri-potier.xebia.fr/books';
    dispatch(getBooksLoading());
    return fetch(urlRequest)
        .then(response => response.json())
        .then(data => dispatch(getBooksSuccess(data)))
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
