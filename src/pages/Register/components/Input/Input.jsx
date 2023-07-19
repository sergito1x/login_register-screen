import React from "react";
import "./Input.css";

const Input = ({ attribute, handleChange, children }) => {
  return (
    <div className="input-container">
      <div className="icon">{children}</div>
      <input
        id={attribute.id}
        name={attribute.name}
        placeholder={attribute.placeholder}
        type={attribute.type}
        className="regular-style"
      />
    </div>
  );
}

export default Input;