import {PureComponent} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from "prop-types";

const portalRoot = document.getElementById('modal');

export class Portal extends PureComponent {
    constructor() {
        super();
        this.el = document.createElement('div');
    }

    componentDidMount() {
        portalRoot.appendChild(this.el);
    };

    componentWillUnmount() {
        portalRoot.removeChild(this.el);
    };

    render() {
        const {children} = this.props;
        return ReactDOM.createPortal(children, this.el);
    }
}

Portal.propTypes = {
    children: PropTypes.element.isRequired
};