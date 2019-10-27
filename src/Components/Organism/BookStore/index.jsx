import React from "react";
import {connect} from 'react-redux';

import {getBooksRequest} from '../../../actions/bookStore';
import {Icon} from '../../Atoms/Icon';
import {Header} from '../../Molecules/Header';

class BookStore extends React.PureComponent {

    componentDidMount() {
        this
            .props
            .getBooksRequest();
    }
    render() {
        return (
            <div>
                <Header quantity={0}/>
                Book Store
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getBooksRequest: () => dispatch(getBooksRequest())
    }
}

export default connect(null, mapDispatchToProps)(BookStore);