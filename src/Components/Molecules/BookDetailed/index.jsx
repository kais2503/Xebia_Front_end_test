import React, {useState} from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

import styles from './styles.module.scss';
import {Icon} from '../../Atoms/Icon';
import {Button} from "../../Atoms/Button/index";

const partialBookDetailed = ({
    addBook,
    className,
    cover,
    hide,
    isbn,
    price,
    synopsis,
    title
}) => <div className={styles.container}>
    <div>
        <img src={cover} className={styles.cover}/>
    </div>
    <div className={styles.content}>
        <div className={styles.label}>
            <div className={styles.attribute}>Titre :</div>

            <div className={styles.value}>{title}</div>
        </div>
        <div className={styles.label}>
            <div className={styles.attribute}>
                prix:</div>
            <div>{price}
                €</div>
        </div>
        <div>
            Synopsis :</div>
        {synopsis.map((syn, index) => <div key={index}>{syn}</div>)}
        <div className={styles.buttons}>
            <Button color="dark" onClick={hide}>
                <div>
                    <Icon type="chevron-left"/>
                    continuer mes achats
                </div>
            </Button>
            <Button onClick={() => addBook({isbn, title, price})}>
                <div>
                    ajouter au panier
                    <Icon type="chevron-right"/>
                </div>
            </Button>
        </div>
    </div>

</div>;

export const BookDetailed = React.memo(partialBookDetailed);

BookDetailed.propTypes = {
    addBook: PropTypes.func.isRequired,
    className: PropTypes.string,
    cover: PropTypes.string,
    hide: PropTypes.func.isRequired,
    isbn: PropTypes.number.isRequired,
    key: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    showBook: PropTypes.func.isRequired,
    synopsis: PropTypes.array.isRequired,
    title: PropTypes.string
};