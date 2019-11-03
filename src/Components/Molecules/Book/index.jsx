import React, {useState} from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

import styles from './styles.module.scss';
import {Icon} from '../../Atoms/Icon';

const partialBook = ({
    addBook,
    className,
    cover,
    isbn,
    price,
    showBook,
    title
}) => {

    const [hidden,
        toggleHover] = useState(false);

    const imgStyle = {
        backgroundImage: `url(${cover})`
    };

    return (
        <div className={classNames(styles.container, className)}>
            <div
                className={styles.cover}
                onMouseEnter={() => toggleHover(!hidden)}
                onMouseLeave={() => toggleHover(!hidden)}
                style={imgStyle}>
                {hidden && <div className={styles.action}>
                    <span onClick={() => showBook(isbn)}>
                        <Icon type="eye" className={styles.icon}/></span>
                    <span onClick={() => addBook({isbn, title, price})}><Icon type="cart" className={styles.icon}/></span>
                </div>}
            </div>
            <div className={styles.title}>
                {title}
            </div>

            <div className={styles.price}>
                <span onClick={() => showBook(isbn)}>
                    <Icon type="eye" className={styles.icon}/></span>{price}€</div>

        </div>

    );
}

export const Book = React.memo(partialBook);

Book.propTypes = {
    addBook: PropTypes.func.isRequired,
    className: PropTypes.string,
    cover: PropTypes.string,
    isbn: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    showBook: PropTypes.func.isRequired,
    title: PropTypes.string
};
