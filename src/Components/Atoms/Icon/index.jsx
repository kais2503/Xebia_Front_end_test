import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

import styles from "./styles.module.scss";

const partialIcon = ({action, className, type}) => {
    const iconClassName = classNames(styles.icon, styles[`icon-${type}`], className,);
    return <i className={iconClassName}/>
}

export const Icon = React.memo(partialIcon);

Icon.propTypes = {
    action: PropTypes.func,
    className: PropTypes.string,
    type: PropTypes.string.isRequired
};
