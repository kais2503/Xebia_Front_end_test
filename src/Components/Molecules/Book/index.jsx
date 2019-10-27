import React, {useState} from "react";
import classNames from "classnames"

import styles from './styles.module.scss';
import {Icon} from '../../Atoms/Icon';

const partialBook = ({
    className,
    cover,
    isbn,
    key,
    price,
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
                    <Icon type="eye" className={styles.icon}/>
                    <Icon type="cart" className={styles.icon}/>
                </div>}
            </div>
            <div className={styles.title}>
                {title}
            </div>

            <div className={styles.price}>
                {price}€</div>

        </div>
    );
}

export const Book = React.memo(partialBook);
