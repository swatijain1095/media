import React from "react";
import "./style.scss";

const Input = (props) => {
  return (
    <div className="input">
      <input {...props} />
    </div>
  );
};

export default Input;
