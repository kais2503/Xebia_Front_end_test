import React from "react";
import {connect} from 'react-redux';

import {getBooksRequest} from '../../../actions/bookStore';
import {Icon} from '../../Atoms/Icon';
import {Book} from "../../Molecules/Book/index";
import {bookStoreSelector} from "../../../selectors/bookStore";
import styles from './styles.module.scss';

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
                {books.map((book, index) => <Book
                    cover={book.cover}
                    className={styles.book}
                    isbn={book.isbn}
                    key={index}
                    price={book.price}
                    title={book.title}/>)}
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