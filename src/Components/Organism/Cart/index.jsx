import React from "react";
import {Spinner} from "../../Atoms/Spinner/index";

export class Cart extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return <div><Spinner/></div>
    }
}
