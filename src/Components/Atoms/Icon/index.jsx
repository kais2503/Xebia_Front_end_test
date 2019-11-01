import React from "react";
import classNames from "classnames"

import styles from "./styles.module.scss";

const partialIcon = ({action, className, type}) => {
    const iconClassName = classNames(styles.icon, styles[`icon-${type}`], className,);
    return <i className={iconClassName}/>
}

export const Icon = React.memo(partialIcon);
