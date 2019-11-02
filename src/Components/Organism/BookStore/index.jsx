import React from "react";
import {connect} from 'react-redux';
import {Link} from "react-router-dom";

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
            showConfiramtion,
            showDetailedBook,
            showedDetailedBook
        } = this.props;
        return (
            <div className={styles.container}>
                <Link to="/cart">Cart</Link>

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
                {showedDetailedBook && <Modal on={showedDetailedBook !== false} hide={hideModal}>
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
                {showConfiramtion && <Modal on={showConfiramtion !== false} hide={hideModal}>
                    <div>
                        <div>
                            Le livre {getbook(showConfiramtion, books).title}
                            a été bien ajouté dans votre panier
                        </div>
                        <div className={styles.buttons}>
                            <Button color="dark" onClick={hideModal}>
                                <div>
                                    <Icon type="chevron-left"/>
                                    continuer mes achats
                                </div>
                            </Button>
                            <Button onClick={hideModal}>

                                <Link to='/cart'>
                                    Voir mon panier
                                    <Icon type="chevron-right"/>
                                </Link>

                            </Button>

                        </div>
                    </div>
                </Modal>}

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
        getBooksRequest: () => dispatch(getBooksRequest()),
        showDetailedBook: (isbn) => dispatch(showDetailedBook(isbn)),
        hideModal: () => dispatch(hideModal())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookStore);