export const addBook = book => {
    return {type: 'ADD_BOOK', book}
}

export const deleteBook = isbn => {
    return {type: 'DELETE_BOOK', isbn}
}

export const getOffersSuccess = total => {
    return {type: 'GET_OFFERS_SUCCESS', total}
}

export const getOffersFailure = error => {
    return {type: 'GET_OFFERS_FAILURE', error}
}

export const getOffersLoading = () => {
    return {type: 'GET_OFFERS_LOADING'}
};

const computeBestOffer = (offers, totalPrice) => {
    const computedPrices = [];
    offers.map((offer) => {
        if (offer.type === 'percentage') {
            computedPrices.push(totalPrice - (totalPrice * offer.value / 100));

        } else if (offer.type === 'minus') {
            computedPrices.push(totalPrice - offer.value);
        } else if (offer.type === 'slice' && Math.floor(totalPrice / offer.sliceValue) > 0) {
            computedPrices.push(totalPrice - Math.floor(totalPrice / offer.sliceValue) * offer.value);
        }
    });

    return Math.min(...computedPrices);
}

export const getOffersRequest = () => (dispatch, getState) => {
    const cartState = getState().cart;
    const cartIds = cartState
        .values
        .reduce((acc, value) => `${acc}${value.isbn},`, '');
    const urlRequest = `http://henri-potier.xebia.fr/books/${cartIds}/commercialOffers`;
    dispatch(getOffersLoading());
    return fetch(urlRequest)
        .then(response => response.json())
        .then(data => dispatch(getOffersSuccess(computeBestOffer(data.offers, cartState.subtotal))))
        .catch(error => dispatch(getOffersFailure(error)));
}
