import React, {useState} from "react";
import classNames from "classnames"

import styles from './styles.module.scss';
import {Icon} from '../../Atoms/Icon';

const partialBook = ({
    addBook,
    className,
    cover,
    isbn,
    key,
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
        <div className={classNames(styles.container, className)} key={key}>
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
