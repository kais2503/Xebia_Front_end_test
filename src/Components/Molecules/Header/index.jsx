import React from "react";
import {Link} from "react-router-dom";

import styles from './styles.module.scss';
import {Icon} from '../../Atoms/Icon';

const partialHeader = ({quantity}) => (
    <div className={styles.container}>
        <div className={styles.label}>Henri Potier</div>
        <Link to='/cart'>
            <div className={styles.cart}>
                <div className={styles.quantity}>{quantity}</div>
                <div>

                    <Icon type="cart"/>

                </div>
            </div>
        </Link>

    </div>
)

export const Header = React.memo(partialHeader);
