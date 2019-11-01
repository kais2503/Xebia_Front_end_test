import React from "react";
import {connect} from 'react-redux';

import {getOffersRequest} from "../../../actions/cart";

class PartialCart extends React.PureComponent {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this
            .props
            .getOffersRequest();
    }

    render() {
        return <div>cart</div>
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getOffersRequest: () => dispatch(getOffersRequest())
    }
}

export const Cart = connect(null, mapDispatchToProps)(PartialCart);