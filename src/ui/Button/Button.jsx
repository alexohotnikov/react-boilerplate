import React from "react";
import "./Button.scss";

const Button = ({ children, onClick: clickAction }) => (
  <button type="button" className="Button" onClick={clickAction}>
    {children}
  </button>
);

export default Button;
