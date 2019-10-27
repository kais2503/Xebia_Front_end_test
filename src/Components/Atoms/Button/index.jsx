import React from "react";
import  classNames from "classnames"

import * as buttonStyles from "./styles.module.scss";
//type ButtonColors = "active" | "dark" | "inactive" | "primary" | "warning";



const PartialButton
 = ({
  children,
  className,
  classNames,
  color = "primary",
  disabled,
  label,
  onClick,
  raised,
  styles,
  type = "button",
}) => {
  const buttonClassName = classNames(
    styles.button,
    raised ? styles.raised : styles.flat,
    styles[`${color}`],
    {
      [styles.disabled]: disabled,
    },
    className,
  );

  return (
    <button
      className={buttonClassName}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {label || children}
    </button>
  );
};

export  const Button = React.memo(
PartialButton,
);
