import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

import styles from "./styles.module.scss";

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

Button.propTypes = {
  children: PropTypes.element,
  className: PropTypes.string,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string
};
