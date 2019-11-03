import React from "react";
import {Link} from "react-router-dom";
import {withRouter} from "react-router";

import styles from './styles.module.scss';
import {Icon} from '../../Atoms/Icon';
import {SearchBar} from "../../Atoms/SearchBar/index";

const partialHeader = ({quantity, getBooksRequest, location}) => (
    <div className={styles.container}>
        <div className={styles.label}>Henri Potier</div>
        <div className={styles["cart-part"]}>
            {location.pathname === '/' && <div className={styles['search-bar']}><SearchBar filterBooks={getBooksRequest}/></div>}
            <Link to='/cart'>
                <div className={styles.cart}>
                    <div className={styles.quantity}>{quantity}</div>
                    <div>

                        <Icon type="cart"/>

                    </div>
                </div>
            </Link>
        </div>

    </div>
)

export const Header = withRouter(React.memo(partialHeader));
