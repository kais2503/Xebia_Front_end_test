import React from "react";
import {connect} from 'react-redux';

import {getBooksRequest} from '../../../actions/bookStore';
import {Icon} from '../../Atoms/Icon';
import {Modal} from '../../Atoms/Modal';
import {Book} from "../../Molecules/Book";
import {BookDetailed} from "../../Molecules/BookDetailed/index";
import styles from './styles.module.scss';
import {Button} from "../../Atoms/Button/index";
import {selectors} from "../../../selectors";
import {showDetailedBook, hideModal} from "../../../actions/ui";
import {addBook} from "../../../actions/cart";

class BookStore extends React.PureComponent {

    render() {
        const {
            addBook,
            books,
            getbook,
            hideModal,
            showDetailedBook,
            showedDetailedBook
        } = this.props;
        return (
            <div className={styles.container}>

                {books.map((book, index) => (
                    <div>
                        <Book
                            addBook={addBook}
                            cover={book.cover}
                            className={styles.book}
                            isbn={book.isbn}
                            key={index}
                            price={book.price}
                            title={book.title}
                            showBook={showDetailedBook}
                            synopsis={book.synopsis}/>

                    </div>
                ))}
                {showedDetailedBook && <Modal on={showedDetailedBook !== false}>
                    <div>
                        <BookDetailed
                            addBook={addBook}
                            cover={getbook(showedDetailedBook, books).cover}
                            className={styles.book}
                            isbn={getbook(showedDetailedBook, books).isbn}
                            price={getbook(showedDetailedBook, books).price}
                            title={getbook(showedDetailedBook, books).title}
                            synopsis={getbook(showedDetailedBook, books).synopsis}
                            hide={hideModal}/>

                    </div>
                </Modal>
}

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const books = selectors
        .bookStore
        .booksSelector(state);

    const showedDetailedBook = selectors
        .ui
        .showDetailedBookSelector(state);

    return {
        books,
        getbook: (isbn, books) => books.find(book => book.isbn === isbn),
        showedDetailedBook
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addBook: (book) => dispatch(addBook(book)),
        getBooksRequest: () => dispatch(getBooksRequest()),
        showDetailedBook: (isbn) => dispatch(showDetailedBook(isbn)),
        hideModal: () => dispatch(hideModal())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookStore);