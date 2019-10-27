import React from "react";

import styles from './styles.module.scss';
import {Icon} from '../../Atoms/Icon';

const partialHeader = ({quantity}) => (
    <div className={styles.container}>
        <div className={styles.label}>Henri Potier</div>
        <div className={styles.cart}>
            <div className={styles.quantity}>{quantity}</div>
            <div>
                <Icon type="cart"/>

            </div>
        </div>

    </div>
)

export const Header = React.memo(partialHeader);
