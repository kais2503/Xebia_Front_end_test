import React, {useState} from "react";
import classNames from "classnames"

import styles from './styles.module.scss';
import {Icon} from '../../Atoms/Icon';
import {Button} from "../../Atoms/Button/index";

const partialBookDetailed = ({
    className,
    cover,
    hide,
    isbn,
    price,
    synopsis,
    title
}) => <div className={styles.container}>
    <div>
        <img src={cover}/>
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
        {synopsis.map((syn, index) => <div>{syn}</div>)}
        <div className={styles.buttons}>
            <Button color="dark" onClick={hide}>
                <div>
                    <Icon type="chevron-left"/>
                    continuer mes achats
                </div>
            </Button>
            <Button >
                <div>
                    Voir mon panier
                    <Icon type="chevron-right"/>
                </div>
            </Button>
        </div>
    </div>

</div>;

export const BookDetailed = React.memo(partialBookDetailed);