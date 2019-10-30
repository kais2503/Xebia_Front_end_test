import React from "react";
import classNames from "classnames"

import styles from "./styles.module.scss";
//type ButtonColors = "active" | "dark" | "inactive" | "primary" | "warning";

const PartialButton = ({
  children,
  className,
  color = "primary",
  disabled,
  label,
  onClick,
  type = "button"
}) => {
  const buttonClassName = classNames(styles.button, styles[`${color}`], className);

  return (
    <button
      className={buttonClassName}
      disabled={disabled}
      onClick={onClick}
      type={type}>
      {label || children}
    </button>
  );
};

export const Button = React.memo(PartialButton);
