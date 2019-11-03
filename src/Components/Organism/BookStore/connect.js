import {connect} from 'react-redux';

import {selectors} from "../../../selectors";
import {actionCreators} from '../../../actions';

export const mapStateToProps = (state) => {
    const books = selectors
        .bookStore
        .booksSelector(state);

    const showedDetailedBook = selectors
        .ui
        .showDetailedBookSelector(state);

    const showConfiramtion = selectors
        .ui
        .showConfiramtionSelector(state);

    return {
        books,
        getBook: (isbn, books) => books.find(book => book.isbn === isbn),
        showConfiramtion,
        showedDetailedBook
    }
}

export const mapDispatchToProps = dispatch => {
    return {
        addBook: (book) => dispatch(actionCreators.cart.addBook(book)),
        getBooksRequest: (filter) => dispatch(actionCreators.bookStore.getBooksRequest(filter)),
        showDetailedBook: (isbn) => dispatch(actionCreators.ui.showDetailedBook(isbn)),
        hideModal: () => dispatch(actionCreators.ui.hideModal())
    }
}

export const connecter = connect(mapStateToProps, mapDispatchToProps);