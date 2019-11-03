import {connect} from 'react-redux';

import {selectors} from "../../../selectors";
import {showDetailedBook, hideModal} from "../../../actions/ui";
import {addBook} from "../../../actions/cart";
import {getBooksRequest, filterBooks} from '../../../actions/bookStore';

const mapStateToProps = (state) => {
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
        getbook: (isbn, books) => books.find(book => book.isbn === isbn),
        showConfiramtion,
        showedDetailedBook
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addBook: (book) => dispatch(addBook(book)),
        getBooksRequest: (filter) => dispatch(getBooksRequest(filter)),
        showDetailedBook: (isbn) => dispatch(showDetailedBook(isbn)),
        hideModal: () => dispatch(hideModal())
    }
}

export const connecter = connect(mapStateToProps, mapDispatchToProps);