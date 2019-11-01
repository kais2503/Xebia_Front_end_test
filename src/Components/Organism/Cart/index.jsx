import React from "react";
import {connect} from 'react-redux';
import {Link} from "react-router-dom";

import {getOffersRequest, deleteBook} from "../../../actions/cart";
import {selectors} from "../../../selectors";
import {Icon} from '../../Atoms/Icon';
import {Button} from "../../Atoms/Button/index";

import styles from './styles.module.scss';

class PartialCart extends React.PureComponent {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this
            .props
            .getOffersRequest();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.cartValues !== this.props.cartValues) {
            this
                .props
                .getOffersRequest();
        }
    }

    render() {
        const {cartValues, subtotal, total, deleteBook} = this.props;
        if (cartValues.length === 0) {
            return (
                <div className={`${styles.container} ${styles.blank}`}>
                    Votre panier est vide
                    <Button className={styles.button}>
                        <Link to="/">
                            Continuer Mes Achat
                        </Link>
                    </Button>

                </div>

            )
        }
        return (
            <div className={styles.container}>
                <div className={styles.label}>
                    Total de ma commande
                </div>
                {cartValues.map((value, index) => (
                    <div className={styles.value} key={index}>
                        <div>
                            <span onClick={() => deleteBook(value.isbn)}><Icon type="delete" className={styles.icon}/></span>{value.title}</div>
                        <div><Icon type="close" className={styles.icon}/>{value.quantity}</div>
                    </div>
                ))}
                <hr/>

                <div className={styles.amount}>
                    <div>
                        Réduction:</div>
                    <div className={styles.price}>
                        - {subtotal - total}
                        €</div>
                </div>
                <div className={styles.amount}>
                    <div>Total à payer:</div>
                    <div className={styles.price}>{total}
                        €</div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cartValues: selectors
            .cart
            .cartValuesSelector(state),
        subtotal: selectors
            .cart
            .subtotalSelector(state),
        total: selectors
            .cart
            .totalSelector(state)
    }

}

const mapDispatchToProps = dispatch => {
    return {
        getOffersRequest: () => dispatch(getOffersRequest()),
        deleteBook: (isbn) => dispatch(deleteBook(isbn))
    }
}

export const Cart = connect(mapStateToProps, mapDispatchToProps)(PartialCart);