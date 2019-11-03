import {connect} from 'react-redux';

import {selectors} from "../../../selectors";
import {actionCreators} from '../../../actions';

export const mapStateToProps = (state) => {
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

export const mapDispatchToProps = dispatch => {
    return {
        getOffersRequest: () => dispatch(actionCreators.cart.getOffersRequest()),
        deleteBook: (isbn) => dispatch(actionCreators.cart.deleteBook(isbn))
    }
}

export const connecter = connect(mapStateToProps, mapDispatchToProps);