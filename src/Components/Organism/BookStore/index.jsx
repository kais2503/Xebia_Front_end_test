import React from "react";
import {Link} from "react-router-dom";

import {Icon} from '../../Atoms/Icon';
import {Modal} from '../../Atoms/Modal';
import {Book} from "../../Molecules/Book";
import {BookDetailed} from "../../Molecules/BookDetailed/index";
import styles from './styles.module.scss';
import {Button} from "../../Atoms/Button/index";
import {connecter} from './connect'

class BookStore extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            addBook,
            books,
            getBook,
            hideModal,
            showConfiramtion,
            showDetailedBook,
            showedDetailedBook,
            getBooksRequest
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
                {showedDetailedBook && <Modal on={showedDetailedBook !== false} hide={hideModal}>
                    <div>
                        <BookDetailed
                            addBook={addBook}
                            cover={getBook(showedDetailedBook, books).cover}
                            className={styles.book}
                            isbn={getBook(showedDetailedBook, books).isbn}
                            price={getBook(showedDetailedBook, books).price}
                            title={getBook(showedDetailedBook, books).title}
                            synopsis={getBook(showedDetailedBook, books).synopsis}
                            hide={hideModal}/>

                    </div>
                </Modal>
}
                {showConfiramtion && <Modal on={showConfiramtion !== false} hide={hideModal}>
                    <div>
                        <div>
                            Le livre {getBook(showConfiramtion, books).title}
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

export default connecter(BookStore);