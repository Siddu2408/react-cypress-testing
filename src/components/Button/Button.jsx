import React from "react";
import "./Button.scss";

const Button = ({ onClick, children, className, color, variant }) => {
  const buttonClass = `btn ${className} ${variant} ${color}`;
  return (
    <button className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  color: "default",
  variant: "contained",
};

export default Button;
