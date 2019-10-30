import React from "react";
import {connect} from 'react-redux';

import {getBooksRequest} from '../../../actions/bookStore';
import {Icon} from '../../Atoms/Icon';
import {Modal} from '../../Atoms/Modal';
import {Book} from "../../Molecules/Book";
import {BookDetailed} from "../../Molecules/BookDetailed/index";
import {bookStoreSelector} from "../../../selectors/bookStore";
import styles from './styles.module.scss';
import {Button} from "../../Atoms/Button/index";

class BookStore extends React.PureComponent {

    componentDidMount() {
        this
            .props
            .getBooksRequest();
    }
    render() {
        const {books} = this.props;
        return (
            <div className={styles.container}>
                {books.map((book, index) => (
                    <div>
                        <Book
                            cover={book.cover}
                            className={styles.book}
                            isbn={book.isbn}
                            key={index}
                            price={book.price}
                            title={book.title}
                            synopsis={book.synopsis}/>

                    </div>
                ))}
                <Modal on={true}>
                    <div>
                        {books.length > 0 && <BookDetailed
                            cover={books[0].cover}
                            className={styles.book}
                            isbn={books[0].isbn}
                            key={1}
                            price={books[0].price}
                            title={books[0].title}
                            synopsis={books[0].synopsis}/>}

                    </div>
                </Modal>

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        books: bookStoreSelector.booksSelector(state)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getBooksRequest: () => dispatch(getBooksRequest())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookStore);